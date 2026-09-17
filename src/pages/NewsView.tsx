import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Phone, Share2, Copy, Check } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./NotFound"; // adjust this path to wherever NotFound.tsx actually lives
import { getNewsBySlug, getImageSrc, type NewsPost } from "../assets/data/news";
import SEO from "./components/SEO";

interface DealerContact {
    location: string;
    numbers: string[];
}

const dealerContacts: DealerContact[] = [
    { location: "Pampanga", numbers: ["0949 994 2737"] },
    { location: "Malolos", numbers: ["0918 854 2610", "0918 854 2615"] },
    { location: "Bataan", numbers: ["0920 940 3154"] },
    {
        location: "Subic",
        numbers: ["0918 854 2194", "0918 854 2813", "0998 587 8267"],
    },
    {
        location: "Marilao",
        numbers: ["0928 559 2107", "0918 854 2716", "0918 854 2168"],
    },
    { location: "Tarlac", numbers: ["0918 854 2792", "0918 854 2326"] },
];

/** Rough reading time from word count — no data beyond what's already on the post. */
function estimateReadingMinutes(text: string): number {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
}

/** Split on blank lines so long-form copy gets real paragraph rhythm instead of one block. */
function toParagraphs(text: string): string[] {
    const parts = text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean);
    return parts.length > 0 ? parts : [text];
}

export default function NewsView() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    // Result is stored together with the slug it belongs to. If that slug
    // no longer matches the current route param, the result is stale and
    // gets treated as "loading" during render — no setState call needed to
    // reset it, which is what was cascading the extra render.
    const [result, setResult] = useState<{
        slug: string;
        post: NewsPost | null;
        notFound: boolean;
    } | null>(null);
    const [copied, setCopied] = useState(false);

    // Lazy initializer runs during render, not inside an effect, so this
    // doesn't trigger the same synchronous-setState-in-effect warning.
    const [progress, setProgress] = useState(() => {
        if (typeof window === "undefined") return 0;
        const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        return docHeight > 0
            ? Math.min(100, (window.scrollY / docHeight) * 100)
            : 0;
    });

    // Scroll progress indicator — setState only ever runs inside the
    // "scroll" callback (an external-system subscription), never
    // synchronously as the effect body executes.
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            setProgress(
                docHeight > 0
                    ? Math.min(100, (scrollTop / docHeight) * 100)
                    : 0,
            );
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Data fetch — setState only runs inside the promise's .then()/.catch(),
    // never synchronously at the top of the effect. Guards against
    // out-of-order responses with the "cancelled" flag.
    useEffect(() => {
        if (!slug) return;

        let cancelled = false;

        getNewsBySlug(slug)
            .then((data) => {
                if (cancelled) return;
                setResult({ slug, post: data ?? null, notFound: !data });
            })
            .catch(() => {
                if (!cancelled) setResult({ slug, post: null, notFound: true });
            });

        return () => {
            cancelled = true;
        };
    }, [slug]);

    // Derived from render, not stored: if the last result doesn't belong to
    // the current slug, we're still loading it — regardless of what the
    // previous article's result was.
    const isCurrent = !!slug && result?.slug === slug;
    const post = isCurrent ? result.post : null;
    const notFound = isCurrent ? result.notFound : false;

    const handleShare = async () => {
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({ title: post?.title, url });
            } catch {
                // user cancelled the native share sheet — no action needed
            }
            return;
        }
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard blocked — nothing we can do without a fallback UI
        }
    };

    if (notFound) {
        return <NotFound />;
    }

    return (
        <>
            {post && (
                <SEO
                    title={post.title}
                    description={
                        post.description.length > 160
                            ? `${post.description.slice(0, 157)}...`
                            : post.description
                    }
                    image={
                        typeof window !== "undefined"
                            ? `${window.location.origin}${getImageSrc(post)}`
                            : getImageSrc(post)
                    }
                    url={`/news/${post.slug}`}
                    type="article"
                />
            )}
            {/* Scroll progress — thin, only meaningful once the article is loaded */}
            <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gray-100">
                <div
                    className="h-full bg-red-600 transition-[width] duration-150 ease-out"
                    style={{ width: `${post ? progress : 0}%` }}
                />
            </div>

            <Header />
            <main className="w-full max-w-full bg-white">
                {/* Back button */}
                <div className="w-full border-b border-gray-100">
                    <div className="container mx-auto px-4 lg:px-6 py-3">
                        <button
                            onClick={() => navigate("/news")}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                        >
                            <ArrowLeft size={14} />
                            Back to News
                        </button>
                    </div>
                </div>

                {!post ? (
                    <div className="py-24">
                        <div className="container mx-auto px-4 lg:px-6 max-w-3xl animate-pulse">
                            <div className="h-3 w-24 bg-gray-100 mb-4" />
                            <div className="h-8 w-3/4 bg-gray-100 mb-8" />
                            <div className="aspect-[2/1] bg-gray-100 mb-8" />
                            <div className="space-y-3">
                                <div className="h-3 w-full bg-gray-100" />
                                <div className="h-3 w-full bg-gray-100" />
                                <div className="h-3 w-2/3 bg-gray-100" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Article header */}
                        <section className="container mx-auto px-4 lg:px-6 pt-10 sm:pt-14 max-w-3xl">
                            <div className="flex flex-wrap items-center gap-3 mb-5">
                                <span className="text-[10px] font-bold uppercase tracking-[1.5px] px-3 py-1.5 bg-red-50 text-red-700">
                                    {post.category}
                                </span>
                                <span className="text-[11px] font-medium uppercase tracking-widest text-gray-400">
                                    {new Date(
                                        post.published_date,
                                    ).toLocaleDateString("en-PH", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                                <span className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-widest text-gray-400">
                                    <Clock size={12} />
                                    {estimateReadingMinutes(
                                        post.description,
                                    )}{" "}
                                    min read
                                </span>
                            </div>
                            <h1 className="text-2xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight leading-tight mb-8 sm:mb-10">
                                {post.title}
                            </h1>
                        </section>

                        {/* Banner image */}
                        <section className="container mx-auto px-4 lg:px-6 max-w-4xl mb-10 sm:mb-14">
                            <div className="aspect-[2/1] overflow-hidden bg-gray-100">
                                <img
                                    src={getImageSrc(post)}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </section>

                        {/* Article body */}
                        <section className="container mx-auto px-4 lg:px-6 max-w-3xl pb-10">
                            <div className="space-y-6">
                                {toParagraphs(post.description).map(
                                    (paragraph, i) =>
                                        i === 0 ? (
                                            <p
                                                key={i}
                                                className="text-lg text-gray-800 leading-relaxed whitespace-pre-line border-l-2 border-red-600 pl-5"
                                            >
                                                {paragraph}
                                            </p>
                                        ) : (
                                            <p
                                                key={i}
                                                className="text-base text-gray-700 leading-relaxed whitespace-pre-line"
                                            >
                                                {paragraph}
                                            </p>
                                        ),
                                )}
                            </div>
                        </section>

                        {/* Share row */}
                        <section className="container mx-auto px-4 lg:px-6 max-w-3xl pb-14 sm:pb-20">
                            <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                                    Share this story
                                </span>
                                <button
                                    onClick={handleShare}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                                >
                                    {copied ? (
                                        <>
                                            <Check size={14} />
                                            Copied
                                        </>
                                    ) : (
                                        <>
                                            {typeof navigator !== "undefined" &&
                                            "share" in navigator ? (
                                                <Share2 size={14} />
                                            ) : (
                                                <Copy size={14} />
                                            )}
                                            {typeof navigator !== "undefined" &&
                                            "share" in navigator
                                                ? "Share"
                                                : "Copy Link"}
                                        </>
                                    )}
                                </button>
                            </div>
                        </section>

                        {/* Dealer contact directory */}
                        <section className="w-full bg-gray-50 border-y border-gray-200">
                            <div className="container mx-auto px-4 lg:px-6 py-14 sm:py-20 max-w-3xl">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-red-600 mb-2">
                                    Get In Touch
                                </p>
                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-8">
                                    Stop by Your Nearest Dealer
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {dealerContacts.map((dealer) => (
                                        <div
                                            key={dealer.location}
                                            className="flex items-start gap-3 bg-white border border-gray-200 px-5 py-4"
                                        >
                                            <span className="mt-0.5 text-red-600">
                                                <Phone size={15} />
                                            </span>
                                            <div>
                                                <p className="text-sm font-black text-gray-900 uppercase tracking-tight mb-1">
                                                    {dealer.location}
                                                </p>
                                                {dealer.numbers.map(
                                                    (number) => (
                                                        <a
                                                            key={number}
                                                            href={`tel:${number.replace(/\s/g, "")}`}
                                                            className="block text-sm text-gray-600 hover:text-red-600 transition-colors duration-150"
                                                        >
                                                            {number}
                                                        </a>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-sm text-gray-700 mt-10">
                                    We have the{" "}
                                    <span className="font-bold text-gray-900">
                                        right car
                                    </span>{" "}
                                    for you.
                                </p>
                            </div>
                        </section>
                    </>
                )}
            </main>
            <Footer />
        </>
    );
}

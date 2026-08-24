import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
    getPublishedNews,
    getImageSrc,
    type NewsPost,
} from "../assets/data/news";

const PAGE_SIZE = 8;

export default function News() {
    const [allPosts, setAllPosts] = useState<NewsPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    useEffect(() => {
        getPublishedNews()
            .then(setAllPosts)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const visiblePosts = allPosts.slice(0, visibleCount);
    const hasMore = visibleCount < allPosts.length;

    return (
        <>
            <Header />
            <main className="w-full max-w-full bg-white">
                {/* Hero */}
                <section className="w-full bg-black py-14 sm:py-16 px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-5 h-0.5 bg-red-600" />
                        <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-500">
                            Stay Updated
                        </span>
                        <span className="w-5 h-0.5 bg-red-600" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        Latest News & Offers
                    </h1>
                    <p className="text-xs sm:text-sm text-white/55">
                        Promotions, launches, and announcements from Carworld
                    </p>
                </section>

                {/* Grid */}
                <section className="container mx-auto px-4 lg:px-6 py-14">
                    {loading && (
                        <p className="text-center text-gray-400 text-sm py-16">
                            Loading news...
                        </p>
                    )}

                    {error && (
                        <p className="text-center text-red-600 text-sm py-16">
                            {error} Please check your connection and try again.
                        </p>
                    )}

                    {!loading && !error && allPosts.length === 0 && (
                        <p className="text-center text-gray-400 text-sm py-16">
                            No news posted yet. Check back soon.
                        </p>
                    )}

                    {!loading && !error && allPosts.length > 0 && (
                        <>
                            <div className="border-t border-l border-gray-200">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                    {visiblePosts.map((post) => (
                                        <a
                                            key={post.slug}
                                            href={`/news/${post.slug}`}
                                            className="group flex flex-col bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-r border-b border-gray-200"
                                        >
                                            <div className="relative w-full aspect-[2/1] overflow-hidden bg-gray-100">
                                                <img
                                                    src={getImageSrc(post)}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2 px-6 py-5 flex-1 border-t-2 border-transparent group-hover:border-red-600 transition-all duration-200">
                                                <span className="text-[11px] font-medium tracking-[1.5px] uppercase text-gray-400">
                                                    {new Date(
                                                        post.published_date,
                                                    ).toLocaleDateString(
                                                        "en-PH",
                                                        {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        },
                                                    )}
                                                </span>
                                                <h3 className="text-base font-bold text-gray-900 leading-snug uppercase">
                                                    {post.title}
                                                </h3>
                                                <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
                                                    {post.description}
                                                </p>
                                                <div className="mt-auto pt-3 flex items-center gap-1.5 text-[11px] font-bold tracking-[1.5px] uppercase text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <span>Read more</span>
                                                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                                                        →
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {hasMore && (
                                <div className="flex items-center justify-center mt-12">
                                    <button
                                        onClick={() =>
                                            setVisibleCount(
                                                (prev) => prev + PAGE_SIZE,
                                            )
                                        }
                                        className="border-2 border-black px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase text-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                                    >
                                        Load More
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
}

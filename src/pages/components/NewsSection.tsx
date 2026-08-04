import { useNavigate } from "react-router-dom";

const NEWS_IMAGE_BASE = "/images/news/";

interface NewsPost {
    category: string;
    date: string;
    title: string;
    description: string;
    image?: string; // filename only, e.g. "reign.jpg"
    href: string;
}

const posts: NewsPost[] = [
    {
        category: "Promo",
        date: "July 1 – 31, 2026",
        title: "Reign Over the Rain",
        description:
            "Don't let the season stop you. Special financing and accessories deals available on select all-wheel drive models this July.",
        href: "/news/reign-over-the-rain",
        image: "reign.jpg",
    },
    {
        category: "Event",
        date: "June 1 - 30, 2026",
        title: "June Deals in Overdrive",
        description:
            "Purchase any Mitsubishi vehicle and get a chance to win a brand-new Xpander 1.5 GLX AT and other amazing prizes.",
        href: "/news/buy-and-win",
        image: "junedeals.jpg",
    },
    {
        category: "New Model",
        date: "May 1 - 31, 2026",
        title: "aMAYzing Drive Deals",
        description:
            "The boldest Triton yet hits Carworld showrooms. Enhanced off-road capability and premium cabin finishes, ready to explore.",
        href: "/news/triton-adventure-series",
        image: "amayzing.jpg",
    },
    {
        category: "Announcement",
        date: "April 1 - 30, 2026",
        title: "Refresh Your Drive",
        description:
            "Four decades of trust, service, and driving excellence in the Philippines. Thank you to every customer who's been part of our journey.",
        href: "/news/45th-anniversary",
        image: "refresh.jpg",
    },
];

function NewsCard({ post }: { post: NewsPost }) {
    const navigate = useNavigate();
    const imageSrc = post.image ? `${NEWS_IMAGE_BASE}${post.image}` : null;

    return (
        <div
            onClick={() => navigate(post.href)}
            className="group flex flex-col bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200"
        >
            {/* Image */}
            <div className="relative w-full aspect-[2/1] overflow-hidden bg-gray-100 flex items-center justify-center">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-[11px] tracking-widest uppercase text-gray-400">
                        Image Banner
                    </div>
                )}
            </div>

            {/* Body */}
            <div className="flex flex-col gap-2 px-6 py-5 flex-1 border-t-2 border-transparent group-hover:border-red-600 transition-all duration-200">
                <span className="text-[11px] font-medium tracking-[1.5px] uppercase text-gray-400">
                    {post.date}
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-snug uppercase">
                    {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {post.description}
                </p>
                <div className="mt-auto pt-3 flex items-center gap-1.5 text-[11px] font-bold tracking-[1.5px] uppercase text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>Read more</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function NewsSection() {
    return (
        <section className="w-full py-20 bg-white">
            {/* Header */}
            <div className="container mx-auto px-4 lg:px-6">
                <p className="text-[11px] font-medium tracking-[3px] uppercase text-red-600 text-center mb-2">
                    Stay Updated
                </p>
                <h2 className="text-3xl font-black text-gray-900 text-center uppercase tracking-tight mb-3">
                    Latest Offers
                </h2>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-4 lg:px-6">
                <div className="border-t border-l border-gray-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {posts.map((post) => (
                            <div
                                key={post.href}
                                className="border-r border-b border-gray-200"
                            >
                                <NewsCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* View More Offers Button */}
            <div className="container mx-auto px-4 lg:px-6 mt-12 flex items-center justify-center">
                <a
                    href="/news"
                    className="group relative overflow-hidden border-2 border-black px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase text-black transition-colors duration-300 hover:text-white inline-flex items-center gap-3"
                >
                    <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                    <span className="relative z-10">View More Offers</span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </a>
            </div>
        </section>
    );
}

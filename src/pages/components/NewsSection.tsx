import { useState, useEffect } from "react";
import {
    getPublishedNews,
    getImageSrc,
    type NewsPost,
} from "../../assets/data/news";

function NewsCard({ post }: { post: NewsPost }) {
    return (
        <a
            href={`/news/${post.slug}`}
            className="group flex flex-col bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200"
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
                    {new Date(post.published_date).toLocaleDateString("en-PH", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
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
        </a>
    );
}

export default function NewsSection() {
    const [posts, setPosts] = useState<NewsPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getPublishedNews()
            .then((data) => setPosts(data.slice(0, 4)))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="w-full py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                <p className="text-[11px] font-medium tracking-[3px] uppercase text-red-600 text-center mb-2">
                    Stay Updated
                </p>
                <h2 className="text-3xl font-black text-gray-900 text-center uppercase tracking-tight mb-3">
                    Latest Offers
                </h2>
            </div>

            <div className="container mx-auto px-4 lg:px-6">
                {loading && (
                    <p className="text-center text-gray-400 text-sm py-10">
                        Loading news...
                    </p>
                )}

                {error && (
                    <p className="text-center text-red-600 text-sm py-10">
                        {error}
                    </p>
                )}

                {!loading && !error && posts.length > 0 && (
                    <div className="border-t border-l border-gray-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            {posts.map((post) => (
                                <div
                                    key={post.slug}
                                    className="border-r border-b border-gray-200"
                                >
                                    <NewsCard post={post} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

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

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

function NewsCardSkeleton() {
    return (
        <div className="flex flex-col bg-white animate-pulse">
            <div className="w-full aspect-[2/1] bg-gray-300" />
            <div className="flex flex-col gap-3 px-6 py-5">
                <div className="h-2.5 w-24 bg-gray-300 rounded" />
                <div className="h-4 w-3/4 bg-gray-300 rounded" />
                <div className="space-y-2 pt-1">
                    <div className="h-3 w-full bg-gray-300 rounded" />
                    <div className="h-3 w-2/3 bg-gray-300 rounded" />
                </div>
            </div>
        </div>
    );
}

export default function NewsSection() {
    const [posts, setPosts] = useState<NewsPost[]>([]);

    useEffect(() => {
        getPublishedNews()
            .then((data) => setPosts(data.slice(0, 4)))
            .catch(() => setPosts([]));
    }, []);

    const showSkeleton = posts.length === 0;

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
                <div className="border-t border-l border-gray-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-4">
                        {showSkeleton
                            ? Array.from({ length: 4 }).map((_, i) => (
                                  <div
                                      key={i}
                                      className="border-r border-b border-gray-200"
                                  >
                                      <NewsCardSkeleton />
                                  </div>
                              ))
                            : posts.map((post) => (
                                  <div
                                      key={post.slug}
                                      className="border-r border-b border-gray-200"
                                  >
                                      <NewsCard post={post} />
                                  </div>
                              ))}
                    </div>
                </div>
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

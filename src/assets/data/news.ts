export interface NewsPost {
    id: number;
    slug: string;
    category: string;
    title: string;
    image: string;
    description: string;
    status: "draft" | "published";
    published_date: string;
    created_date: string;
}

const NEWS_IMAGE_BASE_LIVE =
    "https://mitsubishicarworld.com.ph/uploads/news/images/";
const API_URL = "https://mitsubishicarworld.com.ph/api/get_news.php";

// Bundled fallback images for the original seed posts only.
// New posts uploaded via NewsPoster.tsx will never match this glob,
// so they always fall through to the live uploads folder below.
// const bundledImages = import.meta.glob("../images/news/*.{jpg,jpeg,png,webp}", {
//     eager: true,
//     import: "default",
// }) as Record<string, string>;

export function getImageSrc(post: NewsPost): string {
    // const bundledMatch = Object.entries(bundledImages).find(([path]) =>
    //     path.endsWith(`/${post.image}`),
    // );

    // if (bundledMatch) {
    //     return bundledMatch[1];
    // }

    return `${NEWS_IMAGE_BASE_LIVE}${post.image}`;
}

export async function getPublishedNews(): Promise<NewsPost[]> {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to load news.");
    return res.json();
}

export async function getNewsBySlug(
    slug: string,
): Promise<NewsPost | undefined> {
    const posts = await getPublishedNews();
    return posts.find((post) => post.slug === slug);
}

export async function getNewsByCategory(category: string): Promise<NewsPost[]> {
    const posts = await getPublishedNews();
    if (category === "all") return posts;
    return posts.filter(
        (post) => post.category.toLowerCase() === category.toLowerCase(),
    );
}

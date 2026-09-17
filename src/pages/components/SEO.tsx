import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: "website" | "article";
}

const SITE_NAME = "Mitsubishi Carworld";
const DEFAULT_IMAGE = "https://mitsubishicarworld.com.ph/favicon.png";
const SITE_URL = "https://mitsubishicarworld.com.ph";

export default function SEO({
    title,
    description,
    image = DEFAULT_IMAGE,
    url,
    type = "website",
}: SEOProps) {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = url ? `${SITE_URL}${url}` : SITE_URL;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph (Facebook, LinkedIn, etc.) */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={SITE_NAME} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}

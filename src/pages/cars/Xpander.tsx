import Header from "../components/Header";
import Footer from "../components/Footer";
import VariantSelector, { type Variant } from "../components/VariantSelector";

const IMG_BASE = "/cars/xpander/images";
const VIDEO_BASE = "/cars/xpander/videos";

function DiamondBullet({ className = "" }: { className?: string }) {
    return (
        <svg width="9" height="9" viewBox="0 0 10 10" className={className}>
            <polygon points="5,0 10,5 5,10 0,5" fill="currentColor" />
        </svg>
    );
}

type FeatureSectionProps = {
    index: string;
    eyebrow: string;
    heading: string;
    copy: string;
    ctaLabel: string;
    ctaHref: string;
    image: string;
    imageAlt: string;
    objectPosition?: "object-center" | "object-left" | "object-right";
    imagePosition: "left" | "right";
    theme?: "light" | "dark";
};

function FeatureSection({
    index,
    eyebrow,
    heading,
    copy,
    ctaLabel,
    ctaHref,
    image,
    imageAlt,
    objectPosition = "object-center",
    imagePosition,
    theme = "light",
}: FeatureSectionProps) {
    const isDark = theme === "dark";
    const imageOnLeft = imagePosition === "left";

    return (
        <section className={isDark ? "bg-black" : "bg-white"}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div
                    className={`relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[560px] overflow-hidden ${
                        imageOnLeft
                            ? "lg:order-1 mg4-cut-r"
                            : "lg:order-2 mg4-cut-l"
                    }`}
                >
                    <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        className={`w-full h-full object-cover ${objectPosition}`}
                    />
                </div>

                <div
                    className={`relative flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 ${
                        imageOnLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                    <span
                        aria-hidden="true"
                        className={`absolute top-8 left-6 sm:left-10 lg:left-16 text-[11px] font-bold tracking-widest ${
                            isDark ? "text-white/15" : "text-gray-200"
                        }`}
                    >
                        {index}
                    </span>

                    <div className="max-w-md">
                        <div className="flex items-center gap-2 mb-3">
                            <DiamondBullet
                                className={
                                    isDark ? "text-red-500" : "text-red-600"
                                }
                            />
                            <p
                                className={`text-[11px] font-bold tracking-[3px] uppercase ${
                                    isDark ? "text-red-500" : "text-red-600"
                                }`}
                            >
                                {eyebrow}
                            </p>
                        </div>

                        <h2
                            className={`text-2xl sm:text-3xl lg:text-[2.25rem] font-black uppercase tracking-tight leading-none mb-5 ${
                                isDark ? "text-white" : "text-gray-900"
                            }`}
                        >
                            {heading}
                        </h2>

                        <p
                            className={`text-sm leading-relaxed mb-8 ${
                                isDark ? "text-white/70" : "text-gray-800"
                            }`}
                        >
                            {copy}
                        </p>

                        <a
                            href={ctaHref}
                            className={`inline-block border-2 text-xs font-bold uppercase tracking-widest px-7 py-3 transition-colors duration-200 ${
                                isDark
                                    ? "border-white text-white hover:bg-white hover:text-black"
                                    : "border-black text-black hover:bg-black hover:text-white"
                            }`}
                        >
                            {ctaLabel}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

const xpanderVariants: Variant[] = [
    {
        name: "GLX MT",
        price: 1068000,
        image: `${IMG_BASE}/variants/xpanderglxmt.png`,
        imageAlt: "Mitsubishi Xpander GLX MT",
        specs: [
            "1.5L Unleaded",
            "2WD Manual",
            "5MT(F5M7A)",
            "In-Line 4 DOHC 16-Valve with MIVEC",
        ],
        keyFeatures: [],
    },
    {
        name: "GLX A/T",
        price: 1128000,
        image: `${IMG_BASE}/variants/xpanderglxat.png`,
        imageAlt: "Mitsubishi Xpander GLX AT",
        specs: [
            "1.5L Unleaded",
            "2WD Automatic",
            "4AT(F4AWB) In-Line 4 DOHC 16-Valve with MIVEC",
        ],
        keyFeatures: [],
    },
    {
        name: "GLS A/T",
        price: 1198000,
        image: `${IMG_BASE}/variants/xpanderglsat.png`,
        imageAlt: "Mitsubishi Xpander GLS AT",
        specs: [
            "1.5L Unleaded",
            "2WD Automatic",
            "4AT(F4AWB)",
            "In-Line 4 DOHC 16-Valve with MIVEC",
        ],
        keyFeatures: [],
    },
    {
        name: "Cross A/T",
        price: 1328000,
        image: `${IMG_BASE}/variants/xpandercross.png`,
        imageAlt: "Mitsubishi Xpander Cross AT",
        specs: [
            "1.5L Unleaded",
            "2WD Automatic",
            "4AT(F4AWB)",
            "In-Line 4 DOHC 16-Valve with MIVEC",
        ],
        keyFeatures: [],
    },
];

export default function Xpander() {
    return (
        <>
            <style>{`
                @media (min-width: 1024px) {
                    .mg4-cut-r { clip-path: polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%); }
                    .mg4-cut-l { clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%); }
                }
            `}</style>

            <main className="w-full max-w-full bg-white">
                <Header />

                {/* Hero */}
                <section className="relative w-full h-[70vh] min-h-[480px] overflow-hidden bg-black">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster={`${IMG_BASE}/xpander-hero-poster.jpg`}
                        onError={(e) => {
                            (
                                e.currentTarget as HTMLVideoElement
                            ).style.display = "none";
                        }}
                    >
                        <source
                            src={`${VIDEO_BASE}/xpander-video.mp4`}
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                        <img
                            src={`${IMG_BASE}/xpander-logo.png`}
                            alt="Mitsubishi Xpander"
                            className="h-8 sm:h-10 w-auto mb-4"
                        />
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
                            Reimagine Your Ride
                        </h1>
                        <p className="text-sm sm:text-base text-white/90 mb-1">
                            The best-selling MPV in the country just got better
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-white mb-6">
                            From ₱1,068,000
                        </p>
                        <a
                            href="/contact-us"
                            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-colors duration-200"
                        >
                            Inquire Now
                        </a>
                    </div>
                </section>

                {/* THE DRIVE */}
                <FeatureSection
                    index="01"
                    eyebrow="The Drive"
                    heading="Reimagine Your Drive"
                    copy="The New Xpander comes with a host of convenient features designed to bring comfort anywhere you drive."
                    ctaLabel="Explore the Drive"
                    ctaHref="/vehicles/xpander/drive"
                    image={`${IMG_BASE}/xpander1.png`}
                    imageAlt="Mitsubishi Xpander on the road"
                    imagePosition="right"
                />

                {/* EXTERIOR */}
                <FeatureSection
                    index="02"
                    eyebrow="Xpander Exterior"
                    heading="Reimagine Style"
                    copy="The New Xpander now has the Advanced Dynamic Shield design and new headlight and taillight design which boasts a sleek but rugged look overall."
                    ctaLabel="Explore Exterior"
                    ctaHref="/vehicles/xpander/exterior"
                    image={`${IMG_BASE}/xpander2.png`}
                    imageAlt="Mitsubishi Xpander exterior front view"
                    objectPosition="object-right"
                    imagePosition="left"
                />

                {/* INTERIOR */}
                <FeatureSection
                    index="03"
                    eyebrow="Xpander Interior"
                    heading="Reimagine Space"
                    copy="A calm, welcoming space with a high level of comfort. That's the design philosophy behind the New Xpander interior. Take a peek inside and discover how we've added what the Japanese call 'Omotenashi' or hospitality, throughout the cabin area."
                    ctaLabel="Explore Interior"
                    ctaHref="/vehicles/xpander/interior"
                    image={`${IMG_BASE}/xpander3.png`}
                    imageAlt="Mitsubishi Xpander interior cabin"
                    objectPosition="object-right"
                    imagePosition="right"
                />

                {/* SAFETY */}
                <FeatureSection
                    index="04"
                    eyebrow="Xpander Safety"
                    heading="Reimagine Safety"
                    copy="The New Xpander has physical safety features like a reinforced body shell and airbags. It also has smart safety systems, such as the Emergency Stop Signal, to take passenger protection to new levels."
                    ctaLabel="Explore Safety"
                    ctaHref="/vehicles/xpander/safety"
                    image={`${IMG_BASE}/xpander4.png`}
                    imageAlt="Mitsubishi Xpander safety features"
                    imagePosition="left"
                    theme="dark"
                />

                <VariantSelector
                    variants={xpanderVariants}
                    brochureHref="/brochures/xpander-brochure.pdf"
                />

                <Footer />
            </main>
        </>
    );
}

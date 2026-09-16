import Header from "../components/Header";
import Footer from "../components/Footer";
import VariantSelector, { type Variant } from "../components/VariantSelector";

const IMG_BASE = "/cars/xforce/images";

function DiamondBullet({ className = "" }: { className?: string }) {
    return (
        <svg width="9" height="9" viewBox="0 0 10 10" className={className}>
            <polygon points="5,0 10,5 5,10 0,5" fill="currentColor" />
        </svg>
    );
}

type FeatureSectionProps = {
    index: string;
    eyebrow?: string;
    heading: string;
    copy: string;
    ctaLabel?: string;
    ctaHref?: string;
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
                        {eyebrow && (
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
                        )}

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

                        {ctaLabel && ctaHref && (
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
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

const xforceVariants: Variant[] = [
    {
        name: "GT 1.5G 2WD CVT",
        price: 1119000,
        image: `${IMG_BASE}/variants/gt2wdcvt.png`,
        imageAlt: "Mitsubishi Xforce GLX MT",
        specs: ["1.5L Unleaded", "CVT", "D4 MPI VVT"],
        keyFeatures: [
            "CVT",
            "Tire pressure monitoring system",
            "Leading car departure notification",
            "Forward collision mitigation (vehicle sensing only)",
            "Adaptive cruise control",
            "Blindspot Warning System (BSW)",
            "Parking sensor (rear)",
            "8″ Color LCD Instrument Cluster Display",
            "12.3″ Smart Phone Link Display Audio (SDA) Touchscreen",
        ],
    },
    {
        name: "GLS 1.5G 2WD CVT",
        price: 1611000,
        image: `${IMG_BASE}/variants/gls2wdcvt.png`,
        imageAlt: "Mitsubishi Xforce GLX MT",
        specs: ["1.5L Unleaded", "CVT", "D4 MPI VVT"],
        keyFeatures: [
            "CVT",
            "Active stability control",
            "Active Yaw Control (brake control)",
            "Brake auto hold",
            "8″ Color LCD Instrument Cluster Display",
            "12.3″ Smart Phone Link Display Audio (SDA) Touchscreen",
        ],
    },
];

export default function Xforce() {
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
                    <img
                        src={`${IMG_BASE}/xforce-poster.png`}
                        alt="Mitsubishi Xforce"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                        <img
                            src={`${IMG_BASE}/xforce-logo.png`}
                            alt="Mitsubishi Xforce"
                            className="h-10 sm:h-15 w-auto mb-4"
                        />
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
                            Bigger, Tougher, and Stronger.
                        </h1>
                        <p className="text-lg sm:text-xl font-bold text-white mb-6">
                            From ₱1,119,000
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
                    eyebrow="Unleash the Force"
                    heading="Stylish Yet Powerful Design"
                    copy="Gear up for your everyday adventure with superior driving performance that exceeds expectations."
                    ctaLabel="Explore the Drive"
                    ctaHref="/vehicles/xforce/drive"
                    image={`${IMG_BASE}/xforce1.png`}
                    imageAlt="Mitsubishi Xforce driving"
                    imagePosition="right"
                />

                {/* EXTERIOR */}
                <FeatureSection
                    index="02"
                    eyebrow="Xforce Exterior"
                    heading="Stylish Yet Powerful Design"
                    copy="The XFORCE’s silky and solid design is sure to captivate on the road and spark your sense of excitement."
                    ctaLabel="Explore Exterior"
                    ctaHref="/vehicles/xforce/exterior"
                    image={`${IMG_BASE}/xforce2.png`}
                    imageAlt="Mitsubishi Xforce exterior front view"
                    objectPosition="object-right"
                    imagePosition="left"
                />

                {/* INTERIOR */}
                <FeatureSection
                    index="03"
                    eyebrow="Xforce Interior"
                    heading="Advanced & Sophisticated Interior"
                    copy="Advanced safety features lets you enjoy your everyday adventures with peace of mind."
                    ctaLabel="Explore Interior"
                    ctaHref="/vehicles/xforce/interior"
                    image={`${IMG_BASE}/xforce3.png`}
                    imageAlt="Mitsubishi Xforce interior cabin"
                    objectPosition="object-right"
                    imagePosition="right"
                />

                {/* SAFETY */}
                <FeatureSection
                    index="04"
                    eyebrow="Xforce Safety"
                    heading="Enjoy a secure and worry-free drive"
                    copy="Advanced safety features lets you enjoy your everyday adventures with peace of mind."
                    ctaLabel="Explore Safety"
                    ctaHref="/vehicles/xforce/safety"
                    image={`${IMG_BASE}/xforce4.png`}
                    imageAlt="Mitsubishi Xforce safety features"
                    imagePosition="left"
                    theme="dark"
                />

                {/* AUDIO */}
                <FeatureSection
                    index="05"
                    heading="Dynamic Sound Yamaha Premium Audio"
                    copy="Feel the power of Dynamic Sound Yamaha Premium’s 8-speaker system, delivering a spectacular listening experience in every drive."
                    ctaHref="/vehicles/xforce/audio"
                    image={`${IMG_BASE}/xforce5.png`}
                    imageAlt="Mitsubishi Xforce safety features"
                    imagePosition="right"
                    theme="dark"
                />

                <VariantSelector
                    variants={xforceVariants}
                    brochureHref="/brochures/xforce-brochure.pdf"
                />

                <Footer />
            </main>
        </>
    );
}

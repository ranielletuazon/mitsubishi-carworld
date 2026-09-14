import Header from "../components/Header";
import Footer from "../components/Footer";
import VariantSelector, { type Variant } from "../components/VariantSelector";

const IMG_BASE = "/cars/l300/images";
// const VIDEO_BASE = "/cars/montero/videos";

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
    ctaLabel?: string;
    ctaHref: string;
    image: string;
    imageAlt: string;
    objectPosition?: "object-center" | "object-left" | "object-right";
    imagePosition: "left" | "right";
    theme?: "light" | "dark";
};

function FeatureSection({
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

const monteroVariants: Variant[] = [
    {
        name: "CAB & CHASSIS",
        price: 813000,
        image: `${IMG_BASE}/variants/cab.png`,
        imageAlt: "Mitsubishi Montero Sport GT 4WD AT",
        specs: [
            "2.2L Diesel",
            "2WD Manual",
            "5-speed manual",
            "4 In-line 16 Valve DOHC with Turbocharged – Intercooler System",
        ],
        keyFeatures: [
            "2.2L 16 Valve DOHC (4N14) with Turbocharged – Intercooler System (Euro 4)",
            "Front Suspension: Independent Wishbone and Coil Spring",
            "Rear Suspension: Semi-Elliptic Leaf Spring",
        ],
    },
];

export default function L300() {
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
                        src={`${IMG_BASE}/l300-poster.jpg`}
                        alt="Mitsubishi Montero Sport"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                        <img
                            src={`${IMG_BASE}/l300-logo.png`}
                            alt="Mitsubishi Montero Sport"
                            className="h-4 sm:h-6 w-auto mb-4"
                        />
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
                            The compact workhorse that always delivers
                        </h1>
                        <p className="text-sm sm:text-base text-white/90 mb-1">
                            Meet the next generation L300 utility vehicle. The
                            trusted and reliable partner your business needs.
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-white mb-6">
                            From ₱813,000
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
                    heading="The L300 utility vehicle. Now more powerful than ever."
                    copy="The powerful 2.2 liter (Euro-4-compliant) engine provides 40% more torque and pulling power. So you can take on the toughest roads and feel confident the L300 will get you to your destination."
                    ctaHref="/vehicles/l300/drive"
                    image={`${IMG_BASE}/l3001.jpg`}
                    imageAlt="L300 The Drive"
                    imagePosition="right"
                />

                {/* EXTERIOR */}
                <FeatureSection
                    index="02"
                    eyebrow="L300 Exterior"
                    heading="Small and compact outside"
                    copy="This utility vehicle comes in at just 4440 mm long, so it’s ideal where parking space is a problem. The increased cab height gives you more visibility and a commanding view of the road ahead."
                    ctaHref="/vehicles/l300/exterior"
                    image={`${IMG_BASE}/l3002.jpg`}
                    imageAlt="L300 exterior front view"
                    objectPosition="object-right"
                    imagePosition="left"
                />

                {/* INTERIOR */}
                <FeatureSection
                    index="03"
                    eyebrow="L300 Interior"
                    heading="Comfortable cab and a huge loadspace"
                    copy="Climb inside the cab and you won’t be disappointed. Dual air conditioning keeps you cool on those long journeys and the adaptable cargo area can handle a massive 1215Kg payload."
                    ctaHref="/vehicles/l300/interior"
                    image={`${IMG_BASE}/l3003.jpg`}
                    imageAlt="L300 interior cabin"
                    objectPosition="object-right"
                    imagePosition="right"
                />

                {/* SAFETY */}
                <FeatureSection
                    index="04"
                    eyebrow="L300 Safety"
                    heading="A rugged chassis to help you make that delivery"
                    copy="At Mitsubishi Motors, driver and passenger safety is always of paramount importance. So we’ve given the L300 a stronger, safer chassis."
                    ctaHref="/vehicles/l300/safety"
                    image={`${IMG_BASE}/l3004.jpg`}
                    imageAlt="Mitsubishi Montero Sport safety features"
                    imagePosition="left"
                    theme="dark"
                />

                <VariantSelector
                    variants={monteroVariants}
                    brochureHref="/brochures/montero-sport-brochure.pdf"
                />

                <Footer />
            </main>
        </>
    );
}

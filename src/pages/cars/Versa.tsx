import Header from "../components/Header";
import Footer from "../components/Footer";
// import VariantSelector, { type Variant } from "../components/VariantSelector";

const IMG_BASE = "/cars/versa/images";

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

// const destinatorVariants: Variant[] = [
//     {
//         name: "GT",
//         price: 1939000,
//         image: `${IMG_BASE}/variants/gt.webp`,
//         imageAlt: "Mitsubishi Destinator GT",
//         specs: ["1.5L Unleaded", "2WD Automatic", "CVT", "D4 MPI/DI I/C T/C"],
//         keyFeatures: [
//             "1.5-Liter Turbocharged 4 In-Line Gasoline (4B40) Euro-4",
//             "FCM (Forward Collision Mitigation)",
//             "Synthetic Leather Seats (Heat Guard) in Two-Tone Black/Maroon",
//             "Panoramic Sunroof With Tilt and Slide: Power Sunshade",
//         ],
//     },
//     {
//         name: "GLS",
//         price: 1599000,
//         image: `${IMG_BASE}/variants/gls.webp`,
//         imageAlt: "Mitsubishi Destinator GLS",
//         specs: ["1.5L Unleaded", "2WD Automatic", "CVT", "D4 MPI/DI I/C T/C"],
//         keyFeatures: [
//             "Engine Push Start System",
//             "Active Yaw Control",
//             "Integrated in 8″ LCD Meter Multi-Information Display Monitor",
//             "LED-type daytime running light",
//         ],
//     },
//     {
//         name: "GLX",
//         price: 1389000,
//         image: `${IMG_BASE}/variants/glx.webp`,
//         imageAlt: "Mitsubishi Destinator GLX",
//         specs: ["1.5L Unleaded", "2WD Automatic", "CVT", "D4 MPI/DI I/C T/C"],
//         keyFeatures: [
//             "1.5-Liter Turbocharged 4 In-Line Gasoline (4B40) Euro-4",
//             "8″ Smart Phone Link Display Audio (SDA) Touchscreen with Apple CarPlay and Android Auto, Bluetooth, Tuner and USB ports",
//             "Active Stability Control with TCL",
//             "LED-type Headlamp",
//         ],
//     },
// ];

export default function Versa() {
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
                        src={`${IMG_BASE}/versa-poster.webp`}
                        alt="Mitsubishi Versa"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                        <img
                            src={`${IMG_BASE}/versa-logo.png`}
                            alt="Mitsubishi Versa"
                            className="h-8 sm:h-12 w-auto mb-4"
                        />
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
                            Succeed Further
                        </h1>
                        <p className="text-sm sm:text-base text-white/90 mb-1">
                            Mitsubishi Motors Philippines Reintroduces the
                            Iconic Versa Van
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-white mb-6">
                            From ₱0
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
                    heading="Mitsubishi Motors Philippines Reintroduces the Iconic Versa Van"
                    copy="Mitsubishi Motors Philippines Corporation (MMPC) proudly announces the introduction of the new Mitsubishi Versa Van, a much-awaited return of an iconic nameplate that has long been associated with versatility, durability, and dependable performance."
                    ctaLabel="Explore the Drive"
                    ctaHref="/vehicles/versa-van/drive"
                    image={`${IMG_BASE}/versa1.webp`}
                    imageAlt="Mitsubishi Versa driving"
                    imagePosition="right"
                />

                {/* EXTERIOR */}
                <FeatureSection
                    index="02"
                    eyebrow="Versa Exterior"
                    heading="Accelerate Success"
                    copy="From moving people to accelerating success – move your business forward with every passenger you move. "
                    ctaHref="/vehicles/versa-van/exterior"
                    image={`${IMG_BASE}/versa2.webp`}
                    imageAlt="Mitsubishi Versa exterior front view"
                    objectPosition="object-right"
                    imagePosition="left"
                />

                {/* INTERIOR */}
                <FeatureSection
                    index="03"
                    eyebrow="Versa Interior"
                    heading="Easier In & Out"
                    copy="A wider sliding door makes boarding and exiting faster, perfect for frequent pick-up and drop-off routes. "
                    ctaHref="/vehicles/versa-van/interior"
                    image={`${IMG_BASE}/versa3.webp`}
                    imageAlt="Mitsubishi Destinator interior cabin"
                    objectPosition="object-right"
                    imagePosition="right"
                />

                {/* SAFETY */}
                <FeatureSection
                    index="04"
                    eyebrow="Versa Safety"
                    heading="Comfort, Practicality & Safety"
                    copy="Seating 15 is as cozy and comfy as ever with Versa Van’s roomy design. Each row also gets its own aircon vent to make trips relaxed and comfortable all the way. The Versa Van comes equipped with driver and front passenger SRS airbags so you can have confidence with every drive."
                    ctaHref="/vehicles/versa-van/safety"
                    image={`${IMG_BASE}/versa4.webp`}
                    imageAlt="Mitsubishi Destinator safety features"
                    imagePosition="left"
                    theme="dark"
                />

                {/* <VariantSelector
                    variants={destinatorVariants}
                    brochureHref="/brochures/destinator-brochure.pdf"
                /> */}

                <Footer />
            </main>
        </>
    );
}

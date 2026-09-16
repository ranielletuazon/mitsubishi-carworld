import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Variant } from "../components/VariantSelector";
import VariantSelector from "../components/VariantSelector";
// import VariantSelector, { type Variant } from "../components/VariantSelector";

const IMG_BASE = "/cars/strada/images";

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

const stradaVariants: Variant[] = [
    {
        name: "ATHLETE 4WD AT",
        price: 1764000,
        image: `${IMG_BASE}/variants/athlete4wdat.png`,
        imageAlt: "Mitsubishi Strada GT",
        specs: [
            "2.4L Diesel",
            "4WD Automatic",
            "6-speed automatic",
            "2.4L Intercooled and Turbocharged Direct Injection-Diesel with MIVEC (High Power)",
        ],
        keyFeatures: [
            "Tiptronic Paddle Shifters",
            "Off-Road Mode",
            "4WD System: Super Select 4WD",
            "Front & Rear : 265/60R18 + 18 x 7.5 J Black Alloy",
            "Orange and Black Leather Seats with Orange Stitching",
            "Rear Air Circulator",
            "Active Stability and Traction Control (M-ASTC), Hill Start Assist (HSA), and Trailer Stability Assist (TSA)",
            "Hill Descent Control",
            "Forward Collision Mitigation System (FCM)",
            "Ultrasonic Misacceleration Mitigation System (UMS)",
            "Blind Spot Warning System (BSW)",
            "Auto High-Beam",
        ],
    },
    {
        name: "ATHLETE 2WD AT",
        price: 1443000,
        image: `${IMG_BASE}/variants/athlete4wdat.png`,
        imageAlt: "Mitsubishi Strada GT",
        specs: [
            "2.4L Diesel",
            "2WD Automatic",
            "6-speed automatic",
            "2.4L Intercooled and Turbocharged Direct Injection-Diesel with MIVEC (High Power)",
        ],
        keyFeatures: [
            "Tiptronic Paddle Shifters",
            "Front & Rear : 265/60R18 + 18 x 7.5 J Black Alloy",
            "Orange and Black Leather Seats with Orange Stitching",
        ],
    },
    {
        name: "GLS 4WD MT",
        price: 1465000,
        image: `${IMG_BASE}/variants/4wdmt.png`,
        imageAlt: "Mitsubishi Strada GT",
        specs: [
            "2.4L Diesel",
            "4WD Manual",
            "6-speed manual",
            "2.4L Intercooled and Turbocharged Direct Injection-Diesel with MIVEC (High Power)",
        ],
        keyFeatures: [
            "4WD System: Easy select 4WD",
            "Active Stability and Traction Control (M-ASTC), Hill Start Assist (HSA), and Trailer Stability Assist (TSA)",
        ],
    },
    {
        name: "GLS 2WD AT",
        price: 1325000,
        image: `${IMG_BASE}/variants/2wdat.png`,
        imageAlt: "Mitsubishi Strada GT",
        specs: [
            "2.4L Diesel",
            "2WD Automatic",
            "6-speed automatic",
            "2.4L Intercooled and Turbocharged Direct Injection-Diesel with MIVEC (High Power)",
        ],
        keyFeatures: [
            "Tiptronic Paddle Shifters",
            "Active Stability and Traction Control (M-ASTC), Hill Start Assist (HSA), and Trailer Stability Assist (TSA)",
        ],
    },
    {
        name: "GLS 2WD MT",
        price: 1250000,
        image: `${IMG_BASE}/variants/2wdat.png`,
        imageAlt: "Mitsubishi Strada GT",
        specs: [
            "2.4L Diesel",
            "2WD Manual",
            "6-speed manual",
            "2.4L Intercooled and Turbocharged Direct Injection-Diesel with MIVEC (High Power)",
        ],
        keyFeatures: [
            "Active Stability and Traction Control (M-ASTC), Hill Start Assist (HSA), and Trailer Stability Assist (TSA)",
        ],
    },
    {
        name: "GLS 4WD",
        price: 1175000,
        image: `${IMG_BASE}/variants/gls4wd.png`,
        imageAlt: "Mitsubishi Strada GT",
        specs: [
            "2.4L Diesel",
            "4WD Manual",
            "6-speed manual",
            "2.4L Intercooled and Turbocharged Direct Injection-Diesel (Low Power)",
        ],
        keyFeatures: [
            "4WD System: Easy select 4WD",
            "Black / Dark Gray Fabric Seats",
            "Anti-Lock Braking System (ABS) with Electronic Brakeforce Distribution (EBD) and Brake Assist",
        ],
    },
    {
        name: "GLS 2WD",
        price: 998000,
        image: `${IMG_BASE}/variants/gls4wd.png`,
        imageAlt: "Mitsubishi Strada GT",
        specs: [
            "2.4L Diesel",
            "2WD Manual",
            "6-speed manual",
            "2.4L Intercooled and Turbocharged Direct Injection-Diesel (Low Power)",
        ],
        keyFeatures: [
            "4WD System: Easy select 4WD",
            "Black / Dark Gray Fabric Seats",
            "Anti-Lock Braking System (ABS) with Electronic Brakeforce Distribution (EBD) and Brake Assist",
        ],
    },
];

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
                        src={`${IMG_BASE}/strada1.jpg`}
                        alt="Mitsubishi Strada Poster"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                        <img
                            src={`${IMG_BASE}/strada-logo.png`}
                            alt="Mitsubishi Strada Logo"
                            className="h-8 sm:h-10 w-auto mb-4"
                        />
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
                            Engineered beyond tough
                        </h1>
                        <p className="text-sm sm:text-base text-white/90 mb-1">
                            4X4 prowess with exceptional off-road capability.
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-white mb-6">
                            From ₱998,000
                        </p>
                        <a
                            href="/contact-us"
                            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-colors duration-200"
                        >
                            Inquire Now
                        </a>
                    </div>
                </section>

                {/* Second Header */}
                <section className="relative w-full h-[70vh] min-h-[480px] overflow-hidden bg-black">
                    <img
                        src={`${IMG_BASE}/strada-black.jpg`}
                        alt="Mitsubishi Strada Poster"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                        <img
                            src={`${IMG_BASE}/strada-logo.png`}
                            alt="Mitsubishi Strada Logo"
                            className="h-8 sm:h-10 w-auto mb-4"
                        />
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
                            Black Series
                        </h1>
                    </div>
                </section>

                {/* THE DRIVE */}
                <FeatureSection
                    index="01"
                    eyebrow="STRADA ATHLETE BLACK SERIES"
                    heading="Tough meets Style"
                    copy="The Black Series line continues with the Strada Athlete, now with new black-painted parts that exudes sleek style and toughness."
                    ctaHref="/vehicles/versa-van/drive"
                    image={`${IMG_BASE}/strada2.jpg`}
                    imageAlt="Mitsubishi Versa driving"
                    imagePosition="right"
                />

                {/* EXTERIOR */}
                <FeatureSection
                    index="02"
                    eyebrow="THE DRIVE"
                    heading="In pursuit of the ultimate toughness"
                    copy="We put the Strada pickup through rigorous tests. But being tough wasn’t enough for us. It had to be able to endure the harshest conditions – it had to go beyond tough."
                    ctaHref="/vehicles/versa-van/exterior"
                    image={`${IMG_BASE}/strada3.jpg`}
                    imageAlt="Mitsubishi Versa exterior front view"
                    objectPosition="object-right"
                    imagePosition="left"
                />

                {/* INTERIOR */}
                <FeatureSection
                    index="03"
                    eyebrow="STRADA EXTERIOR"
                    heading="One look and you know it means business"
                    copy="This is a pickup truck that positively screams toughness from grille to tailgate."
                    ctaHref="/vehicles/versa-van/interior"
                    image={`${IMG_BASE}/strada4.jpg`}
                    imageAlt="Mitsubishi Strada interior cabin"
                    objectPosition="object-right"
                    imagePosition="right"
                />

                {/* SAFETY */}
                <FeatureSection
                    index="04"
                    eyebrow="STRADA INTERIOR"
                    heading="Tough doesn’t mean uncomfortable"
                    copy="Step inside the Strada pickup truck and you’ll find a roomy, comfortable interior that feels more like a passenger car."
                    ctaHref="/vehicles/versa-van/safety"
                    image={`${IMG_BASE}/strada5.jpg`}
                    imageAlt="Mitsubishi Strada safety features"
                    imagePosition="left"
                    theme="dark"
                />

                {/* SAFETY */}
                <FeatureSection
                    index="04"
                    eyebrow="STRADA SAFETY"
                    heading="The Strada takes safety to a new level"
                    copy="Whether you’re using the Strada for work, errands or a family adventure, it’s built to keep you safe and secure with a whole raft of advanced safety technologies."
                    ctaHref="/vehicles/versa-van/safety"
                    image={`${IMG_BASE}/strada6.jpg`}
                    imageAlt="Mitsubishi Strada safety features"
                    imagePosition="right"
                    theme="dark"
                />

                <VariantSelector
                    variants={stradaVariants}
                    brochureHref="/brochures/files/strada.pdf"
                />

                <Footer />
            </main>
        </>
    );
}

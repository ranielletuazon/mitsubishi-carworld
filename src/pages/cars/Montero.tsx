import Header from "../components/Header";
import Footer from "../components/Footer";
import VariantSelector, { type Variant } from "../components/VariantSelector";

const IMG_BASE = "/cars/montero/images";
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

const monteroVariants: Variant[] = [
    {
        name: "GT 4WD AT",
        price: 2428000,
        image: `${IMG_BASE}/variants/gt4wdat.png`,
        imageAlt: "Mitsubishi Montero Sport GT 4WD AT",
        specs: [
            "2.4L Diesel",
            "4WD Automatic",
            "8-speed automatic with sport mode",
            "2.4L Intercooled and Turbocharged Direct Injection-Diesel with MIVEC",
        ],
        keyFeatures: [
            "4WD System: Super select 4WD -Ⅱ(SS4 -Ⅱ)",
            "Electronic Parking Brake with Brake Auto Hold Function",
            "Ultrasonic Misacceleration Mitigation System (UMS)",
            "Forward Collision Mitigation system (FCM) and Adaptive Cruise Control System (ACC)",
            "Multi-Around Monitor",
            "Hill Start Assist (HSA) Trailer Stability Assist (TSA) Brake Assist System, and Active Stability and Traction Control (M-ASTC)",
            "Rear Cross Traffic Alert (RCTA)",
            "Blind Spot Warning (BSW) with Lane Change Assist (LCA)",
            "8-inch Color LCD Instrument Meter Cluster",
            "Power Lift Tailgate with Handsfree Function",
        ],
    },
    {
        name: "GT 2WD AT",
        price: 1928000,
        image: `${IMG_BASE}/variants/gt2wdat.png`,
        imageAlt: "Mitsubishi Montero Sport GT 2WD AT",
        specs: [
            "2.4L Diesel",
            "2WD Automatic",
            "8-speed automatic with sport mode",
            "2.4L Intercooled and Turbocharged Direct Injection-Diesel with MIVEC",
        ],
        keyFeatures: [
            "Electronic Parking Brake with Brake Auto Hold Function",
            "Smart Display Audio LCD Touch Screen, Tuner, USB, Bluetooth, HDMI with Android Auto and Apple Carplay",
            "Multi-Around Monitor",
            "Hill Start Assist (HSA) Trailer Stability Assist (TSA) Brake Assist System, and Active Stability and Traction Control (M-ASTC)",
            "8-inch Color LCD Instrument Meter Cluster",
            "Power Lift Tailgate with Handsfree Function",
        ],
    },
    {
        name: "GLS 2WD AT",
        price: 1927000,
        image: `${IMG_BASE}/variants/gt2wdat.png`,
        imageAlt: "Mitsubishi Montero Sport GT 2WD AT",
        specs: [
            "2.4L Diesel",
            "2WD Automatic",
            "8-speed automatic with sport mode",
            "2.4L Intercooled and Turbocharged Direct Injection-Diesel with MIVEC",
        ],
        keyFeatures: [
            "Electronic Parking Brake with Brake Auto Hold Function",
            "Smart Display Audio LCD Touch Screen, Tuner, USB, Bluetooth, HDMI with Android Auto and Apple Carplay",
            "Multi-Around Monitor",
            "Hill Start Assist (HSA) Trailer Stability Assist (TSA) Brake Assist System, and Active Stability and Traction Control (M-ASTC)",
        ],
    },
    {
        name: "GLX 2WD MT",
        price: 1568000,
        image: `${IMG_BASE}/variants/gt2wdat.png`,
        imageAlt: "Mitsubishi Montero Sport GT 2WD AT",
        specs: [
            "2.4L Diesel",
            "2WD Manual",
            "6-speed manual",
            "2.4L Intercooled and Turbocharged Direct Injection-Diesel with MIVEC",
        ],
        keyFeatures: [
            "6-speed Manual Transmission",
            "Anti-Lock Braking System (ABS) with Electronic Brakeforce Distribution (EBD)",
        ],
    },
];

export default function Montero() {
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
                        src={`${IMG_BASE}/montero-poster.jpg`}
                        alt="Mitsubishi Montero Sport"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                        <img
                            src={`${IMG_BASE}/montero-logo.png`}
                            alt="Mitsubishi Montero Sport"
                            className="h-4 sm:h-6 w-auto mb-4"
                        />
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
                            Command the Journey
                        </h1>
                        <p className="text-sm sm:text-base text-white/90 mb-1">
                            Power, presence, and premium comfort in every drive
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-white mb-6">
                            From ₱1,928,000
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
                    heading="Outstanding performance on and off road"
                    copy="The Montero Sport is an SUV that is unashamedly fun to drive. It offers high speed stability and maneuverability, and can tackle any terrain thanks to an advanced 4WD system."
                    ctaLabel="Explore the Drive"
                    ctaHref="/vehicles/montero-sport/drive"
                    image={`${IMG_BASE}/montero1.jpg`}
                    imageAlt="Mitsubishi Montero Sport driving"
                    imagePosition="right"
                />

                {/* EXTERIOR */}
                <FeatureSection
                    index="02"
                    eyebrow="Montero Sport Exterior"
                    heading="Refined High Quality Design"
                    copy="The Montero Sport has a strong, streamlined face, deep, protective front and rear bumpers and side bumpers that are flush to the body. The overall look is advanced, reassuringly tough and every inch the luxurious SUV."
                    ctaLabel="Explore Exterior"
                    ctaHref="/vehicles/montero-sport/exterior"
                    image={`${IMG_BASE}/montero2.jpg`}
                    imageAlt="Mitsubishi Montero Sport exterior front view"
                    objectPosition="object-right"
                    imagePosition="left"
                />

                {/* INTERIOR */}
                <FeatureSection
                    index="03"
                    eyebrow="Montero Sport Interior"
                    heading="Luxurious Cabin with Advanced Technology"
                    copy="Inside the Montero Sport, you’ll find a beautifully crafted cabin that seats up to seven adults. We’ve added many on-board technologies to make your drive more comfortable, you won’t want the journey to end."
                    ctaLabel="Explore Interior"
                    ctaHref="/vehicles/montero-sport/interior"
                    image={`${IMG_BASE}/montero3.jpg`}
                    imageAlt="Mitsubishi Montero Sport interior cabin"
                    objectPosition="object-right"
                    imagePosition="right"
                />

                {/* SAFETY */}
                <FeatureSection
                    index="04"
                    eyebrow="Montero Sport Safety"
                    heading="Intelligent Safety Features"
                    copy="The Montero Sport comes with a host of intelligent features that takes passenger and driver safety way beyond what many other automobile manufacturers offer."
                    ctaLabel="Explore Safety"
                    ctaHref="/vehicles/montero-sport/safety"
                    image={`${IMG_BASE}/montero4.jpg`}
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

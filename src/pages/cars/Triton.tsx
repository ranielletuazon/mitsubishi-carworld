import Header from "../components/Header";
import Footer from "../components/Footer";
import VariantSelector, { type Variant } from "../components/VariantSelector";

const IMG_BASE = "/cars/triton/images";
const VIDEO_BASE = "/cars/triton/videos";

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

const tritonVariants: Variant[] = [
    {
        name: "Athlete 4WD AT",
        price: 2359000,
        image: `${IMG_BASE}/variants/athlete4wd.jpg`,
        imageAlt: "Mitsubishi Triton Athlete AT",
        specs: [
            "2.4L Diesel",
            "4WD Automatic",
            "6-Speed Auto with Sport Mode",
            "D4 I/C 2T/C (EXTRA HIGH POWER)",
        ],
        keyFeatures: [
            "Engine : 4N16 (2440cc) D4 I/C 2T/C",
            "Engine power : Extra high power",
            "Regulation conformity Exhaust emission regulation : EURO5B",
            "Transmission : V6AWH (6A/T)",
            "Transmission Sport mode",
            "Transfer Super select 4WD II",
            "Hill start assist system",
            "Active stability control",
            "Traction control",
            "Active yaw control (brake control)",
            "Power steering type : E.P.S (electric power steering)",
            "Locking system Keyless entry system",
            "Center display : SDA DISP (9″, touch)",
        ],
    },
    {
        name: "GLS 2WD AT",
        price: 1999000,
        image: `${IMG_BASE}/variants/gls2wdat.jpg`,
        imageAlt: "Mitsubishi Triton GLS 2WD A/T",
        specs: [
            "2.4L Diesel",
            "2WD Automatic",
            "6-Speed Auto with Sport Mode",
            "D4 I/C 2T/C (EXTRA HIGH POWER)",
        ],
        keyFeatures: [
            "Engine : 4N16 (2440cc) D4 I/C T/C",
            "Engine power : High power",
            "Regulation conformity Exhaust emission regulation : EURO4",
            "Transmission Sport mode",
            "Hill start assist system",
            "Active stability control",
            "Traction control",
            "Power steering type : H.P.S (hydraulic power steering)",
            "Locking system Keyless entry system",
        ],
    },
    {
        name: "GLX 4WD MT",
        price: 1561000,
        image: `${IMG_BASE}/variants/glx4wdmt.jpg`,
        imageAlt: "Mitsubishi Triton GLX 4WD M/T",
        specs: [
            "2.4L Diesel",
            "4WD Manual",
            "6-Speed Manual",
            "D4 I/C T/C (HIGH POWER)",
        ],
        keyFeatures: [
            "Engine : 4N16 (2440cc) D4 I/C T/C",
            "Engine power : High power",
            "Regulation conformity Exhaust emission regulation : EURO4",
            "Transmission : V6MAA (6M/T)",
            "Transfer Easy select 4WD",
            "Hill start assist system",
            "Active stability control",
            "Traction control",
            "Power steering type : H.P.S (hydraulic power steering)",
        ],
    },
    {
        name: "GLX 2WD AT",
        price: 1735000,
        image: `${IMG_BASE}/variants/glx2wdat.jpg`,
        imageAlt: "Mitsubishi Triton GLX 2WD M/T",
        specs: [
            "2.4L Diesel",
            "4WD Automatic",
            "6-Speed Auto with Sport Mode",
            "D4 I/C T/C (HIGH POWER)",
        ],
        keyFeatures: [
            "Engine : 4N16 (2440cc) D4 I/C T/C",
            "Engine power : High power",
            "Regulation conformity Exhaust emission regulation : EURO4",
            "Transmission Sport mode",
            "Hill start assist system",
            "Active stability control",
            "Traction control",
            "Power steering type : H.P.S (hydraulic power steering)",
        ],
    },
    {
        name: "GLX 2WD MT",
        price: 1649000,
        image: `${IMG_BASE}/variants/glx2wdat.jpg`,
        imageAlt: "Mitsubishi Triton GLX 2WD M/T",
        specs: [
            "2.4L Diesel",
            "2WD Manual",
            "6-Speed Manual",
            "D4 I/C T/C (HIGH POWER)",
        ],
        keyFeatures: [
            "Engine : 4N16 (2440cc) D4 I/C T/C",
            "Engine power : High power",
            "Regulation conformity Exhaust emission regulation : EURO4",
            "Transmission : R6MAA (6M/T)",
            "Hill start assist system",
            "Active stability control",
            "Traction control",
            "Power steering type : H.P.S (hydraulic power steering)",
        ],
    },
    {
        name: "GL 4WD MT",
        price: 1292000,
        image: `${IMG_BASE}/variants/gl4wdmt.jpg`,
        imageAlt: "Mitsubishi Triton GL 4WD M/T",
        specs: [
            "2.4L Diesel",
            "2WD Manual",
            "6-Speed Manual",
            "D4 I/C T/C (HIGH POWER)",
        ],
        keyFeatures: [
            "Engine : 4N16 (2440cc) D4 I/C T/C",
            "Engine power : High power",
            "Regulation conformity Exhaust emission regulation : EURO4",
            "Transmission : V6MAA (6M/T)",
            "Transfer Easy select 4WD",
            "Hill start assist system",
            "Active stability control",
            "Traction control",
            "Power steering type : H.P.S (hydraulic power steering)",
        ],
    },
    {
        name: "GL 2WD MT",
        price: 1266000,
        image: `${IMG_BASE}/variants/gl4wdmt.jpg`,
        imageAlt: "Mitsubishi Triton GL 2WD M/T",
        specs: [
            "2.4L Diesel",
            "2WD Manual",
            "6-Speed Manual",
            "D4 I/C T/C (HIGH POWER)",
        ],
        keyFeatures: [
            "Engine : 4N16 (2440cc) D4 I/C T/C",
            "Engine power : High power",
            "Regulation conformity Exhaust emission regulation : EURO4",
            "Transmission : R6MAA (6M/T)",
            "Hill start assist system",
            "Active stability control",
            "Traction control",
            "Power steering type : H.P.S (hydraulic power steering)",
        ],
    },
];

export default function Triton() {
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
                        poster={`${IMG_BASE}/triton-hero-poster.jpg`}
                        onError={(e) => {
                            (
                                e.currentTarget as HTMLVideoElement
                            ).style.display = "none";
                        }}
                    >
                        <source
                            src={`${VIDEO_BASE}/triton-video.mp4`}
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                        <img
                            src={`${IMG_BASE}/triton-logo.png`}
                            alt="Mitsubishi Triton"
                            className="h-8 sm:h-15 w-auto mb-4"
                        />
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
                            Go Beyond Limits
                        </h1>
                        <p className="text-sm sm:text-base text-white/90 mb-1">
                            Bigger, Tougher, and Stronger
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-white mb-6">
                            From ₱1,266,000
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
                    heading="Experience the road with unmatched strength"
                    copy="Enhanced suspension, equipped with a new shock-absorption system, guarantees exceptional comfort even in challenging terrains. Powered by a 2.4-litre Bi-Turbo diesel engine, featuring a ‘2-stage’ turbo for a robust 204PS and 470Nm maximum torque, unleash a ride that’s not just responsive but more powerful than ever before."
                    ctaLabel="Explore the Drive"
                    ctaHref="/vehicles/triton/drive"
                    image={`${IMG_BASE}/triton1.jpg`}
                    imageAlt="Mitsubishi Triton off-road"
                    imagePosition="right"
                />

                {/* EXTERIOR */}
                <FeatureSection
                    index="02"
                    eyebrow="Triton Exterior"
                    heading="A dominating presence that commands attention"
                    copy="Unleash your presence on the road with the all-new exterior design. A more aggressive front fascia, paired with cunning headlights and a massive square-shaped grille, creates a bold statement. Embodying Mitsubishi’s iconic Dynamic Shield Design, it boasts a tougher look."
                    ctaLabel="Explore Exterior"
                    ctaHref="/vehicles/triton/exterior"
                    image={`${IMG_BASE}/triton2.jpg`}
                    imageAlt="Mitsubishi Triton exterior front view"
                    objectPosition="object-right"
                    imagePosition="left"
                />

                {/* INTERIOR */}
                <FeatureSection
                    index="03"
                    eyebrow="Triton Interior"
                    heading="Tough Meets Comfort"
                    copy="Step into a reimagined interior designed for utmost comfort and functionality. The All-New Triton ensures a luxurious, spacious cabin where every amenity is within easy reach."
                    ctaLabel="Explore Interior"
                    ctaHref="/vehicles/triton/interior"
                    image={`${IMG_BASE}/triton3.jpg`}
                    imageAlt="Mitsubishi Triton interior cabin"
                    objectPosition="object-right"
                    imagePosition="right"
                />

                {/* SAFETY */}
                <FeatureSection
                    index="04"
                    eyebrow="Triton Safety"
                    heading="All-New Safety Features"
                    copy="The All-New Triton combines toughness with a host of advanced safety features."
                    ctaLabel="Explore Safety"
                    ctaHref="/vehicles/triton/safety"
                    image={`${IMG_BASE}/triton4.jpg`}
                    imageAlt="Mitsubishi Triton safety features"
                    imagePosition="left"
                    theme="dark"
                />

                <VariantSelector
                    variants={tritonVariants}
                    brochureHref="/brochures/triton-brochure.pdf"
                />

                <Footer />
            </main>
        </>
    );
}

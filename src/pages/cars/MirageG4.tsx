import Header from "../components/Header";
import Footer from "../components/Footer";
import VariantSelector, { type Variant } from "../components/VariantSelector";

const IMG_BASE = "/cars/mirage-g4/images";
const VIDEO_BASE = "/cars/mirage-g4/videos";

const mirageVariants: Variant[] = [
    {
        name: "GLX MT",
        price: 711000,
        image: "/cars/mirage-g4/images/variants/mirage-glx-mt.png",
        imageAlt: "Mitsubishi Mirage G4 GLX MT",
        specs: [
            "1.2L Gasoline",
            "2WD",
            "5-Speed MT",
            "1.2L 3-cylinder DOHC MIVEC",
        ],
        keyFeatures: [
            "AM/FM Radio with USB Port",
            '14" Steel Wheel with Wheel Cover',
            "Manual Air Conditioning",
        ],
    },
    {
        name: "GLX CVT",
        price: 819000,
        image: "/cars/mirage-g4/images/variants/mirage-glx.png",
        imageAlt: "Mitsubishi Mirage G4 GLX CVT",
        specs: ["1.2L Gasoline", "2WD", "CVT", "1.2L 3-cylinder DOHC MIVEC"],
        keyFeatures: [
            'Smart Phone Link Display Audio (SDA) 7" Touchscreen / Tuner / Bluetooth / USB-Port Compatible with Apple CarPlay and Android Auto',
            '15" Alloy Wheel',
            "ECO Lamp",
        ],
    },
    {
        name: "GLS CVT",
        price: 899000,
        image: "/cars/mirage-g4/images/variants/mirage-glx-cvt.png",
        imageAlt: "Mitsubishi Mirage G4 GLS CVT",
        specs: ["1.2L Gasoline", "2WD", "CVT", "1.2L 3-cylinder DOHC MIVEC"],
        keyFeatures: [
            'Smart Phone Link Display Audio (SDA) 7" Touchscreen / Tuner / Bluetooth / USB-Port Compatible with Apple CarPlay and Android Auto',
            '15" Alloy Wheel',
            "ECO Lamp",
            "Keyless Operation System (Engine Push Start)",
            "Anti-Lock Braking System (ABS)",
            "Electronic Brakeforce Distribution (EBD)",
        ],
    },
];

/* ------------------------------------------------------------------ */
/* Diamond bullet — a small callback to Mitsubishi's three-diamond      */
/* mark, used as the eyebrow marker instead of a generic dot/dash.     */
/* ------------------------------------------------------------------ */
function DiamondBullet({ className = "" }: { className?: string }) {
    return (
        <svg width="9" height="9" viewBox="0 0 10 10" className={className}>
            <polygon points="5,0 10,5 5,10 0,5" fill="currentColor" />
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/* FeatureSection — one reusable split-panel "chapter" of the story.   */
/* Photo and copy live in separate panels (no gradient wash, no        */
/* overlap), so image clarity and text legibility are never in         */
/* tension with each other, on any breakpoint.                        */
/* ------------------------------------------------------------------ */
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
    overlay?: boolean;
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
    overlay = false,
}: FeatureSectionProps) {
    const isDark = theme === "dark";
    const imageOnLeft = imagePosition === "left";

    if (overlay) {
        return (
            <section className="relative w-full bg-white lg:min-h-[420px] lg:sm:min-h-[520px] lg:lg:min-h-[600px]">
                {/* Mobile/tablet: stacked layout — text first, image below */}
                <div className="lg:hidden">
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                        <img
                            src={image}
                            alt={imageAlt}
                            loading="lazy"
                            className="w-full h-full object-cover object-right"
                        />
                    </div>
                    <div className="px-6 sm:px-10 py-14">
                        <div className="max-w-md text-left">
                            <div className="flex items-center gap-2 mb-3">
                                <DiamondBullet className="text-red-600" />
                                <p className="text-[11px] font-bold tracking-[3px] uppercase text-red-600">
                                    {eyebrow}
                                </p>
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none mb-5 text-gray-900">
                                {heading}
                            </h2>

                            <p className="text-sm leading-relaxed mb-8 text-gray-800">
                                {copy}
                            </p>

                            <a
                                href={ctaHref}
                                className="inline-block border-2 border-black text-black hover:bg-black hover:text-white text-xs font-bold uppercase tracking-widest px-7 py-3 transition-colors duration-200"
                            >
                                {ctaLabel}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Desktop: full-section background with text overlaid on top */}
                <div
                    className="hidden lg:flex lg:min-h-[600px] w-full bg-cover bg-center items-center"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="relative z-10 px-16">
                        <div className="max-w-md text-left">
                            <div className="flex items-center gap-2 mb-3">
                                <DiamondBullet className="text-red-600" />
                                <p className="text-[11px] font-bold tracking-[3px] uppercase text-red-600">
                                    {eyebrow}
                                </p>
                            </div>

                            <h2 className="text-[2.25rem] font-black uppercase tracking-tight leading-none mb-5 text-gray-900">
                                {heading}
                            </h2>

                            <p className="text-sm leading-relaxed mb-8 text-gray-800">
                                {copy}
                            </p>

                            <a
                                href={ctaHref}
                                className="inline-block border-2 border-black text-black hover:bg-black hover:text-white text-xs font-bold uppercase tracking-widest px-7 py-3 transition-colors duration-200"
                            >
                                {ctaLabel}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

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

export default function MirageG4() {
    return (
        <>
            {/*
                Diagonal edge on the photo panel — one consistent lean,
                desktop only, so mobile stacks as clean rectangles instead
                of a floating triangular notch with nothing to point at.
            */}
            <style>{`
                @media (min-width: 1024px) {
                    .mg4-cut-r { clip-path: polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%); }
                    .mg4-cut-l { clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%); }
                }
            `}</style>

            <main className="w-full max-w-full bg-white">
                <Header />

                {/* Hero — video background, handled separately */}
                <section className="relative w-full h-[70vh] min-h-[480px] overflow-hidden bg-black">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        poster={`${IMG_BASE}/mirage-hero-poster.jpg`}
                        onError={(e) => {
                            (
                                e.currentTarget as HTMLVideoElement
                            ).style.display = "none";
                        }}
                    >
                        <source
                            src={`${VIDEO_BASE}/mirage-video.mp4`}
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute inset-0 bg-black/45" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                        <img
                            src={`${IMG_BASE}/mirage-title.png`}
                            alt="Mitsubishi Mirage G4"
                            className="h-8 sm:h-10 w-auto mb-4"
                        />
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
                            G4 Anything
                        </h1>
                        <p className="text-sm sm:text-base text-white/90 mb-1">
                            Sensational style. Exceptional practicality.
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-white mb-6">
                            From ₱768,000
                        </p>
                        <a
                            href="/contact-us"
                            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-colors duration-200"
                        >
                            Inquire Now
                        </a>
                    </div>
                </section>

                {/* THE EXTERIOR — G4 Style */}
                <FeatureSection
                    index="01"
                    eyebrow="The Exterior"
                    heading="G4 Style"
                    copy="The dynamic new look of the Mirage G4 makes a statement. Its clean lines, keen angles, and subtle curves are hard to miss. Even the smaller details have been refined to be just as easy on the eyes. Get ready to turn heads with every drive."
                    ctaLabel="Explore Exterior"
                    ctaHref="/vehicles/mirage-g4/exterior"
                    image={`${IMG_BASE}/mirage-1.jpg`}
                    imageAlt="Mitsubishi Mirage G4 front three-quarter view on a highway"
                    imagePosition="left"
                    overlay
                />

                {/* THE INTERIOR — G4 Space */}
                <FeatureSection
                    index="02"
                    eyebrow="The Interior"
                    heading="G4 Space"
                    copy="The inside of the new Mirage G4 impresses just as much as the outside. From its spacious legroom to its roomy trunk, this car is designed with your needs in mind so nothing gets left behind."
                    ctaLabel="Explore Interior"
                    ctaHref="/vehicles/mirage-g4/interior"
                    image={`${IMG_BASE}/mirage-2.jpg`}
                    imageAlt="Mitsubishi Mirage G4 parked beside a family playground"
                    objectPosition="object-right"
                    imagePosition="left"
                />

                {/* THE DRIVE — G4 Experience */}
                <FeatureSection
                    index="03"
                    eyebrow="The Drive"
                    heading="G4 Experience"
                    copy="Every little thing counts when going on a drive. That's why the new Mirage G4 has features to delight your senses by keeping you connected to your phone and what's happening on the road."
                    ctaLabel="Explore the Drive"
                    ctaHref="/vehicles/mirage-g4/drive"
                    image={`${IMG_BASE}/mirage-3.jpg`}
                    imageAlt="Mitsubishi Mirage G4 rear three-quarter view at a beach"
                    objectPosition="object-right"
                    imagePosition="right"
                />

                {/* THE EXPERIENCE — G4 Safety */}
                <FeatureSection
                    index="04"
                    eyebrow="The Experience"
                    heading="G4 Safety"
                    copy="What good is style if it isn't safe? State-of-the-art features ensure that you always get to your destination without worrying about the journey."
                    ctaLabel="Explore Safety"
                    ctaHref="/vehicles/mirage-g4/safety"
                    image={`${IMG_BASE}/mirage-4.jpg`}
                    imageAlt="Mitsubishi Mirage G4 dashboard and dual front airbags"
                    objectPosition="object-center"
                    imagePosition="left"
                    theme="dark"
                />

                {/* Section */}
                <VariantSelector
                    variants={mirageVariants}
                    brochureHref="/brochures/mirage-g4-brochure.pdf"
                />

                <Footer />
            </main>
        </>
    );
}

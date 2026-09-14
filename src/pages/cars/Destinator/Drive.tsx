import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IMG_BASE = "/cars/destinator/images";

interface DriveMode {
    name: string;
    image: string;
    tagline: string;
    description: string;
}

const driveModes: DriveMode[] = [
    {
        name: "Normal",
        image: `${IMG_BASE}/drive4.webp`,
        tagline: "For your daily drives.",
        description:
            "For everyday driving, balancing performance and fuel efficiency.",
    },
    {
        name: "Wet",
        image: `${IMG_BASE}/drive5.webp`,
        tagline: "For wet pavements and large puddles.",
        description:
            "Designed for improved stability and traction on slippery surfaces like wet or flooded roads.",
    },
    {
        name: "Gravel",
        image: `${IMG_BASE}/drive6.webp`,
        tagline: "For dry, unpaved roads.",
        description:
            "Superior handling on unpaved or rough roads ensuring maximum control, providing improved driving performance and stable cornering across uneven surfaces.",
    },
    {
        name: "Mud",
        image: `${IMG_BASE}/drive7.webp`,
        tagline: "For wet, muddy unpaved roads.",
        description:
            "Enhanced traction and stability on wet, unpaved surfaces like muddy roads.",
    },
    {
        name: "Tarmac",
        image: `${IMG_BASE}/drive8.webp`,
        tagline: "For a more spirited drive.",
        description:
            "Designed for dry, paved roads that provides more agile handling and responsive performance.",
    },
];

export default function DestinatorDrive() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <main className="w-full max-w-full bg-white">
                {/* Back button */}
                <div className="w-full bg-black">
                    <div className="container mx-auto px-4 lg:px-6 py-3">
                        <button
                            onClick={() => navigate(-1)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                        >
                            <ArrowLeft size={14} />
                            Back
                        </button>
                    </div>
                </div>

                {/* Section title */}
                <section className="w-full bg-black py-10 sm:py-12 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        The Drive
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        Turn every road into a destination drive.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/drive1.webp`}
                            alt="Mitsubishi Destinator driving through a mountain road"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* First image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/drive2.webp`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    BEST-IN-CLASS
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    High Ground Clearance
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    Developed for ASEAN roads, the Destinator’s
                                    214 mm* ground clearance lets you clear road
                                    obstacles and light floods effortlessly.
                                </p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    * with engine cover
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Off-Road Mode — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/drive3.webp`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    CONVENIENCE AT EVERY TURN
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Tight Turning Radius
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    With its 5.4 meters turning radius, you can
                                    have more control while taking on tight
                                    turns.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5 Drive Modes */}
                <section className="w-full bg-white pb-14 sm:pb-20">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="mb-10 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                5 Drive Modes
                            </h2>
                            <p className="text-sm text-gray-600 max-w-2xl">
                                Take on various terrain by toggling between:
                                Normal, Wet, Gravel, Mud, and the NEW Tarmac
                                mode.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
                            {driveModes.map((mode) => (
                                <div key={mode.name}>
                                    <div className="aspect-square bg-gray-100 overflow-hidden mb-4">
                                        <img
                                            src={mode.image}
                                            alt={`${mode.name} drive mode icon`}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-2">
                                        {mode.name}
                                    </h3>
                                    <p className="text-xs font-bold text-gray-700 leading-relaxed mb-1.5">
                                        {mode.tagline}
                                    </p>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        {mode.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Dark feature block — engine, suspension, parking brake */}
                <section className="bg-black py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
                            {/* Engine */}
                            <div>
                                <div className="aspect-[4/3] bg-gray-900 overflow-hidden mb-5">
                                    <img
                                        src={`${IMG_BASE}/drive9.webp`}
                                        alt="Destinator 1.5L Turbocharged engine with Mivec"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mb-2">
                                    Turbocharged Engine with Mivec
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The Destinator introduces a newly-developed
                                    1.5L Turbocharged Engine with Mivec
                                    providing dynamic driving sensation by
                                    delivering the perfect blend of performance
                                    and fuel efficiency.
                                </p>
                            </div>

                            {/* Suspension */}
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-2">
                                    Developed for Tough Terrain
                                </p>
                                <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mb-3">
                                    Well-tuned Suspension
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed mb-5">
                                    The Destinator provides a balance of
                                    stability and ride comfort for both city and
                                    rougher roads. The suspension system was
                                    specifically tuned for the ASEAN region to
                                    handle local road conditions.
                                </p>
                                <div className="aspect-[4/3] bg-gray-900 overflow-hidden flex items-center justify-center">
                                    <img
                                        src={`${IMG_BASE}/drive10.webp`}
                                        alt="Diagram of Destinator suspension system"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Electric Parking Brake */}
                            <div>
                                <div className="aspect-[4/3] bg-gray-900 overflow-hidden mb-5">
                                    <img
                                        src={`${IMG_BASE}/drive11.webp`}
                                        alt="Destinator electric parking brake with auto hold switch"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-2">
                                    Stop and Go
                                </p>
                                <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mb-3">
                                    Electric Parking Brake with Auto Hold
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    This feature automatically engages the
                                    brakes when a vehicle comes to a complete
                                    stop, keeping it stationary until the you
                                    press the accelerator pedal.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing full-bleed image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/drive12.webp`}
                            alt="Mitsubishi Destinator driving through a wet mountain trail"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

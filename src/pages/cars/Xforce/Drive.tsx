import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IMG_BASE = "/cars/xforce/images";

interface DriveMode {
    name: string;
    image: string;
    description: string;
}

const driveModes: DriveMode[] = [
    {
        name: "Normal",
        image: `${IMG_BASE}/drive2.png`,
        description:
            "For dry, paved roads. Ensures sufficient fuel efficiency and reliability for daily driving.",
    },
    {
        name: "Wet",
        image: `${IMG_BASE}/drive3.png`,
        description:
            "For wet or flooded paved roads. Secure driving on wet pavements and large puddles.",
    },
    {
        name: "Gravel",
        image: `${IMG_BASE}/drive4.png`,
        description:
            "For dry, unpaved roads. For smooth and stable driving on unpaved roads.",
    },
    {
        name: "Mud",
        image: `${IMG_BASE}/drive5.png`,
        description:
            "For wet, unpaved roads. For powerful and confident driving on muddy roads.",
    },
];

export default function XforceDrive() {
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
                        Make every adventure dynamic and thrilling by bringing a
                        new force to your daily drives.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/drive1.png`}
                            alt="Mitsubishi Xforce driving along a coastal mountain road"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* 4 Drive Modes */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="mb-10 sm:mb-12 max-w-2xl">
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                4 Drive Modes
                            </h2>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                With the driving mode adjustment button, you can
                                seamlessly toggle between Normal, Gravel, Mud,
                                and Wet modes.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                            {driveModes.map((mode) => (
                                <div key={mode.name}>
                                    <div className="aspect-square bg-gray-100 overflow-hidden mb-4">
                                        <img
                                            src={mode.image}
                                            alt={`${mode.name} drive mode display`}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-2">
                                        {mode.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        {mode.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4 Drive Modes — Wet Mode, image left */}
                <section className="bg-black border-t border-white/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/drive6.png`}
                                alt="Mitsubishi Xforce Wet Mode display"
                                loading="lazy"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-3">
                                    4 Drive Modes
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Wet Mode
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Developed specifically for Southeast Asian
                                    roads and weather, Wet Mode lets you
                                    navigate slippery roads with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 4 Drive Modes — intro, image right */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-3">
                                    4 Drive Modes
                                </p>
                                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                                    Drive with ease and confidence. Switch
                                    easily among 4 modes: Road, Gravel, Mud, and
                                    Wet mode.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/drive7.png`}
                                alt="Mitsubishi Xforce drive mode selector overview"
                                loading="lazy"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </section>

                {/* Drive Mode System detail */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6">
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-10 sm:mb-14">
                            Discover the Functionality of the Drive Mode System
                        </h2>

                        {/* Ground Clearance — image left, text right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-14 sm:mb-16">
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                                <img
                                    src={`${IMG_BASE}/drive8.png`}
                                    alt="Mitsubishi Xforce side profile showing ground clearance"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Ground Clearance
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                                    The Xforce's 193 mm* ground clearance lets
                                    you clear road obstacles effortlessly, drive
                                    with enhanced stability, and enjoy improved
                                    visibility.
                                </p>
                                <p className="text-xs text-gray-400">
                                    * with engine cover
                                </p>
                            </div>
                        </div>

                        {/* Active Yaw Control — text left, image right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Active Yaw Control
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Active Yaw Control technology assists
                                    drivers turn safely as intended even on
                                    slippery roads and provides a fun and
                                    comfortable driving experience.
                                </p>
                            </div>
                            <div className="aspect-[4/3] bg-white overflow-hidden">
                                <img
                                    src={`${IMG_BASE}/drive9.png`}
                                    alt="Mitsubishi Xforce instrument cluster showing Active Yaw Control display"
                                    loading="lazy"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        <p className="text-xs text-gray-400 mt-14 sm:mt-16">
                            Equipment may vary by market. Please consult your
                            local Mitsubishi Motors dealer/distributor for
                            details.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

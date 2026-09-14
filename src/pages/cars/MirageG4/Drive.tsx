import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IMG_BASE = "/cars/mirage-g4/images";

export default function MirageG4Drive() {
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
                <section className="w-full bg-black py-10 sm:py-12 text-center">
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                        G4 Experience
                    </h1>
                </section>

                {/* Hero split */}
                <section className="w-full bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[440px] overflow-hidden">
                            <img
                                src={`${IMG_BASE}/drive1.jpg`}
                                alt="Mitsubishi Mirage G4 Drive Poster"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-0">
                            <div className="max-w-md">
                                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
                                    THE DRIVE
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Every little thing counts when going on a
                                    drive. That’s why the new Mirage G4 has
                                    features to delight your eyes and ears by
                                    keeping you connected to your phone and
                                    what’s happening on the road.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Second Section */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/drive2.jpg`}
                                alt="Mirage G4 Drive Engine"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                                    Reliable Engine
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The fuel-efficient 1.2-liter 3-cylinder
                                    MIVEC* engine delivers a maximum output of
                                    78 PS at 6,000 rpm and practical maximum
                                    torque of 100 N·m at 4,000 rpm which
                                    delivers impressive fuel efficiency and
                                    optimal performance, making every drive
                                    enjoyable whether around the city or out of
                                    town.
                                </p>
                                <p className="text-xs text-white/40 mt-3">
                                    * Mitsubishi Innovative Valve timing
                                    Electronic Control system
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Three another drive features */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/drive3.jpg`}
                                    alt="Eco Indicator"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                ECO mode indicator
                            </h3>
                            <p>
                                This indicator illuminates whenever you operate
                                the accelerator pedal in an ecofriendly way. It
                                encourages you to develop good driving habits
                                that lower fuel costs and contribute to a
                                cleaner environment for everyone.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/drive4.jpg`}
                                    alt="Aero"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Aerodynamic design
                            </h3>
                            <p>
                                The body is streamlined to slip smoothly through
                                the air. Reduced drag lowers wind noise and CO2
                                emissions while raising fuel efficiency and
                                high-speed stability.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/drive5.jpg`}
                                    alt="Easy To Manuever"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Easy to maneuver
                            </h3>
                            <p>
                                The tight turning radius of just 4.8 meters
                                contributes to excellent handling and makes
                                driving easy for anyone, at any age.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3rd Section */}
                <section className="w-full bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[440px] overflow-hidden">
                            <img
                                src={`${IMG_BASE}/drive6.jpg`}
                                alt="Transmission Controls"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-0">
                            <div className="max-w-md">
                                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
                                    INVECS-III CVT Transmission
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The INVECS-III* CVT optimizes maximum engine
                                    power and RPM for excellent fuel economy.
                                    This way, you enjoy smooth and fuel
                                    efficient driving on various road conditions
                                    without sacrificing performance.
                                </p>
                                <p className="text-xs text-white/40 mt-3">
                                    * Intelligent & Innovative Vehicle
                                    Electronic Control System III
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rear view / Rear reflectors */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/drive7.jpg`}
                                    alt="Keyless"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Keyless Entry
                            </h3>
                            <p className="Keyless 2">
                                When carrying the key or inside your pocket, you
                                can press a button on the outside of the
                                driver’s side door to lock or unlock all the
                                doors.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/drive8.jpg`}
                                    alt="Mirage G4 rear bumper reflector"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Remote Trunk Opener (GLS)
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Opening the trunk is as easy as pressing the
                                button on the key. You can also press a button
                                on the trunk while the key is in your pocket for
                                a hassle-free access.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

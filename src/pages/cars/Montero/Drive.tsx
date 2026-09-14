import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IMG_BASE = "/cars/montero/images";

export default function MonteroDrive() {
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
                        The new Montero Sport is tougher than ever before. It
                        has a powerful fuel-efficient 2.4 liter turbo diesel
                        engine and an advanced 4WD system that will take you
                        from city streets to the far beyond. Drive the new
                        Montero Sport and the world is yours.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/drive1.jpg`}
                            alt="Mitsubishi Montero Sport driving along a coastal road at sunset"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Super Select 4WD-II — dark, image right */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    Super Select 4WD-II
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Explore the far beyond
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The Montero Sport has a full-time 4WD system
                                    that's already well-proven. It's called
                                    Super Select 4WD-II and creates maximum
                                    stability and traction. Use the Drive Mode
                                    Selector dial to change easily between the
                                    2WD setting and 4WD settings whilst on the
                                    move. When the going gets particularly
                                    tough, lock the center differential using
                                    the 4HLc and 4LLc settings.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/drive2.jpg`}
                                alt="Mitsubishi Montero Sport parked on a coastal cliffside"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Off-Road Mode — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/drive3.jpg`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    Off-Road Mode
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    The 4WD system with extra control
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    Improve traction control when driving
                                    off-road by choosing the GRAVEL, MUD/SNOW,
                                    SAND or ROCK* setting, using the Off Road
                                    Mode selector. The engine output,
                                    transmission settings and braking adjust
                                    accordingly to optimise performance, giving
                                    you safer driving on any terrain.
                                </p>
                                <p className="text-xs text-gray-500 mb-1">
                                    * The ROCK setting is only available in the
                                    4LLc setting.
                                </p>
                                <p className="text-xs text-gray-500">
                                    * OFF ROAD MODE is only available in the
                                    4HLc and 4LLc setting.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advanced Suspension / 8-Speed Transmission pair */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/drive4.jpg`}
                                    alt="Mitsubishi Montero Sport driving on a rocky mountain trail"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                Advanced Suspension
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Smoothes out the bumps in any road
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                The Montero Sport has independent double
                                wishbone coil springs with stabilizer bar at the
                                front. And absorbing all the bumps at the rear
                                of the vehicle are 3-link torque arm coil
                                springs with stabilizer bar.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/drive5.jpg`}
                                    alt="Mitsubishi Montero Sport 8-speed automatic gear shifter"
                                    loading="lazy"
                                    className="max-w-[75%] max-h-[75%] object-contain"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                8-Speed Automatic Transmission
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                A more relaxed, luxurious ride
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                The new Montero Sport has an 8-speed automatic
                                transmission — the first ever in the history of
                                Mitsubishi Motors. This creates a smoother ride,
                                with improved fuel efficiency.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Engine — dark, image left, text right, quick-links inline */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[420px] overflow-hidden lg:order-1 flex items-center justify-center bg-black">
                            <img
                                src={`${IMG_BASE}/drive6.jpg`}
                                alt="Mitsubishi Montero Sport 2.4L MIVEC clean diesel engine"
                                loading="lazy"
                                className="max-w-[85%] max-h-[85%] object-contain"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
                                    Highly advanced engineering
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The new Montero Sport has a direct injection
                                    diesel engine. It's extremely lightweight,
                                    allowing it to return exceptional fuel
                                    efficiency. But being lightweight doesn't
                                    mean it's a slouch when it comes to power.
                                    There's enough punchy acceleration for
                                    travelling up mountain roads or towing heavy
                                    loads. The engine also has very low
                                    emissions thanks to it's 2.4L MIVEC Clean
                                    Diesel engine.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Multi Around Monitor / Electric Parking Brake pair */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/drive7.jpg`}
                                    alt="Mitsubishi Montero Sport Multi Around Monitor parking display"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                Multi Around Monitor
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Parking made easy
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Multiple cameras mounted on the front, rear and
                                sides of the Montero Sport allow you keep an eye
                                on your blind spots. Using the collected data,
                                the Multi Around Monitor will also create a
                                bird's-eye visual of the vehicle, helping you
                                orientate yourself and park more safely.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/drive8.jpg`}
                                    alt="Mitsubishi Montero Sport electric parking brake switch"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                Electric Parking Brake (EPB)
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                A parking brake at the flick of a switch
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                The electric parking brake is situated right by
                                the 4WD Drive Mode Selector dial. It's easy to
                                operate: simply pull the switch up to apply the
                                parking brake, or push the switch down to
                                release. If the Brake Auto Hold (BAH) function
                                is active, the vehicle will remain stationary
                                even if you release the brake pedal. Pressing
                                the accelerator will release the brake.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

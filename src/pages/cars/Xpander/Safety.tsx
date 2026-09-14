import { ArrowLeft } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const IMG_BASE = "/cars/xpander/images";

export default function XpanderSafety() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <main className="w-full max-w-full bg-white">
                {/* Back button */}
                <div className="w-full bg-black">
                    <div className="container mx-auto px-4 lg:px-6 py-3">
                        <button
                            onClick={() => {
                                navigate(-1);
                            }}
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-red-600 transition-colors duration-200"
                        >
                            <ArrowLeft size={14} />
                            Back to Xpander
                        </button>
                    </div>
                </div>

                {/* Section title */}
                <section className="w-full bg-black py-10 sm:py-12 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        XPANDER SAFETY
                    </h1>
                    <p className="text-sm text-white/60 max-w-lg mx-auto">
                        The Xpander and Xpander Cross have two types of on-board
                        safety systems: solid safety, such as a reinforced body
                        shell and intelligent safety such as Active Stability
                        Control. Together they ensure you can drive with the
                        utmost confidence.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/safety1.jpg`}
                            alt="Mitsubishi Xpander parked in a residential driveway"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* RISE Body — text left, image right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    RISE (REINFORCED IMPACT SAFETY EVOLUTION)
                                    BODY
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Hard on the outside, soft on the inside
                                </h2>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    The Xpander and Xpander Cross have
                                    Reinforced Impact Safety Evolution (RISE)
                                    bodies. This absorbs the energy of
                                    collisions from any direction. Any force is
                                    safely dispersed through the RISE body to
                                    reduce damage.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety2.jpg`}
                                alt="Mitsubishi Xpander RISE reinforced body"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Hill Start Assist — dark, image right */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    HILL START ASSIST (HSA) [XPANDER CROSS]
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Making hill starts easy
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Hill Start Assist makes starting on a steep
                                    slope really easy. It holds the brake on for
                                    up to two seconds until you press the
                                    accelerator. So you need never worry about
                                    rolling back again.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety3.jpg`}
                                alt="Mitsubishi Xpander hill start assist illustration"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Active Stability Control — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[420px] overflow-hidden lg:order-1 flex items-center justify-center bg-gray-50">
                            <img
                                src={`${IMG_BASE}/safety4.jpg`}
                                alt="Illustration of Active Stability Control keeping a car steady on a winding road"
                                loading="lazy"
                                className="max-w-[100%] max-h-[100%] object-contain"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    ACTIVE STABILITY CONTROL (ASC) [XPANDER
                                    CROSS]
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    More stable on slippery surfaces
                                </h2>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    If wheels lose their grip on slippery
                                    surfaces or while turning, ASC automatically
                                    adjusts engine output and applies braking
                                    force at the appropriate wheels to help
                                    maintain control and prevent skidding.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Emergency Stop Signal illustration */}
                <section className="w-full bg-white py-7 sm:py-10">
                    <div className="container mx-auto px-4 lg:px-6 max-w-2xl">
                        <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                            <img
                                src={`${IMG_BASE}/safety5.jpg`}
                                alt="Diagram of a car braking hard to avoid a collision"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* ESS / ABS — image left column, text right column */}
                <section className="w-full bg-white pb-14 sm:pb-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                        <div className="aspect-[4/3] bg-gray-100 overflow-hidden flex items-center justify-center">
                            <img
                                src={`${IMG_BASE}/safety6.jpg`}
                                alt="Illustration of Emergency Stop Signal System hazard lights"
                                loading="lazy"
                                className="max-w-[80%] max-h-[80%] object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center gap-10">
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    Emergency Stop Signal System (ESS)
                                </p>
                                <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Keep motorists behind you safe
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    The Emergency Stop Signal System means If
                                    you brake hard, the hazard lights
                                    automatically flash to warn vehicles behind
                                    you. This is something most of our
                                    competitors have yet to offer and can help
                                    to reduce the possibility of rear-end
                                    collisions.
                                </p>
                            </div>

                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    Anti-Lock Braking System (ABS)
                                </p>
                                <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Greater control when braking
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    The anti-lock brake system helps prevent the
                                    wheels from locking up during emergency
                                    braking so you can maintain greater steering
                                    control, even on slippery roads.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

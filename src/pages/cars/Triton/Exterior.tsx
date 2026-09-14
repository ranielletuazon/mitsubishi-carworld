import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

const IMG_BASE = "/cars/triton/images";

export default function TritonExterior() {
    const navigate = useNavigate();
    const [iframeLoaded, setIframeLoaded] = useState(false);

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
                        All-New Triton Exterior
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        The all-new exterior design features a more aggressive
                        front fascia with cunning headlights combined with a
                        massive square-shaped grille. It also sports
                        Mitsubishi’s iconic Dynamic Shield Design to complete
                        the overall look.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/exterior1.png`}
                            alt="Mitsubishi Montero Sport Safety Poster"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* 360-view — iframe embed */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-red-600 mb-2">
                                360° Experience
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                                Explore the Triton Athlete in 360° View
                            </h2>
                        </div>

                        <div className="relative border border-gray-200 min-h-[420px] sm:min-h-[520px] lg:min-h-[640px]">
                            {!iframeLoaded && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white z-10">
                                    <div className="w-8 h-8 border-2 border-gray-200 border-t-red-600 rounded-full animate-spin" />
                                    <p className="text-xs text-gray-400 uppercase tracking-widest">
                                        Loading 360° view...
                                    </p>
                                </div>
                            )}
                            <iframe
                                src="https://tours.exsight360.com/mitsubishi/triton-2024/exterior/orange/v2/index.html"
                                onLoad={() => setIframeLoaded(true)}
                                className="w-full h-[420px] sm:h-[520px] lg:h-[640px] block border-0"
                                title="Mitsubishi Triton Athlete 360-degree exterior view"
                                allow="accelerometer; gyroscope"
                            />
                        </div>
                    </div>
                </section>

                {/* Off-Road Mode — image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/exterior2.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    TOUGHER LOOK
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    AGRESSIVE FRONT FASCIA
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    The All-New Triton possesses a tougher
                                    design, longer overall length, and a wider
                                    stance, which exudes a dominating presence
                                    on the road.
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
                                src={`${IMG_BASE}/exterior3.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    SIGNAL YOUR INTENTION TO TURN
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    SIGNATURE TAIL LAMPS
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    The All-New Triton’s signature T-shaped rear
                                    combination lights signals to other drivers
                                    that you are about to make a turn.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Off-Road Mode — image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/exterior4.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    BRING EVERYTHING YOU NEED
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    SPACIOUS CARGO
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    The larger bed lets you carry everything
                                    necessary for your hobby or business,
                                    providing easy loading, unloading, and
                                    maneuverability.
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

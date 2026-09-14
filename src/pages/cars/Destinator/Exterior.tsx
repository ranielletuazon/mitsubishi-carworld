import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

const IMG_BASE = "/cars/destinator/images";

export default function DestinatorExterior() {
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
                        All-New DESTINATOR Exterior
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        Following the Gravitas and Dynamism design concept, the
                        Destinator offers robust look with its SUV proportions
                        and wide stance. A sophisticated headturner on the road.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/exterior1.webp`}
                            alt="Mitsubishi Destinator driving through a mountain road"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* 360-view — iframe embed */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-12">
                        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-red-600 mb-2">
                                360° Experience
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                                Explore the Destinator in 360-View
                            </h2>
                        </div>

                        <div className="relative border border-gray-200 min-h-[420px] sm:min-h-[520px] lg:min-h-[640px]">
                            {!iframeLoaded && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white z-10">
                                    <div className="w-8 h-8 border-2 border-gray-200 border-t-red-600 rounded-full animate-spin" />
                                    <p className="text-xs text-gray-400 uppercase tracking-widest">
                                        Loading interior view...
                                    </p>
                                </div>
                            )}
                            <iframe
                                src="https://exsight360.com/virtual-tours/mitsubishi/destinator-2025/exterior/"
                                onLoad={() => setIframeLoaded(true)}
                                className="w-full h-[420px] sm:h-[520px] lg:h-[640px] block border-0"
                                title="Mitsubishi Destinator 360-degree interior view"
                                allow="accelerometer; gyroscope"
                            />
                        </div>

                        <p className="text-xs text-gray-600 text-center mt-4">
                            Please note: Image shown may not be an accurate
                            representation of the specific model.
                        </p>
                    </div>
                </section>

                {/* First image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/exterior2.webp`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                {/* <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    BEST-IN-CLASS
                                </p> */}
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Dynamic Shield Design
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    Featuring Mitsubishi Motors’ signature
                                    design, the Destinator features a commanding
                                    look that combines a bold grille with sleek
                                    lines to express both performance and
                                    protection. This design includes a prominent
                                    acrylic front grille with an inner honeycomb
                                    pattern and is integrated with the bumpers.
                                </p>
                                {/* <p className="text-sm text-gray-500 leading-relaxed">
                                    * with engine cover
                                </p> */}
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
                                    src={`${IMG_BASE}/exterior3.webp`}
                                    alt="Mitsubishi Montero Sport driving on a rocky mountain trail"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                LED Head lamps
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                T-Shape LED Head lamps
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-2">
                                The LED Daytime Running Lights (DRL) feature a
                                distinctive T-shaped design with slitted
                                accents, creating an iconic T-shaped
                                illumination. It also comes with LED fog lamps.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed italic">
                                LED DRL and LED fog lights available in GT and
                                GLS variants
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/exterior4.webp`}
                                    alt="Mitsubishi Montero Sport 8-speed automatic gear shifter"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                LED TAILLIGHTS
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                T-Shape LED Tail lights
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Complementing the Destinator’s overall look, are
                                the eye-catching LED taillights that also mirror
                                a T-shaped design.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Advanced Suspension / 8-Speed Transmission pair */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/exterior5.webp`}
                                    alt="Mitsubishi Montero Sport driving on a rocky mountain trail"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                SMART CONVENIENCE
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Power Tailgate with Hands Free Function
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed italic">
                                Available for GT variant
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/exterior6.webp`}
                                    alt="Mitsubishi Montero Sport 8-speed automatic gear shifter"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                READY FOR OUTDOORS
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Roof Rail with Pillar Design
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed italic">
                                Available for GT variant
                            </p>
                        </div>
                    </div>
                </section>
                {/* Advanced Suspension / 8-Speed Transmission pair */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/exterior7.webp`}
                                    alt="Mitsubishi Montero Sport driving on a rocky mountain trail"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                TIMLESS DESIGN
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Hexaguard Horizon
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-2">
                                To highlight the Destinator’s rugged SUV
                                capability, the rear design showcases the
                                Hexaguard Horizon concept, a hexagonal motif
                                inspired by the spare tires on the back of the
                                legendary Pajeros.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed italic">
                                Please note: Image shown may not be an accurate
                                representation of the specific model.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/exterior8.webp`}
                                    alt="Mitsubishi Montero Sport 8-speed automatic gear shifter"
                                    loading="lazy"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                RUGGED YET STYLISH
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                18-Inch Alloy Wheels
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                18-inch alloy wheels improve stability and
                                handling, especially on rough roads.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/exterior9.webp`}
                            alt="Mitsubishi Destinator driving through a mountain road"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

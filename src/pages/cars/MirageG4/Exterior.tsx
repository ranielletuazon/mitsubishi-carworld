import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IMG_BASE = "/cars/mirage-g4/images";

export default function MirageG4Exterior() {
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
                        G4 Style
                    </h1>
                </section>

                {/* Hero split */}
                <section className="w-full bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[440px] overflow-hidden">
                            <img
                                src={`${IMG_BASE}/exterior1.jpg`}
                                alt="Mitsubishi Mirage G4 front fascia at night"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-0">
                            <div className="max-w-md">
                                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
                                    Sporty Face
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Put your best face forward with the bold
                                    headlamp and fog light combo, as well as the
                                    striking advanced dynamic shield front
                                    fascia design.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form and Function / Alloy Wheels */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/exterior2.jpg`}
                                    alt="Mirage G4 power side mirror with LED turn signal"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Form and Function
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The Mirage G4 is equipped power side mirrors
                                with LED-Type turn signals for added safety and
                                visibility on the road.
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                                *GLS variant only.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/exterior3.jpg`}
                                    alt="Mirage G4 15-inch alloy wheel"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                New 15-inch Alloy Wheels
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Roll up in style whether driving through streets
                                or in standstill traffic.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Headlamp and Foglamp feature */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/exterior4.jpg`}
                                alt="Mirage G4 headlamp and foglamp close-up"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                                    New Headlamp and Foglamp Design
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    See more of the road ahead with the Mirage
                                    G4's multi-reflector halogen headlamps and
                                    foglamps which sports a new design that adds
                                    to the stylish front fascia.
                                </p>
                                <p className="text-xs text-white/40 mt-3">
                                    *In GLS variant
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
                                    src={`${IMG_BASE}/exterior5.jpg`}
                                    alt="Mirage G4 rear view"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Stylish Behind
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The Mirage G4's new rear bumper design gives it
                                a sporty and lasting impression.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/exterior6.jpg`}
                                    alt="Mirage G4 rear bumper reflector"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Rear Bumper Reflectors
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The new rear bumper reflectors not only complete
                                the overall look, but also adds visibility from
                                behind.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Exterior Colors */}
                <section className="w-full py-6 sm:py-8">
                    <div className="max-w-md sm:max-w-lg mx-auto px-4">
                        <img
                            src={`${IMG_BASE}/exterior7.jpg`}
                            alt="Mirage G4 exterior colors: Red Metallic, Titanium Gray Metallic, Cool Silver Metallic, White Solid"
                            loading="lazy"
                            className="w-full h-auto"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

import { ArrowLeft } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const IMG_BASE = "/cars/xpander/images";

export default function XpanderDrive() {
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
                        The Drive
                    </h1>
                    <p className="text-sm text-white/60 max-w-lg mx-auto">
                        Discover new experiences and reimagine your ride with
                        the new Xpander.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/drive1.png`}
                            alt="Driver behind the wheel of the Mitsubishi Xpander"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Engine — text left, image right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    1.5L MIVEC DOHC 16 Valve Engine
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Powerful and Reliable
                                </h2>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    The Xpander is powered by a 1.5L MIVEC
                                    engine (Mitsubishi Innovative Valve timing
                                    Electronic Control system). It gives a more
                                    powerful performance, yet fuel consumption
                                    is much lower.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/drive2.png`}
                                alt="Mitsubishi Xpander 1.5L MIVEC engine"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Transmission — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden">
                            <img
                                src={`${IMG_BASE}/drive3.png`}
                                alt="Xpander automatic transmission gear shifter"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    4AT Transmission
                                </p>
                                <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight leading-tight mb-4">
                                    4-Speed Automatic Transmission
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    The 1.5L MIVEC engine is coupled with a
                                    reliable 4-Speed Automatic Transmission
                                    which feeds power to the wheels while
                                    maximizing fuel economy.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Parking brake / Cruise control pair */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/drive4.png`}
                                    alt="Xpander electronic parking brake with brake auto hold button"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                Electronic Parking Brake with Brake Auto Hold
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Less Driver Fatigue
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The Xpander now has an Electronic Parking Brake
                                with Brake Auto Hold function, which keeps
                                pressure on the brakes automatically in traffic.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/drive5.png`}
                                    alt="Xpander steering wheel cruise control buttons"
                                    loading="lazy"
                                    className="max-w-[70%] max-h-[70%] object-contain"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                Cruise Control
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Designed to Make Life Easier
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The Xpander is the only vehicle in its class
                                with Cruise Control. It makes maintaining your
                                speed easier — even if you release your foot
                                from the accelerator. It also helps to reduce
                                driver fatigue on long journeys.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tilt/telescopic / Visibility pair */}
                <section className="w-full bg-white pb-14 sm:pb-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/drive6.png`}
                                    alt="Xpander tilt and telescopic steering wheel adjustment"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                Tilt and Telescopic Adjustment
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Comfortable Driving Position
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The Xpander's tilt and telescopic steering wheel
                                adjustment gives the driver a comfortable
                                driving position to lessen fatigue.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/drive7.png`}
                                    alt="Xpander steering wheel cruise control buttons"
                                    loading="lazy"
                                    className="max-w-[70%] max-h-[70%] object-contain"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                Better Visibility
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                More Driving Confidence
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                For all-round driver visibility, the Xpander is
                                the best in class. Combine this with high ground
                                clearance, and not only can you see any trouble
                                spots ahead — like flooded roads — you can
                                travel through them, leaving most vehicles
                                behind.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stable ride — dark closing feature */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-200 mb-3">
                                    STABLE RIDE
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    A strong, sturdy posture
                                </h2>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Drive confidently in every road condition.
                                    The suspension of the Xpander has been
                                    redesigned to be firmer and more comfortable
                                    than ever. Traction is also improved.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/drive8.png`}
                                alt="Mitsubishi Xpander 1.5L MIVEC engine"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

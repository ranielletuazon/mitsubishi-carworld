import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IMG_BASE = "/cars/mirage-g4/images";

export default function MirageG4Safety() {
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

                {/* Hero split */}
                <section className="w-full bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[440px] overflow-hidden">
                            <img
                                src={`${IMG_BASE}/mirage-4.jpg`}
                                alt="Mitsubishi Mirage G4 Drive Poster"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-0">
                            <div className="max-w-md">
                                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
                                    Driver and Passenger Airbags
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    In the event of a collision, the Mirage G4’s
                                    front SRS airbags activate to help protect
                                    you and the front passenger by absorbing the
                                    force of impact.
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
                                src={`${IMG_BASE}/safety1.jpg`}
                                alt="Mirage G4 Drive Engine"
                                loading="lazy"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                                    Anti-Lock Braking System (GLS)
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The Anti-Lock Braking System or ABS ensures
                                    that the car remains responsive to your
                                    control whenever you are braking. Together
                                    with the Electronic Brakeforce Distribution
                                    or EBD, these systems work together to
                                    prevent tires from locking up and avoid
                                    collision during sudden braking on wet roads
                                    and other conditions.
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
                                    src={`${IMG_BASE}/safety2.jpg`}
                                    alt="Eco Indicator"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                RISE Body
                            </h3>
                            <p>
                                Collision safety performance is significantly
                                enhanced by Mitsubishi Motors’ RISE (Reinforced
                                Impact Safety Evolution) body, which efficiently
                                absorbs impact and maintains high cabin
                                integrity in the event of a collision.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/safety3.jpg`}
                                    alt="Aero"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Electronic Brakeforce Distribution (GLS)
                            </h3>
                            <p>
                                Together with the Anti-Lock Braking System
                                (ABS), the Electronic Brakeforce Distribution or
                                EBD distributes the force generated to all four
                                wheels to shorten braking distance.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/safety4.jpg`}
                                    alt="Easy To Manuever"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Pretensioners
                            </h3>
                            <p>
                                Pretensioners automatically tighten the front
                                seatbelts in the event of a collision to help
                                restrain the driver and front passenger.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

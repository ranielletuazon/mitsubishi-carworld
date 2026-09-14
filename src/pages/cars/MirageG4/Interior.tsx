import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IMG_BASE = "/cars/mirage-g4/images";

export default function MirageG4Interior() {
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
                                src={`${IMG_BASE}/interior1.jpg`}
                                alt="Mitsubishi Mirage G4 front fascia at night"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-12 lg:py-0">
                            <div className="max-w-md">
                                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-4">
                                    Details designed around you
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The inside of the New Mirage G4 impresses
                                    just as much as the outside. Deep
                                    understanding of your needs meets refined
                                    design for a comfortable ride where nothing
                                    gets left behind.
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
                                    src={`${IMG_BASE}/interior2.jpg`}
                                    alt="Mirage G4 power side mirror with LED turn signal"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Convenience at your fingertips
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The New Mirage G4 comes equipped with steering
                                wheel audio controls and voice command with
                                hands-free function.
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                                *works with Android Auto and Apple CarPlay
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior3.jpg`}
                                    alt="Mirage G4 15-inch alloy wheel"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Engine Push Start
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The Mirage G4’s Engine Push Start system allows
                                for easier start-up and shut-down of the engine.
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                                *GLS variant only
                            </p>
                        </div>
                    </div>
                </section>

                {/* Headlamp and Foglamp feature */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/interior4.jpg`}
                                alt="Mirage G4 headlamp and foglamp close-up"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                                    Smartphone Link Display Audio
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Go where you want, when you want. Discover
                                    new places and entertainment with the new 7″
                                    Smartphone Link Display Audio 3 (SDA 3). Now
                                    with Apple Carplay and Android Auto, you can
                                    intuitively play your favorite music, answer
                                    calls, and read messages hands-free through
                                    voice commands for a safer and more
                                    convenient drive.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Three interior features */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior5.jpg`}
                                    alt="Replace with description"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Works with Apple CarPlay and Android Auto
                            </h3>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior6.jpg`}
                                    alt="Replace with description"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Navigation Apps
                            </h3>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior7.jpg`}
                                    alt="Replace with description"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                FM/AM/Bluetooth Audio Capable
                            </h3>
                        </div>
                    </div>
                </section>

                {/* Headlamp and Foglamp feature */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/interior8.jpg`}
                                alt="Mirage G4 headlamp and foglamp close-up"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                                    New Meter Design
                                </h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The white-lit high contrast meter design
                                    lets you read the vital information of your
                                    vehicle at a glance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Three another interior features */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior9.png`}
                                    alt="Replace with description"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                USB Port
                            </h3>
                            <p>
                                The port is conveniently located near the
                                instrument panel, allowing easy access from both
                                front seats.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior10.png`}
                                    alt="Replace with description"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Rear Seat Cupholders
                            </h3>
                            <p>
                                There are cupholders all around the cabin of the
                                Mirage G4. From the front, the side door panels,
                                center console, and even the rear seats.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior11.png`}
                                    alt="Replace with description"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Reverse Camera (GLS)
                            </h3>
                            <p>
                                A live color image with parking guidelines help
                                prevent backing into objects or other hazards
                                out of sight.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

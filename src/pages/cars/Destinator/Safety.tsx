import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IMG_BASE = "/cars/destinator/images";

function AvailabilityBadge({ text }: { text: string }) {
    return <p className="text-[14px] text-gray-700 italic mt-1.5">{text}</p>;
}

export default function DestinatorSafety() {
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
                            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-700 hover:text-red-600 transition-colors duration-200 cursor-pointer"
                        >
                            <ArrowLeft size={14} />
                            Back
                        </button>
                    </div>
                </div>

                {/* Section title */}
                <section className="w-full bg-black py-10 sm:py-12 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        Mitsubishi Motors Safety Sensing
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        Drive with more peace of mind with advanced safety
                        features that make your wellbeing a priority.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black mb-14">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/safety.webp`}
                            alt="Family enjoying the panoramic sunroof inside the Mitsubishi Destinator"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* 8-inch LCD meter / Wireless charger pair */}
                <section className="w-full bg-white pb-14 sm:pb-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/safety1.webp`}
                                    alt="Destinator 8-inch LCD instrument meter cluster"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-1.5">
                                Adaptive Cruise Control
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                The Mirage G4 is equipped power side mirrors
                                with LED-Type turn signals for added safety and
                                visibility on the road.
                            </p>
                            <AvailabilityBadge text="Available for GT variants" />
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-[#1f201d] overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/safety2.webp`}
                                    alt="Destinator wireless smartphone charging pad"
                                    loading="lazy"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-1.5">
                                Forward Collision Mitigation
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                The Mirage G4 is equipped power side mirrors
                                with LED-Type turn signals for added safety and
                                visibility on the road.
                            </p>
                            <AvailabilityBadge text="Available for GT variants" />
                        </div>
                    </div>
                </section>
                {/* 8-inch LCD meter / Wireless charger pair */}
                <section className="w-full bg-white pb-14 sm:pb-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/safety3.webp`}
                                    alt="Destinator 8-inch LCD instrument meter cluster"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-1.5">
                                Rear Cross Traffic Alert
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Rear-Cross Traffic Alert informs the driver of
                                approaching vehicles from either side when
                                reversing out of a parking space, enabling safe
                                backing out of any parking spot.
                            </p>
                            <AvailabilityBadge text="Available for GT and GLS variants" />
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-black overflow-hidden mb-5 flex items-center justify-center ">
                                <img
                                    src={`${IMG_BASE}/safety4.webp`}
                                    alt="Destinator wireless smartphone charging pad"
                                    loading="lazy"
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-1.5">
                                Blind Spot Warning (BSW)
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Sensors on the bumpers detect vehicles in your
                                blind spots. If a vehicle is nearby, a warning
                                icon will blink on the door mirror.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Premium Cabin — image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/safety5.webp`}
                                alt="Mitsubishi Destinator premium cabin interior"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Auto High Beam (AHB)
                                </h2>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Auto High Beam system detects the headlights
                                    of oncoming vehicles and the taillights of
                                    those ahead, automatically adjusting between
                                    high and low beams.
                                </p>
                                <AvailabilityBadge text="Available for GT variants" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* 12.3-inch display — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety6.webp`}
                                alt="Mitsubishi Destinator 12.3-inch monolithic display"
                                loading="lazy"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    6 Airbags
                                </h2>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Airbags provide safety for both driver and
                                    passengers throughout the journey.
                                </p>
                                <AvailabilityBadge text="Curtain Airbags available for GT variants only" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Premium Cabin — image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/safety7.webp`}
                                alt="Mitsubishi Destinator premium cabin interior"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Multi Around Monitor (MAM)
                                </h2>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Provides a clear view of the vehicle’s
                                    surroundings for easier maneuvering and
                                    parking.
                                </p>
                                <AvailabilityBadge text="Available in GT and GLS variant" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* 12.3-inch display — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety8.webp`}
                                alt="Mitsubishi Destinator 12.3-inch monolithic display"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Active Yaw Control (AYC)
                                </h2>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    A proprietary technology of Mitsubishi
                                    Motors, the Active Yaw Control technology
                                    assists drivers turn safely as intended even
                                    on slippery roads providing a comfortable
                                    driving experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Premium Cabin — image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/safety9.webp`}
                                alt="Mitsubishi Destinator premium cabin interior"
                                loading="lazy"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Leading Car Departure Notification (LCDN)
                                </h2>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Alerts the driver if the vehicle in front of
                                    them has started moving.
                                </p>
                                <AvailabilityBadge text="Available in GT variant" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8-inch LCD meter / Wireless charger pair */}
                <section className="w-full bg-white pb-14 sm:pb-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/safety10.webp`}
                                    alt="Destinator 8-inch LCD instrument meter cluster"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-1.5">
                                Rain-Sensing Function
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                This feature detects moisture on the windshield
                                and automatically activates the wipers,
                                adjusting their speed based on the amount of
                                rainfall, reducing driver distraction and
                                enhancing safety.
                            </p>
                            <AvailabilityBadge text="Available for GT variants" />
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-[#1f201d] overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/safety11.webp`}
                                    alt="Destinator wireless smartphone charging pad"
                                    loading="lazy"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-1.5">
                                Electric Parking Brake with Auto Hold
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                The intelligent automatic control handbrake is
                                designed to prevent drivers from inadvertently
                                forgetting to engage or release the handbrake.
                            </p>
                        </div>
                    </div>
                    {/* Disclaimer / legal notes */}
                    <div className="mt-8 lg:mt-10 lg:px-8 px-4 sm:mt-16 border-t border-gray-200 pt-8 max-w-3xl mx-auto">
                        <p className="text-xs text-gray-700 leading-relaxed mb-4">
                            Equipment may vary by market. Please consult your
                            local Mitsubishi Motors dealer/distributor for
                            details.
                        </p>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-2">
                            Important
                        </p>
                        <p className="text-xs text-gray-700 leading-relaxed mb-3">
                            HSA: Hill Start Assist [HSA] is not a substitute for
                            safe driving. Never rely solely on this function
                            while driving on steep roads. Your vehicle may move
                            backwards if the brake pedal is not sufficiently
                            depressed, or if the road is very steep or slippery.
                            This function is not designed to keep the vehicle
                            stopped in place on uphill slopes for more than 2
                            seconds. Do not rely on this function to maintain a
                            stopped position as an alternative to depressing the
                            brake pedal. Please see the owner’s manual for
                            additional information.
                        </p>
                        <p className="text-xs text-gray-700 leading-relaxed mb-3">
                            ASC: Active Stability Control. The control
                            capabilities of ASC are supplemental only. Please
                            drive safely and never rely solely on these
                            functions while driving. Be sure to use the same
                            specified type and size of tyres on all 4 wheels. Do
                            not install any aftermarket limited slip
                            differential on your vehicle. Please see the owner’s
                            manual for additional information.
                        </p>
                        <p className="text-xs text-gray-700 leading-relaxed">
                            ABS: Anti-lock Brake System [ABS] can help the
                            driver maintain control while braking, but is never
                            a substitute for safe driving. ABS does not always
                            reduce stopping distances, which may be influenced
                            by many factors including road surface conditions
                            and friction between the tires and road surface.
                        </p>
                        <p className="text-xs text-gray-700 leading-relaxed">
                            ESS: The capabilities of the Emergency Stop Signal
                            System are supplemental only and do not prevent
                            collisions in every situation. Please drive safety
                            and do not rely solely on this system while driving.
                            The system activates at a vehicle speed of approx.
                            55km/h or higher, and when the system judges
                            emergency braking from sudden deceleration and
                            operating condition of the anti-lock brake (ABS)
                            system. If you have any questions, please consult
                            your local Mitsubishi Motors dealer/distributor for
                            details.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

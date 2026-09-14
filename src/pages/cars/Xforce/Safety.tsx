import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IMG_BASE = "/cars/xforce/images";

export default function XforceSafety() {
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
                        All-New Xforce Safety
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        Fitted with intelligent safety features, the Xforce
                        ensures a secure driving experience every journey.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/safety1.png`}
                            alt="Mitsubishi Xforce safety sensor illustration overlaid on a driving scene"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* 2nd image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/safety2.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Dynamic Sound Yamaha Premium
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    Experience vivid sound quality with four
                                    selectable modes: Lively, Signature,
                                    Powerful, and Relaxing.
                                </p>
                                <p className="text-xs font-bold text-gray-400 leading-relaxed mb-4">
                                    *GT Variant only
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 2nd image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety3.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Forward Collision Mitigation
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    The Forward Collision Mitigation (FCM)
                                    system automatically applies the brakes when
                                    it detects a potential collision due to
                                    decreasing distance from the vehicle ahead,
                                    reducing the risk of an accident and
                                    ensuring the safety of passengers and
                                    pedestrians.
                                </p>
                                <p className="text-xs font-bold text-gray-400 leading-relaxed mb-4">
                                    *GT Variant only
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
                                    src={`${IMG_BASE}/safety4.png`}
                                    alt="Mitsubishi Montero Sport driving on a rocky mountain trail"
                                    loading="lazy"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Rear Cross Traffic Alert
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                Rear-Cross Traffic Alert informs the driver of
                                approaching vehicles from either side when
                                reversing out of a parking space, enabling safe
                                backing out of any parking spot.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed italic">
                                GT variant
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/safety5.png`}
                                    alt="Mitsubishi Montero Sport 8-speed automatic gear shifter"
                                    loading="lazy"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Blind Spot Warning (BSW)
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed  mb-4">
                                Sensors on the bumpers detect vehicles in your
                                blind spots. If a vehicle is nearby, a warning
                                icon will blink on the door mirror.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed italic">
                                GT variant
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2nd image right, text left */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/safety6.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Auto High Beam (AHB)
                                </h2>
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    Auto High Beam system detects the headlights
                                    of oncoming vehicles and the taillights of
                                    those ahead, automatically adjusting between
                                    high and low beams.
                                </p>
                                <p className="text-xs font-bold text-gray-400 leading-relaxed mb-4">
                                    *GT Variant only
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3rd section image right, text left */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety6.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    6 Airbags
                                </h2>
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    Airbags provide safety for both driver and
                                    passengers throughout the journey.
                                </p>
                                <p className="text-xs font-bold text-gray-400 leading-relaxed mb-4">
                                    *Curtain airbags available for GT variant
                                    only
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2nd image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/safety7.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Hill Start Assist (HSA)
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    Prevents the car from sliding back when
                                    starting on a steep incline.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 2nd image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety8.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Active Stability Control
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    Active Stability Control uses sensor data to
                                    analyze vehicle movement and slippage, and
                                    automatically adjuss engine power and
                                    braking force to maintain stable handling,
                                    particularly in slippery conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2nd image right, text left */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/safety9.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Anti-Locking Brake System (ABS) & Electronic
                                    Brakeforce Distribution (EBD)
                                </h2>
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    The dual system ensures that the appropriate
                                    force is distributed to each wheel for
                                    effective braking.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3rd section image right, text left */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety10.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    ELECTRIC PARKING BRAKE WITH AUTO-HOLD
                                    FUNCTION
                                </h2>
                                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                    The intelligent automatic control handbrake
                                    is designed to prevent drivers from
                                    inadvertently forgetting to engage or
                                    release the handbrake.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Disclaimers */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 max-w-3xl">
                        <p className="text-xs text-gray-500 leading-relaxed mb-8">
                            Equipment may vary by market. Please consult your
                            local Mitsubishi Motors dealer/distributor for
                            details.
                        </p>

                        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-6">
                            Important
                        </p>

                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-bold text-gray-700 mb-1.5">
                                    HSA
                                </p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Hill Start Assist [HSA] is not a substitute
                                    for safe driving. Never rely solely on this
                                    function while driving on steep roads. Your
                                    vehicle may move backwards if the brake
                                    pedal is not sufficiently depressed, or if
                                    the road is very steep or slippery. This
                                    function is not designed to keep the vehicle
                                    stopped in place for more than 2 seconds. Do
                                    not rely on this function to maintain a
                                    stopped position as an alternative to
                                    depressing the brake pedal. Please see the
                                    owner's manual for additional information.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-700 mb-1.5">
                                    ASC
                                </p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Active Stability Control: The control
                                    capabilities of ASC are supplemental only.
                                    Please drive safely and never rely solely on
                                    these functions while driving. ASC does not
                                    work the same at all wheels. Do not install
                                    any aftermarket limited slip differential on
                                    your vehicle. Please see the owner's manual
                                    for additional information.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-700 mb-1.5">
                                    ABS
                                </p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Anti-lock Brake System (ABS) can help the
                                    driver maintain control while braking, but
                                    is never a substitute for safe driving. ABS
                                    does not always reduce stopping distances,
                                    which may be influenced by many factors
                                    including road surface conditions and
                                    friction between the tires and road surface.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-700 mb-1.5">
                                    ESB
                                </p>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    The capabilities of the Emergency Stop
                                    Signal System are supplemental only and do
                                    not prevent collisions in every situation.
                                    The system activates at a vehicle speed of
                                    approx. 55km/h or higher, and when the
                                    system judges emergency braking from sudden
                                    deceleration and operating condition of the
                                    anti-lock brake (ABS) system. If you have
                                    any questions, please consult your local
                                    Mitsubishi Motors dealer/distributor for
                                    details.
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

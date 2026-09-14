import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IMG_BASE = "/cars/triton/images";

export default function TritonSafety() {
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
                        All-New Triton Safety
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        The All-New Triton goes beyond limits not just in terms
                        of toughness but also in terms of safety.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/safety1.png`}
                            alt="Mitsubishi Montero Sport Safety Poster"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Off-Road Mode — image right, text left */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety2.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    5-STAR
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    ASEAN NCAP
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Earned 5 Stars from the ASEAN New Car
                                    Assessment Programme
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Off-Road Mode — image left, text right */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/safety3.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    BLIND SPOT WARNING WITH LANE CHANGE ASSIST
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Enhance Awareness
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Blind Side Warning helps detect vehicles in
                                    your blind spot, which is the area not
                                    visible through your mirrors. When you
                                    activate your turn signal to change lanes,
                                    Lane Change Assist helps by alerting you if
                                    there is a vehicle in your blind spot. This
                                    helps enhance your awareness and reduces the
                                    risk of collisions when changing lanes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Off-Road Mode — image right, text left */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety4.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    FORWARD COLLISION MITIGATION SYSTEM WITH
                                    PEDESTRIAN DETECTION
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Enhanced Passenger and Pedestrian Safety
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Forward Collision Mitigation (FCM) system
                                    automatically applies the brakes when the
                                    vehicle detects a chance of an accident due
                                    to a reduction in the distance from the
                                    vehicle in front, lowering the chances of a
                                    collision and keeping passengers and
                                    pedestrians safe.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Off-Road Mode — image left, text right */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/safety5.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    REAR-CROSS TRAFFIC ALERT
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Back up with assurance
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Rear-Cross Traffic Alert notifies the driver
                                    of approaching vehicles from either side
                                    when reversing out of a parking space,
                                    allowing you to safely back out of any
                                    parking space.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Off-Road Mode — image right, text left */}
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
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    IMPROVED RIDE AND HANDLING
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    More Durable Frame
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The All-New Triton’s frame uses high-tensile
                                    materials, making it more reliable and
                                    durable. An increased cross-sectional size
                                    enhances both ride and handling, ensuring
                                    improved durability, reliability, and, most
                                    importantly, a safer driving experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Safety system disclaimers */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 max-w-3xl">
                        <p className="text-xs text-gray-600 leading-relaxed mb-2">
                            Please note: Image shown may not be an accurate
                            representation of the specific model.
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed mb-8">
                            Equipment may vary by market. Please consult your
                            local Mitsubishi Motors dealer/distributor for
                            details.
                        </p>

                        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-6">
                            Important
                        </p>

                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-bold text-gray-800 mb-1.5">
                                    UMS
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    The detection and control capabilities of
                                    the Ultrasonic misacceleration Mitigation
                                    System [UMS] are supplemental only and do
                                    not prevent misacceleration in every
                                    situation. Please drive safely and do not
                                    rely solely on this system while driving. •
                                    To prevent the engine output control
                                    provided by UMS from causing an impediment
                                    during normal driving in rough-road driving
                                    conditions, the system automatically
                                    de-activates and indicates UMS OFF in the
                                    meter cluster when the 4LLc, R/D lock, or
                                    HDC setting is ON or the ASTC function is
                                    OFF. • No function completely stops the
                                    vehicle via the automatic braking. The
                                    vehicle creeps forward even when engine
                                    output is regulated. • The sensing system
                                    may not work for netlike and sharp-edged
                                    obstructions that do not sufficiently
                                    reflect ultrasonic sound. • UMS does not
                                    include a function which keeps the vehicle
                                    stationary. The driver is responsible for
                                    stopping the vehicle by pressing the brake
                                    pedal as required by the driving conditions.
                                    • The ultrasonic sensor wave graphics are
                                    for illustrative purposes only and do not
                                    represent the actual sensor application.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-800 mb-1.5">
                                    BSW
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    The detection and control capabilities of
                                    the Blind Spot Warning system [BSW] are
                                    supplemental only and do not warn you of
                                    vehicles in blind spots in every situation.
                                    Please do not rely solely on this system
                                    while driving. The blind spot monitor may
                                    not operate normally in some cases,
                                    depending on traffic, weather, road surface
                                    conditions and the presence of obstructions.
                                    Drivers are fully responsible for their own
                                    safe driving. The radar wave graphics are
                                    used for illustrative purposes only and do
                                    not represent the actual sensor application.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-800 mb-1.5">
                                    FCM
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    The detection and control capabilities of
                                    Forward Collision Mitigation [FCM] are
                                    supplemental only and do not prevent
                                    collisions in every situation. Please drive
                                    safely and do not rely solely on this system
                                    while driving. FCM operates when a vehicle
                                    is in front of your vehicle. FCM is also
                                    designed to detect pedestrians, but may not
                                    detect them or be activated in some
                                    situations. Auto braking is activated for a
                                    car ahead when your vehicle is traveling at
                                    a speed of approx. 5km/h to 80km/h and for a
                                    pedestrian ahead at approx. 5km/h to 65km/h.
                                    Since FCM has no function to maintain
                                    braking, the brake is released approximately
                                    2 seconds after stopping. To prevent the
                                    vehicle from rolling thereafter, the driver
                                    may have to hold the brake pedal down. In
                                    some cases, FCM may not function if the
                                    driver takes actions for accident avoidance
                                    through steering or acceleration operation.
                                    If you have any questions, please consult
                                    your local Mitsubishi Motors
                                    dealer/distributor for details.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-800 mb-1.5">
                                    RCTA
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Do not rely solely on this system, which may
                                    not detect all moving vehicles in certain
                                    conditions. Drivers are fully responsible
                                    for their own safe driving. The radar wave
                                    graphics are for illustrative purposes only
                                    and do not represent the actual sensor
                                    application. Please see the owner's manual
                                    for additional information.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-800 mb-1.5">
                                    LDW
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Lane Departure Warning is not designed to
                                    lessen risks associated with not looking
                                    ahead carefully (attention drawn to
                                    something on the side, absentmindedness,
                                    etc.) or poor visibility caused by bad
                                    weather etc. Keep steering your vehicle
                                    correctly and drive safely. The system may
                                    not be able to detect the lane correctly in
                                    some conditions. Please see the owner's
                                    manual for additional information.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-800 mb-1.5">
                                    HSA
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Hill Start Assist [HSA] is not a substitute
                                    for safe driving. Never rely solely on this
                                    function while driving on steep roads. Your
                                    vehicle may move backwards if the brake
                                    pedal is not sufficiently depressed, or if
                                    the road is very steep or slippery. This
                                    function is not designed to keep the vehicle
                                    stopped in place on uphill slopes for more
                                    than 2 seconds. Do not rely on this function
                                    to maintain a stopped position as an
                                    alternative to depressing the brake pedal.
                                    Please see the owner's manual for additional
                                    information.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-800 mb-1.5">
                                    AHB
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    This system activates at a speed of approx.
                                    40km/h or more and deactivates at lower
                                    speeds. Please see the owner's manual for
                                    additional information.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Airbags are part of a Supplemental Restraint
                                    System [SRS]. To decrease the risk of injury
                                    from a deploying airbag, always wear your
                                    seat belt, sit upright in the middle of the
                                    seat and do not lean against the door.
                                    Always place children 12 and under in the
                                    rear seat and use appropriate child
                                    restraints. Never place a rear-facing infant
                                    restraint in the front seat. Please see the
                                    owner's manual and the instructions provided
                                    with your child restraint for additional
                                    information.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-gray-800 mb-1.5">
                                    TSA
                                </p>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    The control capabilities of Trailer
                                    Stability Assist [TSA] are supplemental
                                    only. Please drive safely and never rely
                                    solely on these functions while driving. Due
                                    to the slippery road surface, heavy side
                                    wind, inappropriate weight and positioning
                                    of luggage, and/or driving at high speed,
                                    the TSA system may fail to secure stability.
                                    Please see the owner's manual for additional
                                    information.
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

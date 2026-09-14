import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IMG_BASE = "/cars/montero/images";

export default function MonteroSafety() {
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
                        MONTERO SPORT SAFETY
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        Ever since we began making automobiles over a century
                        ago, passenger safety has been our number one priority.
                        The new generation Montero Sport continues this mission.
                        It comes with a host of intelligent safety features
                        which allow you to drive with greater confidence both on
                        road and off.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/safety1.webp`}
                            alt="Mitsubishi Montero Sport Safety Poster"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Dynamic Shield — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/safety2.jpg`}
                                alt="Mitsubishi Montero Sport front view driving through a tunnel"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    ULTRASONIC MISACCELERATION MITIGATION SYSTEM
                                    [UMS]
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    No sudden lurches
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    To help prevent collisions when parking, a
                                    buzzer sounds and a warning light comes on
                                    in the 8 inch colour LCD meter if sensors
                                    detect a nearby obstacle in your path.
                                    Engine output is also automatically
                                    controlled if your foot accidentally presses
                                    down on the accelerator.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Third */}
                <section className="bg-black">
                    <div className="grid grid-cols lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety3.jpg`}
                                alt="Mitsubishi Montero Sport front view driving through a tunnel"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    FORWARD COLLISION MITIGATION SYSTEM [FCM]
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    A clear road ahead
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    If there’s a possibility of a collision with
                                    a car up ahead, this intelligent safety
                                    system will automatically slow your Montero
                                    Sport down.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Desert shot / 18" Alloy Wheels pair */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/safety4.jpg`}
                                    alt="Mitsubishi Montero Sport driving through desert dunes"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                REAR CROSS TRAFFIC ALERT [RCTA]
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Reverse with confidence
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                If a vehicle is detected behind you when you’re
                                just about to reverse out of a parking space or
                                driveway, the indicator on the door mirror
                                blinks, you’ll hear a warning sound and a
                                message appears in the 8 inch colour LCD meter.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/safety5.jpg`}
                                    alt="Mitsubishi Montero Sport 18-inch alloy wheel"
                                    loading="lazy"
                                    className="max-w-[75%] max-h-[75%] object-contain"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                BLIND SPOT WARNING SYSTEM [BSW] WITH LANE CHANGE
                                ASSIST [LCA]
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Safer pulling out and changing lanes
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Sensors on the bumpers will detect if there’s a
                                vehicle in your blind spots. If there is a
                                vehicle nearby, a warning icon blinks on the
                                door mirror. And with Lane Change Assist [LCA],
                                if you activate the turn light and there’s
                                another vehicle coming up, you’ll hear a warning
                                beep.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Desert shot / 18" Alloy Wheels pair */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/safety6.jpg`}
                                    alt="Mitsubishi Montero Sport driving through desert dunes"
                                    loading="lazy"
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                HILL DESCENT CONTROL [HDC]
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Feel confident on steep slopes
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Negotiating a tricky slope? Use Hill Descent
                                Control (the switch is just above the 4WD
                                selector dial). The Montero Sport will
                                automatically apply the brakes to maintain your
                                current speed. It means you can focus your
                                attention on steering, without having to think
                                about applying the brakes all the time.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/safety7.jpg`}
                                    alt="Mitsubishi Montero Sport 18-inch alloy wheel"
                                    loading="lazy"
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                ACTIVE STABILITY AND TRACTION CONTROL [ASTC]
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                If you have a wobble, the Montero Sport won’t
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                The Active Stability and Traction Control system
                                [ASTC] uses onboard sensors to analyse the
                                vehicle’s motion and identify any unstable
                                movement. By automatically adjusting engine
                                output and applying braking power to the
                                appropriate wheels, ASTC helps to maintain
                                stability and control. It also applies a braking
                                force to the spinning wheels for smooth starts
                                and straight-line acceleration.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Dynamic Shield — text left, image right */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-3">
                                    ADAPTIVE CRUISE CONTROL (ACC)
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Stay a safe distance from the vehicle in
                                    front
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The Adaptive Cruise Control system maintains
                                    a selected distance between your vehicle and
                                    the car ahead using built-in radar. You’ll
                                    find it helps to reduce driver stress during
                                    slow traffic and enhances your driving
                                    comfort overall.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/safety8.jpg`}
                                alt="Mitsubishi Montero Sport front view driving through a tunnel"
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

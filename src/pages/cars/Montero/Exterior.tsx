import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IMG_BASE = "/cars/montero/images";

export default function MonteroExterior() {
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
                        MONTERO SPORT EXTERIOR
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        The exterior of the new generation Montero Sport
                        whispers quality from whichever angle you look at it.
                        The front and rear of the vehicle have been improved to
                        create a bolder, more powerful look. Progressive styling
                        throughout the body creates a silhouette that is every
                        inch the high-class SUV.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/montero-poster.jpg`}
                            alt="Mitsubishi Montero Sport parked in front of a city skyline at sunset"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Dynamic Shield — text left, image right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    DYNAMIC SHIELD
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Protection through design
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    The front of the Montero Sport incorporates
                                    the Dynamic Shield. This unique design
                                    offers greater protection for pedestrians
                                    and passengers alike.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/exterior1.jpg`}
                                alt="Mitsubishi Montero Sport front view driving through a tunnel"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Desert shot / 18" Alloy Wheels pair */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/exterior2.jpg`}
                                    alt="Mitsubishi Montero Sport driving through desert dunes"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                OVERALL STYLING
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Reassuringly tough
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                The chrome bars of the upper front grille and
                                the swept back daytime running lamps give the
                                Montero Sport a strong, streamlined face. The
                                solid theme continues along the sides of the
                                vehicle: the side bumpers are low profile and
                                flush with the body. At the rear, the deep
                                bumper and protection plate emphasise the
                                vehicle's strength and stability. The overall
                                result is the Montero Sport looks as though it's
                                been sculpted from a chunk of solid metal.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-[#6a7372] overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/exterior3.jpg`}
                                    alt="Mitsubishi Montero Sport 18-inch alloy wheel"
                                    loading="lazy"
                                    className="max-w-[75%] max-h-[75%] object-contain"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                18" ALLOY WHEELS
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Better grip in the wet and dry
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                To enhance the rugged go-anywhere looks, the new
                                generation Montero Sport has 18" alloy wheels.
                                Alloys not only look better, the hub is wider
                                than conventional wheels, so you get more
                                precise steering and better grip in both the wet
                                and dry.
                            </p>
                        </div>
                    </div>
                </section>

                {/* LED Headlamps — image left, text right */}
                <section className="w-full bg-white pb-14 sm:pb-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="aspect-[4/3] bg-black overflow-hidden">
                            <img
                                src={`${IMG_BASE}/exterior4.jpg`}
                                alt="Mitsubishi Montero Sport LED headlamp close-up"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                LED HEADLAMPS AND DAYTIME RUNNING LAMPS
                            </p>
                            <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                See more of the road ahead
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Sophisticated LED headlamps add personality to
                                Montero Sport's face. But they're not just there
                                for looks — LED bulbs last longer and produce a
                                stronger, whiter light, giving you a better view
                                of the road ahead. The Montero Sport also has
                                LED fog lamps, and to make you more visible to
                                other motorists, the Montero Sport also has LED
                                Daytime Running Lamps, which come on
                                automatically when the engine start
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
                                    LED TAIL LAMP AND STOP LAMPS
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Be seen from behind
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The unique lamp cluster at the rear not only
                                    adds character, the LED bulbs improve
                                    visibility for vehicles behind you.
                                    Incorporated within this cluster is an LED
                                    Tail Lamp, and an LED Stop Lamp (brake
                                    light), both of which produce a stronger
                                    light, which signals your intentions to the
                                    traffic behind more quickly.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/exterior5.jpg`}
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

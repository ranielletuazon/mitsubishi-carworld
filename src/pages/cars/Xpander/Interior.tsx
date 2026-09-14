import { ArrowLeft } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const IMG_BASE = "/cars/xpander/images";

export default function XpanderInterior() {
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
                        XPANDER INTERIOR
                    </h1>
                    <p className="text-sm text-white/60 max-w-lg mx-auto">
                        We wanted the Xpander and Xpander Cross interiors to
                        reflect our deep held belief of ‘Omotenashi’, the
                        Japanese word for ‘hospitality’. So as well as Japanese
                        craftsmanship, there are lots of other touches, like
                        clever storage areas and a superior climate control
                        system.
                    </p>
                </section>
                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/interior1.jpg`}
                            alt="Driver behind the wheel of the Mitsubishi Xpander"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Three another drive features */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior2.jpg`}
                                    alt="Eco Indicator"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                SOUND ABSORBING WALLS AND FLOOR
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                There’s no need to shout
                            </h3>
                            <p>
                                We’ve added sound absorbing material throughout
                                and thick carpet on the floor, so you can have a
                                conversation with your fellow passengers without
                                raising your voice.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior3.jpg`}
                                    alt="Aero"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                SOUND ABSORBING ROOF
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Electronic Brakeforce Distribution (GLS)
                            </h3>
                            <p>
                                Thick headlining backed by sound-absorbing
                                material has been used to reduce rain noise on
                                the roof.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior4.jpg`}
                                    alt="Easy To Manuever"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                SOUND ABSORBING WINDSCREEN
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                High quality insulated glass
                            </h3>
                            <p>
                                The windshield is made of high-quality insulated
                                glass. Combine that with all the other sound
                                proofing touches and it’s no wonder the Xpander
                                and Xpander Cross are so quiet inside.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4th */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-200 mb-3">
                                    SECOND ROW SEATS
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-100 uppercase tracking-tight mb-4">
                                    Three adults in the middle seats
                                </h2>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    The Xpander and Xpander Cross have seven
                                    seats. In the middle row, three adults can
                                    sit comfortably with more headroom than any
                                    other vehicle in its class. A mechanism
                                    allows the seats to fold forward easily, to
                                    access the third row of seats.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/interior5.jpg`}
                                alt="Mitsubishi Xpander Front Seat"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* 5th */}
                <section className="bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-200 mb-3">
                                    THIRD ROW SEATS
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-100 uppercase tracking-tight mb-4">
                                    Easy access to the back seats
                                </h2>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Unlike many MPVs, the Xpander and Xpander
                                    Cross have third row seats which are
                                    properly proportioned, in other words,
                                    they’ve been designed for adults. They have
                                    more hip width, more legroom and a sensible
                                    amount of space for your feet.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/interior6.jpg`}
                                alt="Mitsubishi Xpander Back Seat"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Two another Interior features */}
                <section className="w-full bg-white py-8 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior7.jpg`}
                                    alt="Aero"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                ALL SEATS UP
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Room for seven, plus luggage
                            </h3>
                            <p>
                                Keep all the seats up and you can carry seven
                                passengers. Still need room for other items?
                                There’s a space behind the third row for four
                                gallon water bottles or a stroller.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior8.jpg`}
                                    alt="Easy To Manuever"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                SECOND AND THIRD ROW DOWN
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Welcome to the cargo deck
                            </h3>
                            <p>
                                Fold the third and second row seats down and
                                you’ve got a large, flat cargo deck with no
                                sticking up bits or gaps. This makes it ideal
                                for luggage, bikes and even items of furniture.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

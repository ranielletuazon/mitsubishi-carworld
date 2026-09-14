import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IMG_BASE = "/cars/montero/images";

export default function MonteroInterior() {
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
                        MONTERO SPORT INTERIOR
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        Inside the new generation Montero Sport you’ll find a
                        well-appointed cabin with greater levels of luxury. Sink
                        back into supportive, comfortable seats and take in the
                        solid craftsmanship and attention to detail. With this
                        level of comfort and sophistication, every journey is a
                        pleasure.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/interior1.jpg`}
                            alt="Mitsubishi Montero Sport parked in front of a city skyline at sunset"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Dynamic Shield — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/interior2.jpg`}
                                alt="Mitsubishi Montero Sport front view driving through a tunnel"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    8 INCH COLOR LCD METER
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Clear, high quality controls
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    The 8 inch color LCD meter is located on the
                                    dashboard directly in front of the driver.
                                    It displays important information, such as
                                    vehicle speed and trip information. The
                                    easy-to-read graphics have a quality feel
                                    and the way the information is displayed can
                                    be changed to suit your preference, or for
                                    checking different combinations of
                                    information.
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
                                src={`${IMG_BASE}/interior3.jpg`}
                                alt="Mitsubishi Montero Sport front view driving through a tunnel"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    SMARTPHONE-LINK DISPLAY AUDIO (SDA)
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    Use your favorite apps on the move
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    The center console houses the
                                    Smartphone-Link Display Audio (SDA). This
                                    in-car infotainment hub has a large display
                                    screen, an upgraded TomTom navigation system
                                    and faster processing time. It’s also the
                                    centre for audio controls and journey status
                                    information, such as energy consumption and
                                    drive range. The SDA supports Apple CarPlay™
                                    through your iPhone. You can also link your
                                    smartphone to the vehicle via Android Auto™
                                    or Bluetooth™.
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
                                    src={`${IMG_BASE}/interior4.jpg`}
                                    alt="Mitsubishi Montero Sport driving through desert dunes"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                APPLE CARPLAY™
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Connection for Apple users
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Connect your iPhone to the Smartphone-Link
                                Display Audio (SDA) through Apple CarPlay™. It
                                gives you smart access to Apple Music, Apple
                                Maps, Messages and voice commands using Siri.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-black overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/interior5.jpg`}
                                    alt="Mitsubishi Montero Sport 18-inch alloy wheel"
                                    loading="lazy"
                                    className="max-w-[75%] max-h-[75%] object-contain"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                ANDROID AUTO™
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Connection for Android users
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Just by connecting your Android Smartphone to
                                the Smartphone-Link Display Audio (SDA) through
                                Android Auto™ system means you can operate your
                                favourite apps through voice commands, letting
                                you focus on the road for safer driving.
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
                                    CARGO SPACE
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                    An enormous load space
                                </h2>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    As well as seating for up to seven adults,
                                    the Montero Sport has acres of cargo area
                                    when the rear seats are folded down.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/interior6.jpg`}
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

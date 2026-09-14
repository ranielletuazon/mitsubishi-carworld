import { ArrowLeft } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const IMG_BASE = "/cars/xpander/images";

export default function Exterior() {
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
                        New Xpander Exterior
                    </h1>
                    <p className="text-sm text-white/60 max-w-lg mx-auto">
                        Discover new experiences in style. The new Xpander’s
                        bolder and sportier exterior styling is sure to turn
                        heads wherever it drives. It exudes confidence equal to
                        the attention it receives.
                    </p>
                </section>
                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/exterior1.png`}
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
                                    OVERALL STYLING
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Solid, robust, protective
                                </h2>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    The exteriors of the Xpander and Xpander
                                    Cross have been influenced by our hugely
                                    successful SUV, the Montero Sport. The
                                    Xpander has strong, sculpted looks, whereas
                                    the Xpander Cross has additional SUV touches
                                    like black wheel arch moldings and LED fog
                                    lamps that creates a strong, ‘go-anywhere’
                                    feel.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/exterior2.png`}
                                alt="Mitsubishi Xpander 1.5L MIVEC engine"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Third Section */}
                <section className="w-full max-w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/exterior3.png`}
                                    alt="Xpander electronic parking brake with brake auto hold button"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                NEW GRAPHITE GRAY COLOR
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                A deeper shade of gray
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Both the Xpander and Xpander Cross are available
                                in our new Graphite Gray metallic color. This is
                                no ordinary shade of gray – multiple layers
                                create a rich, sparkling luster.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/exterior4.png`}
                                    alt="Xpander steering wheel cruise control buttons"
                                    loading="lazy"
                                    className="max-w-[70%] max-h-[70%] object-contain"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                NEW SUNRISE ORANGE METALLIC COLOR
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                The future is bright
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                If you want to make a bold statement, the
                                Xpander Cross is also available in the new
                                Sunrise Orange Metallic color.
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
                                    XPANDER CROSS ROOF RAILS
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-100 uppercase tracking-tight mb-4">
                                    Making life easier
                                </h2>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    The Xpander Cross is not only a pleasure to
                                    drive, it’s convenient too. Outside the
                                    vehicle, you’ll find several SUV touches –
                                    one of which is roof rails. These not only
                                    add to the rugged looks, any extra luggage
                                    can go up top.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/exterior5.png`}
                                alt="Mitsubishi Xpander Front"
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
                                    ALLOY WHEELS
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-100 uppercase tracking-tight mb-4">
                                    Not just there just to look good
                                </h2>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    The Xpander has 16-inch alloys and the
                                    Xpander Cross has 17-inch alloys. Alloys
                                    make the car look sporty and the wider rims
                                    means larger tyres can be fitted, which
                                    creates a more stable ride.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/exterior6.png`}
                                alt="Mitsubishi Xpander TailLights"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>
                {/* Final image */}
                <section className="w-full bg-white">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/exterior7.png`}
                            alt="Driver behind the wheel of the Mitsubishi Xpander"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

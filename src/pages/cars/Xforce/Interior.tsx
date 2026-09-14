import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

const IMG_BASE = "/cars/xforce/images";

export default function XforceInterior() {
    const navigate = useNavigate();
    const [iframeLoaded, setIframeLoaded] = useState(false);

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
                        All-New XFORCE Interior
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        The XFORCE seamlessly blends advanced technology with
                        sophisticated yet comfortable interiors.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/xforce3.png`}
                            alt="Family enjoying the panoramic sunroof inside the Mitsubishi Destinator"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* 360-view — iframe embed */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-12">
                        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-red-600 mb-2">
                                360° Experience
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                                Explore the Xforce in 360° View
                            </h2>
                        </div>

                        <div className="relative border border-gray-200 min-h-[420px] sm:min-h-[520px] lg:min-h-[640px]">
                            {!iframeLoaded && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white z-10">
                                    <div className="w-8 h-8 border-2 border-gray-200 border-t-red-600 rounded-full animate-spin" />
                                    <p className="text-xs text-gray-400 uppercase tracking-widest">
                                        Loading interior view...
                                    </p>
                                </div>
                            )}
                            <iframe
                                src="https://tours.exsight360.com/mitsubishi/xforce/interior/v2/tour.html"
                                onLoad={() => setIframeLoaded(true)}
                                className="w-full h-[420px] sm:h-[520px] lg:h-[640px] block border-0"
                                title="Mitsubishi Destinator 360-degree interior view"
                                allow="accelerometer; gyroscope"
                            />
                        </div>

                        <p className="text-xs text-gray-600 text-center mt-4">
                            Please note: Image shown may not be an accurate
                            representation of the specific model.
                        </p>
                    </div>
                </section>

                {/* First image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/interior1.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Spacious Cabin
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    The XFORCE’s luxurious and roomy cabin
                                    includes rear seats with 8-way
                                    adjustability, allowing versatile
                                    configurations for passengers and cargo.
                                    Synthetic leather seats with heatguard is
                                    available in the GT variant.
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
                                src={`${IMG_BASE}/interior2.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    CONVENIENCE AT EVERY TURN
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Monolithic 12.3-Inch Display
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    The XForce comes with a sizable 12.3-inch
                                    display with an intuitive interface that is
                                    equipped with various widgets to provide
                                    more useful driving information.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Customizable Vehicle Information Display — 6-item grid */}
                <section className="w-full bg-white pt-14 sm:pt-20">
                    <div className="container mx-auto px-4 lg:px-6">
                        <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-8 sm:mb-10">
                            Customizable Vehicle Information Display
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-6">
                            <div>
                                <div className="aspect-square bg-gray-100 overflow-hidden mb-3">
                                    <img
                                        src={`${IMG_BASE}/interior3.png`}
                                        alt="Xforce dashboard Drive Mode display"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xs font-black text-gray-900 uppercase tracking-tight text-center">
                                    Drive Mode
                                </h3>
                            </div>

                            <div>
                                <div className="aspect-square bg-gray-100 overflow-hidden mb-3">
                                    <img
                                        src={`${IMG_BASE}/interior4.png`}
                                        alt="Xforce dashboard Avionics display"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xs font-black text-gray-900 uppercase tracking-tight text-center">
                                    Avionics
                                </h3>
                            </div>

                            <div>
                                <div className="aspect-square bg-gray-100 overflow-hidden mb-3">
                                    <img
                                        src={`${IMG_BASE}/interior5.png`}
                                        alt="Xforce dashboard Reliable display"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xs font-black text-gray-900 uppercase tracking-tight text-center">
                                    Reliable
                                </h3>
                            </div>

                            <div>
                                <div className="aspect-square bg-gray-100 overflow-hidden mb-3">
                                    <img
                                        src={`${IMG_BASE}/interior6.png`}
                                        alt="Xforce dashboard Adventurous display"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xs font-black text-gray-900 uppercase tracking-tight text-center">
                                    Adventurous
                                </h3>
                            </div>

                            <div>
                                <div className="aspect-square bg-gray-100 overflow-hidden mb-3">
                                    <img
                                        src={`${IMG_BASE}/interior7.png`}
                                        alt="Xforce dashboard Driving Score display"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xs font-black text-gray-900 uppercase tracking-tight text-center">
                                    Driving Score
                                </h3>
                            </div>

                            <div>
                                <div className="aspect-square bg-gray-100 overflow-hidden mb-3">
                                    <img
                                        src={`${IMG_BASE}/interior8.png`}
                                        alt="Xforce dashboard Customizable Wallpaper display"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xs font-black text-gray-900 uppercase tracking-tight text-center">
                                    Customizable Wallpaper
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* First image right, text left */}
                <section className="bg-white pt-14 sm:pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/interior9.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Ambient Lighting
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    The XFORCE’s ambient lighting* helps set the
                                    right mood and enhances its luxurious
                                    atmosphere.
                                </p>

                                <p className="text-[11px] font-bold text-gray-500 leading-relaxed mb-4">
                                    *GT Variant only
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
                                src={`${IMG_BASE}/interior10.jpg`}
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
                                    src={`${IMG_BASE}/interior11.png`}
                                    alt="Mitsubishi Montero Sport driving on a rocky mountain trail"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Touch of sophistication
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed mb-2">
                                The XFORCE’s instrument panel features mélange
                                fabric which adds to the interior’s modernity
                                and opulence.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/interior12.png`}
                                    alt="Mitsubishi Montero Sport 8-speed automatic gear shifter"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Floating Console
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                The floating console enhance’s the XFORCE’s
                                advanced interiors.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

const IMG_BASE = "/cars/destinator/images";

interface InfoDisplay {
    name: string;
    image: string;
    description: string;
}

const infoDisplays: InfoDisplay[] = [
    {
        name: "Multi Meter",
        image: `${IMG_BASE}/interior5.webp`,
        description:
            "Shows location, tilt angle, direction, and outside temperature",
    },
    {
        name: "Driving Score",
        image: `${IMG_BASE}/interior6.webp`,
        description: "Shows acceleration, steer, brake, and overall score",
    },
    {
        name: "Home Page",
        image: `${IMG_BASE}/interior7.webp`,
        description:
            "Customize information you want to see while driving your Destinator",
    },
];

interface StorageFeature {
    name: string;
    image: string;
    availability?: string;
}

const storageFeaturesRow1: StorageFeature[] = [
    {
        name: "Passenger Seat Under Tray",
        image: `${IMG_BASE}/interior12.webp`,
    },
    {
        name: "Center Arm Rest with Cool Box",
        image: `${IMG_BASE}/interior13.webp`,
        availability: "Available for GT and GLS variants",
    },
    {
        name: "Seatback Table",
        image: `${IMG_BASE}/interior14.webp`,
    },
];

const storageFeaturesRow2: StorageFeature[] = [
    {
        name: "Seatback Pockets",
        image: `${IMG_BASE}/interior15.webp`,
    },
    {
        name: "2nd Row Armrest with Cupholders",
        image: `${IMG_BASE}/interior16.webp`,
    },
    {
        name: "2nd Row USB Ports (Type A & C)",
        image: `${IMG_BASE}/interior17.webp`,
    },
];

const storageFeaturesRow3: StorageFeature[] = [
    {
        name: "3rd Row Cupholders",
        image: `${IMG_BASE}/interior18.webp`,
    },
    {
        name: "3rd Row Side Pockets",
        image: `${IMG_BASE}/interior19.webp`,
    },
    {
        name: "Spacious 3rd Row Seats",
        image: `${IMG_BASE}/interior20.webp`,
    },
];

function AvailabilityBadge({ text }: { text: string }) {
    return <p className="text-[11px] text-gray-700 italic mt-1.5">{text}</p>;
}

export default function DestinatorInterior() {
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
                        All-New Destinator Interior
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        The Destinator offers comfortable interiors for 7
                        passengers. It blends form and function, providing an
                        elevated feel in every nook and corner.
                    </p>
                </section>

                {/* Hero image */}
                <section className="w-full bg-black">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] overflow-hidden">
                        <img
                            src={`${IMG_BASE}/interior1.webp`}
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
                                Explore the Destinator in 360° View
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
                                src="https://exsight360.com/virtual-tours/mitsubishi/destinator-2025/interior/"
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

                {/* Premium Cabin — image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/interior2.webp`}
                                alt="Mitsubishi Destinator premium cabin interior"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Premium Cabin
                                </h2>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Inside, the roomy and upscale cabin boasts
                                    an elegant 2-tone maroon and black interior
                                    for the GT variant, and a sleek classic
                                    black trim for the GLS and GLX variants.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 12.3-inch display — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/interior3.webp`}
                                alt="Mitsubishi Destinator 12.3-inch monolithic display"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Monolithic 12.3-Inch Display with Smart
                                    Phone Connectivity
                                </h2>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    The large monolithic display consolidates
                                    both entertainment and vehicle information
                                    into a user-friendly and easily accessible
                                    screen. The entertainment system also offers
                                    wireless connectivity for Apple CarPlay and
                                    Android Auto.
                                </p>
                                <AvailabilityBadge text="Available for GT and GLS variants" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Panoramic Sunroof — text left, image right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Panoramic Sunroof
                                </h2>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Fill the cabin of the Destinator with
                                    natural light, elevating the interior
                                    atmosphere while letting passengers enjoy
                                    scenic views.
                                </p>
                                <AvailabilityBadge text="Available for GT variant" />
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/interior4.webp`}
                                alt="Mitsubishi Destinator panoramic sunroof view"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Customizable Vehicle Information Display — 3-item grid */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6">
                        <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-8 sm:mb-10">
                            Customizable Vehicle Information Display
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
                            {infoDisplays.map((item) => (
                                <div key={item.name}>
                                    <div className="aspect-[4/3] bg-black overflow-hidden mb-4">
                                        <img
                                            src={item.image}
                                            alt={`${item.name} display on the Destinator dashboard`}
                                            loading="lazy"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight mb-1.5">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-800 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8-inch LCD meter / Wireless charger pair */}
                <section className="w-full bg-white pb-14 sm:pb-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior8.webp`}
                                    alt="Destinator 8-inch LCD instrument meter cluster"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-1.5">
                                8-Inch LCD Meter
                            </h3>
                            <AvailabilityBadge text="Available for GT and GLS variants" />
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                <img
                                    src={`${IMG_BASE}/interior9.webp`}
                                    alt="Destinator wireless smartphone charging pad"
                                    loading="lazy"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-1.5">
                                Wireless Smartphone Charger
                            </h3>
                            <AvailabilityBadge text="Available for GT and GLS variants" />
                        </div>
                    </div>
                </section>

                {/* Image left and right */}
                {/* Premium Cabin — image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/interior10.webp`}
                                alt="Mitsubishi Destinator premium cabin interior"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex justify-center flex-col px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Dynamic Sound Yamaha Premium
                                </h2>
                                <p className="text-sm text-gray-800 leading-relaxed mb-4">
                                    Experience vivid sound quality with four
                                    selectable modes: Lively, Signature,
                                    Powerful, and Relaxing.
                                </p>
                                <p className="text-sm text-gray-800 leading-relaxed italic mb-8">
                                    Available for GT variant
                                </p>
                            </div>
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    64-Color Ambient Lighting
                                </h2>
                                <p className="text-sm text-gray-800 leading-relaxed mb-4">
                                    The Destinator offers a 64-Color ambient
                                    lighting* which helps set the right mood and
                                    enhances its luxurious atmosphere.
                                </p>
                                <AvailabilityBadge text="Available for GT variants" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 12.3-inch display — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/interior11.webp`}
                                alt="Mitsubishi Destinator 12.3-inch monolithic display"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Smart View Rear Mirror
                                </h2>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Get an unobstructed view from behind the
                                    vehicle.
                                </p>
                                <AvailabilityBadge text="Available for GT variants" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Destined for Adventure — storage features */}
                <section className="w-full bg-white pb-14 sm:pb-20 mt-12">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="mb-10 sm:mb-12 max-w-2xl">
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Destined for Adventure
                            </h2>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                The Destinator is designed for adventurous
                                families in mind, offering plenty of storage
                                solutions for everyday excursions. From cup and
                                bottle holders to smartphone pockets, seatback
                                tables, there's a place for everything
                                on-the-go.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-10">
                            {storageFeaturesRow1.map((item) => (
                                <div key={item.name}>
                                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight">
                                        {item.name}
                                    </h3>
                                    {item.availability && (
                                        <AvailabilityBadge
                                            text={item.availability}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-10">
                            {storageFeaturesRow2.map((item) => (
                                <div key={item.name}>
                                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            loading="lazy"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight">
                                        {item.name}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
                            {storageFeaturesRow3.map((item) => (
                                <div key={item.name}>
                                    <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight">
                                        {item.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

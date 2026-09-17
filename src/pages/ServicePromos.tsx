import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

interface Promo {
    title: string;
    image: string;
}

const promos: Promo[] = [
    {
        title: "Free Oil Filter",
        image: "/images/service/freeoilfilter.jpg",
    },
    {
        title: "Anniversary Treats",
        image: "/images/service/annivtreats.jpg",
    },
];

export default function ServicePromos() {
    const [selectedPromo, setSelectedPromo] = useState<Promo | null>(null);

    // Close on Escape key
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedPromo(null);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    // Prevent background scroll while modal is open
    useEffect(() => {
        document.body.style.overflow = selectedPromo ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedPromo]);

    return (
        <>
            <Header />
            <SEO
                title="Service Promos"
                description="Current maintenance deals and seasonal offers"
                url="/service-promos"
            />
            <main className="w-full max-w-full bg-white">
                {/* Hero */}
                <section className="w-full bg-black py-12 sm:py-16 px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-5 h-0.5 bg-red-600" />
                        <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-500">
                            Carworld Service Center
                        </span>
                        <span className="w-5 h-0.5 bg-red-600" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        Service Promos
                    </h1>
                    <p className="text-xs sm:text-sm text-white/55">
                        Current maintenance deals and seasonal offers
                    </p>
                </section>

                {/* Promo gallery */}
                <section className="container mx-auto px-4 lg:px-6 py-14">
                    {promos.length === 0 ? (
                        <p className="text-center text-gray-400 text-sm py-16">
                            No active promos at the moment. Check back soon.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            {promos.map((promo) => (
                                <button
                                    key={promo.title}
                                    onClick={() => setSelectedPromo(promo)}
                                    className="group border border-gray-200 overflow-hidden cursor-pointer text-left hover:border-red-600/40 transition-colors duration-200"
                                >
                                    <img
                                        src={promo.image}
                                        alt={promo.title}
                                        className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                                        loading="lazy"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </section>

                {/* Special offers CTA strip */}
                <section className="w-full bg-gray-50 border-y border-gray-200">
                    <div className="container mx-auto px-4 lg:px-6 py-14 sm:py-16">
                        <p className="text-[11px] font-bold tracking-[3px] uppercase text-red-600 mb-2">
                            Special Offers
                        </p>
                        <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-6 max-w-lg">
                            Check out our range of vehicles or download a
                            brochure
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="/vehicles"
                                className="bg-black hover:bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 text-center transition-colors duration-200"
                            >
                                Explore Vehicles
                            </a>
                            <a
                                href="/brochures"
                                className="border-2 border-black text-black hover:bg-black hover:text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 text-center transition-colors duration-200"
                            >
                                Download Brochure
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Image lightbox */}
            {selectedPromo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
                    onClick={() => setSelectedPromo(null)}
                >
                    <button
                        onClick={() => setSelectedPromo(null)}
                        aria-label="Close"
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl leading-none w-10 h-10 flex items-center justify-center hover:text-red-500 transition-colors duration-200 cursor-pointer"
                    >
                        ×
                    </button>
                    <img
                        src={selectedPromo.image}
                        alt={selectedPromo.title}
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}
        </>
    );
}

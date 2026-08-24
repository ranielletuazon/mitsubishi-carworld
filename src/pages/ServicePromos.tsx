import Header from "./components/Header";
import Footer from "./components/Footer";

interface Promo {
    title: string;
    subtitle: string;
    image?: string;
    validUntil: string;
    href: string;
}

const promos: Promo[] = [
    {
        title: "Free Oil Filter",
        subtitle: "Save as much as ₱1,400 on select maintenance packages.",
        validUntil: "Until August 15, 2026",
        href: "/service/promos/free-oil-filter",
        image: "/images/service/freeoilfilter.jpg",
    },
    {
        title: "Anniversary Treats",
        subtitle: "Book an appointment and win instant prizes.",
        validUntil: "July 15 – August 15, 2026",
        href: "/service/promos/anniversary-treats",
        image: "/images/service/annivtreats.jpg",
    },
];

export default function ServicePromos() {
    return (
        <>
            <Header />
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

                {/* Promo grid */}
                <section className="container mx-auto px-4 lg:px-6 py-14">
                    {promos.length === 0 ? (
                        <p className="text-center text-gray-400 text-sm py-16">
                            No active promos at the moment. Check back soon.
                        </p>
                    ) : (
                        <div className="border-t border-l border-gray-200">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {promos.map((promo) => (
                                    <a
                                        key={promo.href}
                                        href={promo.href}
                                        className="group flex flex-col bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-r border-b border-gray-200"
                                    >
                                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                                            {promo.image ? (
                                                <img
                                                    src={promo.image}
                                                    alt={promo.title}
                                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-black/60"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-[11px] uppercase tracking-widest text-gray-400">
                                                    Promo Image
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-2 px-6 py-5 flex-1 border-t-2 border-transparent group-hover:border-red-600 transition-all duration-200">
                                            <span className="text-[11px] font-medium tracking-[1.5px] uppercase text-gray-400">
                                                {promo.validUntil}
                                            </span>
                                            <h3 className="text-base font-bold text-gray-900 leading-snug uppercase">
                                                {promo.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                                                {promo.subtitle}
                                            </p>
                                            <div className="mt-auto pt-3 flex items-center gap-1.5 text-[11px] font-bold tracking-[1.5px] uppercase text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                <span>View details</span>
                                                <span className="transition-transform duration-200 group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
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
        </>
    );
}

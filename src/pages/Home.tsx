import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSlideshow from "./components/HeroSlideshow";
import NewsSection from "./components/NewsSection";
import VehicleShowcase from "./components/VehicleShowcase";

export default function Home() {
    return (
        <>
            <Header />
            <main className="w-full max-w-full">
                <HeroSlideshow />

                {/* Cars Display */}
                <VehicleShowcase />

                {/* Latest News Section */}
                <NewsSection />

                {/* Contact Us / Book a Service Banner */}
                <section className="relative w-full aspect-[19/6] min-h-[280px] sm:min-h-0 overflow-hidden bg-[url(./assets/images/carworld-service-dark.jpg)] bg-cover bg-center flex items-center">
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />

                    {/* Diagonal red accent blade */}
                    <div
                        className="absolute top-0 right-0 bottom-0 w-[60%] sm:w-[36%] bg-red-600 opacity-10"
                        style={{
                            clipPath:
                                "polygon(38% 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 w-full container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-10 sm:py-0">
                        <div className="max-w-xl">
                            {/* Eyebrow */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-500">
                                    Carworld Service Center
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase leading-tight tracking-tight mb-3">
                                Book a Service
                            </h2>

                            {/* Subtext */}
                            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-md">
                                Taking care of your Mitsubishi vehicle has never
                                been this easy. Schedule your next appointment
                                today.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <a
                            href="/contact"
                            className="group relative overflow-hidden border-2 border-white px-8 sm:px-10 py-3.5 sm:py-4 text-xs font-bold tracking-[0.2em] uppercase text-white transition-colors duration-300 hover:text-black inline-flex items-center gap-3 shrink-0"
                        >
                            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative z-10">Contact Us</span>
                            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

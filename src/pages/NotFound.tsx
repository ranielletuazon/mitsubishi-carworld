import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
    return (
        <>
            <main className="w-full max-w-full">
                <Header />

                {/* 404 Content */}
                <section className="relative w-full min-h-[560px] bg-black overflow-hidden flex items-center justify-center px-6 py-16 sm:py-20">
                    {/* Diagonal red accent blades */}
                    <div
                        className="absolute top-0 right-0 bottom-0 w-[60%] sm:w-[42%] bg-red-600 opacity-[0.06]"
                        style={{
                            clipPath:
                                "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
                        }}
                    />
                    <div
                        className="absolute top-0 right-0 bottom-0 w-[25%] sm:w-[18%] bg-red-600 opacity-10"
                        style={{
                            clipPath:
                                "polygon(55% 0, 100% 0, 100% 100%, 20% 100%)",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-lg">
                        {/* 4 · wheel · 4 */}
                        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5">
                            <span className="text-6xl sm:text-8xl font-black text-white tracking-tighter leading-none">
                                4
                            </span>
                            <div className="w-14 h-14 sm:w-24 sm:h-24 rounded-full border-[3px] sm:border-4 border-red-600 flex items-center justify-center shrink-0">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-7 h-7 sm:w-11 sm:h-11"
                                >
                                    <circle
                                        cx="7"
                                        cy="17"
                                        r="2"
                                        stroke="#cc0000"
                                        strokeWidth="1.8"
                                    />
                                    <circle
                                        cx="17"
                                        cy="17"
                                        r="2"
                                        stroke="#cc0000"
                                        strokeWidth="1.8"
                                    />
                                    <path
                                        d="M5 17h-1a1 1 0 0 1-1-1v-3.34a2 2 0 0 1 .59-1.42L6 8h9l3 4h1a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-1M9 17h6"
                                        stroke="#fff"
                                        strokeWidth="1.8"
                                    />
                                </svg>
                            </div>
                            <span className="text-6xl sm:text-8xl font-black text-white tracking-tighter leading-none">
                                4
                            </span>
                        </div>

                        {/* Eyebrow */}
                        <div className="flex items-center justify-center gap-2 mb-3.5">
                            <span className="w-5 h-0.5 bg-red-600" />
                            <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-500">
                                Wrong Turn
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-lg sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
                            This Road Leads Nowhere
                        </h1>

                        {/* Subtext */}
                        <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-8 max-w-md mx-auto">
                            The page you're looking for has taken a detour.
                            Let's get you back on the right route to find your
                            next Mitsubishi.
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
                            <a
                                href="/"
                                className="bg-red-600 hover:bg-red-700 text-white border-2 border-red-600 hover:border-red-700 px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-200"
                            >
                                Back to Home
                            </a>
                            <a
                                href="/vehicles"
                                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/35 hover:border-white px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200"
                            >
                                Explore Vehicles
                            </a>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}

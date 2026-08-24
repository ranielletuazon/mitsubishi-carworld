import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Service() {
    return (
        <main className="w-full max-w-full bg-[#0B0B0C]">
            <Header />

            {/* Hero */}
            <section className="relative w-full overflow-hidden px-4 py-20 sm:py-28 mb-12">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 64px)",
                    }}
                />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8102E]/10 blur-[100px]" />

                <div className="relative mx-auto max-w-3xl text-center">
                    <h1
                        className="text-4xl uppercase leading-[0.95] tracking-tight text-[#F3F1EC] sm:text-5xl lg:text-6xl"
                        style={{ fontWeight: 700 }}
                    >
                        Services and
                        <br />
                        <span className="text-[#C8102E]">Promos</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-md text-sm text-[#9A9A93]">
                        Genuine parts, certified technicians, and honest pricing
                    </p>
                </div>
            </section>

            {/* Two main CTA panels */}
            <section className="mx-auto max-w-6xl px-4 pb-4 sm:pb-6 mb-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                    <a
                        href="/contact-us"
                        className="group relative block overflow-hidden border border-white/5 bg-[#141416] p-8 transition-colors duration-300 hover:border-[#C8102E]/40 sm:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]/60"
                    >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_60%)]" />
                        <h2
                            className="mb-3 text-2xl uppercase leading-tight tracking-tight text-[#F3F1EC] sm:text-3xl"
                            style={{
                                fontWeight: 600,
                            }}
                        >
                            Service
                            <br />
                            Appointment
                        </h2>
                        <p className="mb-6 max-w-xs text-sm text-[#9A9A93]">
                            Schedule maintenance or repair at a Carworld service
                            center near you.
                        </p>
                        <span className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#C8102E]">
                            Schedule now
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </a>

                    <a
                        href="/service-promos"
                        className="group relative block overflow-hidden border border-white/5 bg-[#141416] p-8 transition-colors duration-300 hover:border-[#C8102E]/40 sm:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]/60"
                    >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_60%)]" />

                        <h2
                            className="mb-3 text-2xl uppercase leading-tight tracking-tight text-[#F3F1EC] sm:text-3xl"
                            style={{
                                fontWeight: 600,
                            }}
                        >
                            Service
                            <br />
                            Promos
                        </h2>
                        <p className="mb-6 max-w-xs text-sm text-[#9A9A93]">
                            Current maintenance packages, parts discounts, and
                            seasonal offers.
                        </p>
                        <span className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#C8102E]">
                            View promos
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

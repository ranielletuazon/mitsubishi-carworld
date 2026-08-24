import Header from "./components/Header";
import Footer from "./components/Footer";

// Swap in your actual imports once saved to src/assets/
import dealershipBuilding from "../assets/images/dealerBuilding.jpg";
import tritonMud from "../assets/images/mainBanner.jpg";
import lausGroupLogo from "../assets/images/lgc-black-logo.png";

export default function CompanyProfile() {
    return (
        <>
            <Header />
            <main className="w-full max-w-full bg-white">
                {/* Hero */}
                <section className="relative w-full h-[52vh] sm:h-[60vh] min-h-[380px] overflow-hidden">
                    <img
                        src={dealershipBuilding}
                        alt="Mitsubishi Carworld Pampanga dealership building"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-4 pb-12 sm:pb-16">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-5 h-0.5 bg-red-600" />
                            <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-500">
                                Company Profile
                            </span>
                            <span className="w-5 h-0.5 bg-red-600" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight max-w-2xl">
                            The Home of Mitsubishi
                        </h1>
                        <p className="text-sm text-white/70 mt-3 max-w-md">
                            Flagship company of the Laus Group of Companies,
                            serving the Philippines since 1978.
                        </p>
                    </div>
                </section>

                {/* Story section */}
                <section className="container mx-auto px-4 lg:px-6 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Copy */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-5 h-0.5 bg-red-600" />
                                <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-600">
                                    Since 1978
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight leading-tight mb-6">
                                Built on Trust,
                                <br />
                                Driven by Service
                            </h2>
                            <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
                                <p>
                                    Carworld, Inc., the flagship company of the{" "}
                                    <a
                                        href="https://lausgroup.com.ph"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-600 font-semibold hover:underline"
                                    >
                                        Laus Group of Companies
                                    </a>
                                    , was founded in 1978. Having been in the
                                    business for over 46 years now, Carworld has
                                    become a true home of Mitsubishi.
                                </p>
                                <p>
                                    Through years of excellent service,
                                    Carworld, Inc. has garnered not only various
                                    awards and recognitions, but an enormous
                                    respect in the automotive industry as well.
                                </p>
                                <p>
                                    Since its establishment, Carworld, Inc. has
                                    contributed in transforming its surrounding
                                    communities into robust business districts.
                                    Its stature is a manifestation of the
                                    economic stability and countryside
                                    development in the region. It has
                                    revolutionized the landscape of the local
                                    automotive industry by bringing to fore the
                                    popular Mitsubishi products, combined with
                                    the LausGroup's exceptional way of providing
                                    customer service.
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-red-600 hidden sm:block" />
                            <img
                                src={tritonMud}
                                alt="Mitsubishi Triton off-road"
                                className="relative w-full h-72 sm:h-96 object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Laus Group tie-in banner */}
                <section className="w-full bg-gray-50 border-y border-gray-200">
                    <div className="container mx-auto px-4 lg:px-6 py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                            <img
                                src={lausGroupLogo}
                                alt="Laus Group Logo"
                                className="h-16 sm:h-20 w-auto shrink-0"
                            />
                            <div>
                                <p className="text-[11px] font-bold tracking-[3px] uppercase text-red-600 mb-2">
                                    A Member of
                                </p>
                                <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
                                    The Laus Group of Companies
                                </h3>
                                <p className="text-sm text-gray-500 mt-2 max-w-md">
                                    A passion for cars and customer care, across
                                    every brand under the Laus Group.
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://lausgroup.com.ph"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden border-2 border-black px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase text-black transition-colors duration-300 hover:text-white inline-flex items-center gap-3 shrink-0"
                        >
                            <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative z-10">
                                Visit Laus Group
                            </span>
                            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>
                    </div>
                </section>

                {/* Closing CTA */}
                <section className="container mx-auto px-4 lg:px-6 py-16 sm:py-20 text-center">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight mb-3">
                        Experience the Carworld Difference
                    </h3>
                    <p className="text-sm text-gray-500 max-w-md mx-auto mb-8">
                        Explore our full lineup or find the dealership nearest
                        you.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href="/vehicles"
                            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-200 w-full sm:w-auto text-center"
                        >
                            Explore Vehicles
                        </a>
                        <a
                            href="/find-a-dealer"
                            className="border-2 border-gray-300 hover:border-black text-gray-700 hover:text-black px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 w-full sm:w-auto text-center"
                        >
                            Find a Dealer
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

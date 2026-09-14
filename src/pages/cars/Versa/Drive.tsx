import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IMG_BASE = "/cars/versa/images";

export default function VersaDrive() {
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

                {/* Hero — image with overlaid title */}
                <section className="relative w-full min-h-[380px] sm:min-h-[440px] overflow-hidden bg-black">
                    <img
                        src={`${IMG_BASE}/versa-poster.webp`}
                        alt="Mitsubishi Versa Van driving on a highway"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-16">
                        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
                            Succeed Further
                        </h1>
                        <p className="text-base sm:text-xl font-bold text-white max-w-2xl">
                            Mitsubishi Motors Philippines Reintroduces the
                            Iconic Versa Van
                        </p>
                    </div>
                </section>

                {/* Intro copy — text left, image right */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                        <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
                            <p>
                                Mitsubishi Motors Philippines Corporation (MMPC)
                                proudly announces the introduction of the new
                                Mitsubishi Versa Van, a much-awaited return of
                                an iconic nameplate that has long been
                                associated with versatility, durability, and
                                dependable performance. With its return, Versa
                                Van is once again set to become a reliable
                                partner for organizations and businesses that
                                move people every day.
                            </p>
                            <p>
                                The Mitsubishi Versa Van traces its roots to the
                                legendary Mitsubishi Delica, a van platform
                                engineered to transport both people and cargo
                                with ease. First introduced to the Philippines
                                in 1987 as the L300 cab chassis, the original
                                Versa Van version quickly became a familiar
                                sight on roads and trusted companion of Filipino
                                families. Decades later, the Versa Van returns,
                                reengineered to meet today's passenger transport
                                needs while staying true to the values that made
                                it iconic.
                            </p>
                            <p>
                                Designed primarily as a people-mover, the new
                                Mitsubishi Versa Van is ideal for small to
                                medium-sized businesses that require reliable
                                and efficient passenger transportation. These
                                include transport operators, school service
                                providers, and companies offering employee or
                                guest shuttle services, among others. Its
                                spacious interior, practical layout and proven
                                diesel performance make it a smart solution for
                                daily business operations.
                            </p>
                        </div>

                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                                src={`${IMG_BASE}/versa-poster.webp`}
                                alt="Mitsubishi Versa Van passing through a highway toll gate"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Trusted People-Mover — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/drive1.webp`}
                                alt="Mitsubishi Versa Van driver's view of the dashboard while driving"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md space-y-4">
                                <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase tracking-tight">
                                    A Trusted People-Mover To Support Growing
                                    Enterprises
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Powering the Versa Van is a 2.5-liter diesel
                                    engine that delivers 129 PS/3,200 rpm power
                                    and 356 N-m/1,400 to 2,000 rpm torque.
                                    Paired with a 5-speed manual transmission,
                                    the new Versa Van is ideal for frequent
                                    stop-and-go driving and fully loaded
                                    passenger transport. It also features a
                                    15-seater capacity (including the driver),
                                    allowing businesses to transport more
                                    passengers efficiently while maintaining
                                    comfort and accessibility.
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Built with business practicality in mind,
                                    the Mitsubishi Versa Van offers several
                                    advantages that enhance daily operations.
                                    Easier maintenance access is made possible
                                    through thoughtful placement of key
                                    maintenance components, helping reduce
                                    service time and downtime. Apart from the
                                    owner/driver convenience, the van is also
                                    packed with passenger-friendly features. It
                                    provides excellent roominess and
                                    accessibility, with seats and steering wheel
                                    designed for easier adjustment, as well as
                                    foldable seats that enable smoother
                                    passenger movement and entry/exit routes.
                                    Passenger comfort is also further enhanced
                                    by the dedicated air outlets mounted on the
                                    ceiling for each seat row, ensuring
                                    consistent airflow throughout the cabin.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Luggage / pricing / closing — text left, image right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md space-y-4">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    The Versa Van also excels in luggage
                                    capacity, offering a generous space for
                                    cargo. Its larger rear door opening allows
                                    easier loading and unloading of luggage
                                    which could be an important benefit for
                                    tourism and shuttle operations.
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    The Mitsubishi Versa Van is available in GLX
                                    MT variant priced at ₱1,649,000. Colors
                                    available are Silver Metallic and White
                                    Solid.
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    With the return of the Mitsubishi Versa Van,
                                    MMPC reaffirms its commitment to empowering
                                    Filipino entrepreneurs and businesses with
                                    vehicles that are built to last and designed
                                    to perform. Backed by Mitsubishi Motors'
                                    legacy of durability and reliability, the
                                    new Versa Van is ready to once again become
                                    a trusted partner on the road, supporting
                                    businesses toward growth and success.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/drive3.webp`}
                                alt="Mitsubishi Versa Van interior passenger seating"
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

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IMG_BASE = "/cars/triton/images";

export default function TritonDrive() {
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

                {/* Section title */}
                <section className="w-full bg-black py-10 sm:py-12 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        THE DRIVE
                    </h1>
                    <p className="text-sm text-white/60 max-w-2xl mx-auto">
                        Elevate your driving experience with strength and
                        precision.
                    </p>
                </section>

                {/* Super Select 4WD-II System — image background, text right (desktop only) */}
                <section className="relative w-full h-[220px] sm:h-[320px] lg:min-h-[600px] bg-cover bg-center bg-gray-900">
                    <img
                        src={`${IMG_BASE}/drive1.png`}
                        alt="Mitsubishi Triton driving through a desert canyon road"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 hidden lg:block" />

                    <div className="relative z-10 h-full hidden lg:flex items-center justify-end px-6 sm:px-10 lg:px-16">
                        <div className="max-w-md">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-white/70 mb-3">
                                Super Select 4WD-II System
                            </p>
                            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                Exceptional Control Across Various Conditions
                            </h2>
                            <p className="text-sm text-white/85 leading-relaxed">
                                The Triton conquers diverse terrains with its
                                advanced Super Select 4WD-II system, precisely
                                managing power and braking for optimum stability
                                and traction on any surface. Easily switch
                                between settings using the console dial—2H for
                                regular roads, 4H for rough terrain (adjustable
                                up to 100km/h), and when faced with challenging
                                conditions or off-road adventures, smoothly
                                transition to 4HLc or 4Llc settings by stopping
                                the vehicle.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Off-Road Mode — image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/drive2.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    Off-Road Mode
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Improved traction precisely when required
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    Enhance the Triton’s traction by using the
                                    Off-Road Selector switch. Simply press the
                                    button until the desired mode is displayed
                                    on the Multi-Information Display. Select
                                    from options such as Gravel, Mud, Sand, or
                                    Rock for optimal performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Off-Road Mode — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/drive3.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    All-New Powerful Engine
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    Unleash power with the 2.4-Liter Direct
                                    Injection Diesel engine, featuring Two-Stage
                                    Turbo for Euro 5 or Turbocharged Direct
                                    Injection for Euro 4.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Off-Road Mode — image right, text left */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-2">
                            <img
                                src={`${IMG_BASE}/drive4.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-1">
                            <div className="max-w-md">
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Dominance redefined
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    Super powerful engine lets you experience a
                                    maximum power of 204 ps at 3,500 rpm and
                                    formidable torque ranging from 470 Nm at
                                    1,500 rpm to 2,750 rpm.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Off-Road Mode — image left, text right */}
                <section className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[480px] overflow-hidden lg:order-1">
                            <img
                                src={`${IMG_BASE}/drive5.png`}
                                alt="Mitsubishi Montero Sport driving through desert dunes"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 lg:order-2">
                            <div className="max-w-md">
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    IMPROVED SUSPENSION DESIGN
                                </p>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-4">
                                    Supreme Comfort No Matter The Terrain
                                </h2>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    Thoroughly tested for enhanced strength and
                                    reduced weight. The innovative suspension
                                    design, coupled with a state-of-the-art
                                    shock absorption system, guarantees
                                    exceptional comfort, even in the most
                                    challenging terrains.
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
                                    src={`${IMG_BASE}/drive6.png`}
                                    alt="Mitsubishi Montero Sport driving on a rocky mountain trail"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                HILL DECENT CONTROL
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Navigate steep slopes with confidence
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Hill Descent Control ensures a steady speed on
                                descents by automatically applying the brakes,
                                allowing you to concentrate on steering.
                            </p>
                        </div>

                        <div>
                            <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                                <img
                                    src={`${IMG_BASE}/drive7.png`}
                                    alt="Mitsubishi Montero Sport 8-speed automatic gear shifter"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                HILL START ASSIST
                            </p>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                Facilitate your ascent with added ease
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Hill Start Assist simplifies launching on steep
                                inclines, preventing the vehicle from rolling
                                backward.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Drive Mode System — 4-item grid */}
                <section className="w-full bg-white py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                                Discover the Functionality of the Drive Mode
                                System
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                            <div>
                                <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                    <img
                                        src={`${IMG_BASE}/drive1.png`}
                                        alt="Triton drive mode selector set to 2H"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                    Normal Road Conditions
                                </p>
                                <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                    2H — 2WD High Range
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    For a smooth, economic performance and fuel
                                    efficiency.
                                </p>
                            </div>

                            <div>
                                <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                    <img
                                        src={`${IMG_BASE}/drive8.png`}
                                        alt="Triton drive mode selector set to 4H"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                    Rough Roads & Hazardous Conditions
                                </p>
                                <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                    4H — 4WD Full Time
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    For more stability when towing or added
                                    traction in wet slippery conditions.
                                </p>
                            </div>

                            <div>
                                <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                    <img
                                        src={`${IMG_BASE}/drive9.png`}
                                        alt="Triton drive mode selector set to 4HLc"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                    Rugged Terrain with Low-Grip Surface
                                </p>
                                <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                    4HLc — 4WD High Range with Centre
                                    Differential Locked
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    For evenly distributed power to the wheels
                                    and an overall better grip.
                                </p>
                            </div>

                            <div>
                                <div className="aspect-[4/3] bg-gray-100 overflow-hidden mb-5">
                                    <img
                                        src={`${IMG_BASE}/drive2.png`}
                                        alt="Triton drive mode selector set to 4LLc"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                                    Steep Hills, Mud, Sand & Deep Snow
                                </p>
                                <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-2">
                                    4LLc — 4WD Low Range with Centre
                                    Differential Locked
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    For better turning power and maximum
                                    traction on all terrain.
                                </p>
                            </div>
                        </div>

                        {/* Disclaimer / legal notes */}
                        <div className="mt-8 lg:mt-10 lg:px-8 px-4 sm:mt-16 border-t border-gray-200 pt-8 max-w-3xl mx-auto">
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                Equipment may vary by market. Please consult
                                your local Mitsubishi Motors dealer/distributor
                                for details.
                            </p>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-2">
                                Important
                            </p>
                            <p className="text-xs text-gray-500 leading-relaxed mb-3">
                                Note: in models with SS4-II, OFF ROAD MODE is
                                only available in the 4HLc and 4LLc settings.
                                *In models with SS4-II, the ROCK setting is only
                                available in the 4HLc and 4LLc settings.
                            </p>
                            <p className="text-xs text-gray-500 leading-relaxed mb-3">
                                Note: on vehicles with M/T, set the drive mode
                                selector to "4LLc" position. When using the Hill
                                Descent Control while driving except in "4LLc"
                                position, the engine may stall. As a result, it
                                could lose the brake effectiveness or lock the
                                tyres, which may lead to a serious accident.
                            </p>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Hill Descent Control [HDC] is not a substitute
                                for safe driving. Never rely solely on this
                                function while driving on steep roads. When
                                driving on slippery roads such as muddy, icy or
                                unpaved road, your vehicle will not allow you to
                                stay at a certain low speed, which may lead to a
                                serious accident. Please see the owner's manual
                                for additional information.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

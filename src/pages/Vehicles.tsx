import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import heroVehicle from "../assets/images/hero_vehicle.webp";
import SEO from "./components/SEO";

interface Vehicle {
    id: number;
    name: string;
    variant: string;
    price: number;
    category: string;
    image: string;
    slug: string;
    excerpt: string;
}

const API_URL =
    "https://mitsubishicarworld.com.ph/carworld_api/get_vehicles.php";

const vehicleImages = import.meta.glob("../assets/cars/images/*.png", {
    eager: true,
    import: "default",
}) as Record<string, string>;

const filters = [
    { label: "All Models", value: "all" },
    { label: "SUV", value: "suv" },
    { label: "MPV", value: "mpv" },
    { label: "Pick-up", value: "pickup" },
    { label: "Sedan", value: "sedan" },
    { label: "Van", value: "van" },
];

const categoryStyles: Record<string, string> = {
    suv: "border-[#8C86D8]/30 text-[#5B54B5] bg-[#8C86D8]/10",
    mpv: "border-[#4FBE99]/30 text-[#0F8E6B] bg-[#4FBE99]/10",
    pickup: "border-[#E0A552]/30 text-[#9A6A1E] bg-[#E0A552]/10",
    sedan: "border-[#E0616B]/30 text-[#B23A45] bg-[#E0616B]/10",
    van: "border-[#B8B29C]/30 text-[#6E6A56] bg-[#B8B29C]/10",
};

const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
        maximumFractionDigits: 0,
    }).format(price);

export default function Vehicles() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load vehicles.");
                return res.json();
            })
            .then((data: Vehicle[]) => {
                setVehicles(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const filtered = (
        activeFilter === "all"
            ? vehicles
            : vehicles.filter((v) => v.category === activeFilter)
    ).sort((a, b) => a.price - b.price);

    return (
        <main className="w-full max-w-full bg-white">
            <SEO
                title="Vehicles"
                description="Explore the full Mitsubishi lineup at Carworld — Mirage, Xpander, Triton, Montero Sport, Strada, and more."
                url="/vehicles"
            />
            <Header />

            {/* Hero */}
            <section className="relative w-full overflow-hidden px-4 py-20 sm:py-28">
                <img
                    src={heroVehicle}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Light scrim so text stays legible over the photo */}
                <div className="absolute inset-0 bg-white/85" />

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, #000 0, #000 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, #000 0, #000 1px, transparent 1px, transparent 64px)",
                    }}
                />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[100px]" />

                <div className="relative mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl uppercase leading-[0.95] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl font-black">
                        Model
                        <br />
                        <span className="text-red-600">Lineup</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-md text-sm text-gray-800">
                        Whatever you're looking for, we're sure to have a
                        Mitsubishi vehicle that's right for you.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <div className="w-full border-b border-gray-300 px-4">
                <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-3 py-5 lg:justify-start">
                    {filters.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setActiveFilter(f.value)}
                            className={`relative pb-2 text-xs font-bold uppercase tracking-[2px] transition-colors duration-200 cursor-pointer ${
                                activeFilter === f.value
                                    ? "text-gray-900"
                                    : "text-gray-600 hover:text-gray-700"
                            }`}
                        >
                            {f.label}
                            {activeFilter === f.value && (
                                <span className="absolute -bottom-px left-0 h-[2px] w-full bg-red-600" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Gallery */}
            <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
                {loading && (
                    <div className="py-24 text-center text-sm font-bold uppercase tracking-[2px] text-gray-400">
                        Loading inventory…
                    </div>
                )}

                {error && (
                    <div className="py-24 text-center text-sm text-red-600">
                        Failed to load, try again later.
                    </div>
                )}

                {!loading && !error && filtered.length === 0 && (
                    <div className="py-24 text-center text-sm font-bold uppercase tracking-[2px] text-gray-400">
                        No models in this category yet.
                    </div>
                )}

                {!loading && !error && filtered.length > 0 && (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
                        {filtered.map((vehicle) => {
                            const imageSrc =
                                vehicleImages[
                                    `../assets/cars/images/${vehicle.image}.png`
                                ];

                            return (
                                <a
                                    key={vehicle.slug}
                                    href={`/vehicles/${vehicle.slug}`}
                                    className="group relative block overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:border-red-600/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                                >
                                    {/* Stage */}
                                    <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gray-50 sm:h-80">
                                        <div
                                            className="pointer-events-none absolute inset-0 opacity-[0.04]"
                                            style={{
                                                backgroundImage:
                                                    "repeating-linear-gradient(90deg, #000 0, #000 1px, transparent 1px, transparent 32px)",
                                            }}
                                        />

                                        <span
                                            className={`absolute right-4 top-4 z-10 border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1.5px] ${
                                                categoryStyles[
                                                    vehicle.category
                                                ] ??
                                                "border-gray-200 bg-gray-100 text-gray-500"
                                            }`}
                                        >
                                            {vehicle.category}
                                        </span>

                                        {imageSrc ? (
                                            <img
                                                src={imageSrc}
                                                alt={`${vehicle.name} side view`}
                                                className="relative z-10 max-h-48 w-full object-contain px-8 transition-transform duration-500 ease-out group-hover:scale-[1.06] group-hover:-translate-x-2 sm:max-h-56"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="relative z-10 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                                                Image not found
                                            </div>
                                        )}

                                        <div className="absolute bottom-8 h-2 w-2/3 rounded-full bg-black/10 blur-md sm:bottom-10" />
                                    </div>

                                    {/* Details panel */}
                                    <div className="relative border-t border-gray-100 px-6 py-6">
                                        <p className="mb-1 text-[10px] font-bold uppercase tracking-[2px] text-gray-600">
                                            Mitsubishi
                                        </p>
                                        <h3 className="mb-1.5 text-xl font-black uppercase leading-none tracking-tight text-gray-900">
                                            {vehicle.name}
                                        </h3>

                                        <div className="flex items-end justify-between">
                                            <div>
                                                <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wider text-gray-600">
                                                    Starting at
                                                </span>
                                                <span className="text-xl font-black text-gray-900">
                                                    {formatPrice(vehicle.price)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}

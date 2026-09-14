import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import heroVehicle from "../assets/images/hero_vehicle.webp";

interface Vehicle {
    id: number;
    name: string;
    variant: string;
    price: number;
    category: string;
    image: string;
    slug: string;
    // Addition
    excerpt: string;
}

const API_URL = "http://localhost/carworld_api/get_vehicles.php";
// TODO before deploy: this must become an env var
// (e.g. import.meta.env.VITE_API_URL) — localhost will not resolve in production.

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

// Dark-stage palette — muted jewel tones on a near-black chip, not the
// pastel-on-white treatment from the previous version.
const categoryStyles: Record<string, string> = {
    suv: "border-[#8C86D8]/40 text-[#B7B2EE] bg-[#8C86D8]/10",
    mpv: "border-[#4FBE99]/40 text-[#7FD9BB] bg-[#4FBE99]/10",
    pickup: "border-[#E0A552]/40 text-[#F0C182] bg-[#E0A552]/10",
    sedan: "border-[#E0616B]/40 text-[#F09AA1] bg-[#E0616B]/10",
    van: "border-[#B8B29C]/40 text-[#D6D2C2] bg-[#B8B29C]/10",
};

const FONT_DISPLAY = "'Oswald', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";

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

    const filtered =
        activeFilter === "all"
            ? vehicles
            : vehicles.filter((v) => v.category === activeFilter);

    return (
        <main className="w-full max-w-full bg-[#0B0B0C]">
            <Header />

            {/* Hero — showroom floor entrance */}
            {/* Hero — showroom floor entrance */}
            <section className="relative w-full overflow-hidden px-4 py-20 sm:py-28">
                {/* Background photo */}
                <img
                    src={heroVehicle}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark scrim so text stays legible over the photo */}
                <div className="absolute inset-0 bg-[#0B0B0C]/80" />

                {/* faint blueprint grid texture */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 64px)",
                    }}
                />
                {/* single restrained red glow behind the headline */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8102E]/10 blur-[100px]" />

                <div className="relative mx-auto max-w-3xl text-center">
                    {/* <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-[#C8102E]" />
                        <span
                            className="text-[11px] uppercase tracking-[4px] text-[#C8102E]"
                            style={{ fontFamily: FONT_MONO }}
                        >
                            Mitsubishi Carworld
                        </span>
                        <span className="h-px w-8 bg-[#C8102E]" />
                    </div> */}

                    <h1
                        className="text-4xl uppercase leading-[0.95] tracking-tight text-[#F3F1EC] sm:text-5xl lg:text-6xl"
                        style={{ fontFamily: FONT_DISPLAY, fontWeight: 700 }}
                    >
                        Model
                        <br />
                        <span className="text-[#C8102E]">Lineup</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-md text-sm text-[#9A9A93]">
                        Whatever you're looking for, we're sure to have a
                        Mitsubishi vehicle that's right for you.
                    </p>
                </div>
            </section>

            {/* Filters — floor directory, not pill buttons */}
            <div className="w-full border-b border-white/10 bg-[#0B0B0C] px-4">
                <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-3 py-5 lg:justify-start">
                    {filters.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setActiveFilter(f.value)}
                            className={`relative pb-2 text-xs uppercase tracking-[2px] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]/60 ${
                                activeFilter === f.value
                                    ? "text-[#F3F1EC]"
                                    : "text-[#9A9A93] hover:text-[#F3F1EC]"
                            }`}
                            style={{ fontFamily: FONT_MONO }}
                        >
                            {f.label}
                            {activeFilter === f.value && (
                                <span className="absolute -bottom-px left-0 h-[2px] w-full bg-[#C8102E]" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Gallery — 2-column showroom grid */}
            <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
                {loading && (
                    <div
                        className="py-24 text-center text-sm uppercase tracking-[2px] text-[#9A9A93]"
                        style={{ fontFamily: FONT_MONO }}
                    >
                        Loading inventory…
                    </div>
                )}

                {error && (
                    <div className="py-24 text-center text-sm text-[#E0616B]">
                        Failed to load, try again later.
                    </div>
                )}

                {!loading && !error && filtered.length === 0 && (
                    <div
                        className="py-24 text-center text-sm uppercase tracking-[2px] text-[#9A9A93]"
                        style={{ fontFamily: FONT_MONO }}
                    >
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
                                    className="group relative block overflow-hidden border border-white/5 bg-[#141416] transition-colors duration-300 hover:border-[#C8102E]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]/60"
                                >
                                    {/* Stage */}
                                    <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#141416] sm:h-80">
                                        {/* studio light */}
                                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.08),transparent_65%)]" />
                                        {/* faint stage grid */}
                                        <div
                                            className="pointer-events-none absolute inset-0 opacity-[0.05]"
                                            style={{
                                                backgroundImage:
                                                    "repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 32px)",
                                            }}
                                        />

                                        {/* category chip */}
                                        <span
                                            className={`absolute right-4 top-4 z-10 border px-2.5 py-1 text-[10px] uppercase tracking-[1.5px] ${
                                                categoryStyles[
                                                    vehicle.category
                                                ] ??
                                                "border-white/20 bg-white/5 text-[#D6D2C2]"
                                            }`}
                                            style={{ fontFamily: FONT_MONO }}
                                        >
                                            {vehicle.category}
                                        </span>

                                        {imageSrc ? (
                                            <img
                                                src={imageSrc}
                                                alt={`${vehicle.name} side view`}
                                                className="relative z-10 max-h-48 w-full object-contain px-8 transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.07] motion-safe:group-hover:-translate-x-2 sm:max-h-56"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div
                                                className="relative z-10 text-[11px] uppercase tracking-widest text-[#6B6B66]"
                                                style={{
                                                    fontFamily: FONT_MONO,
                                                }}
                                            >
                                                Image not found
                                            </div>
                                        )}

                                        {/* ground shadow */}
                                        <div className="absolute bottom-8 h-2 w-2/3 rounded-full bg-black/40 blur-md sm:bottom-10" />
                                    </div>

                                    {/* Details panel */}
                                    <div className="relative border-t border-white/5 px-6 py-6">
                                        <p
                                            className="mb-1 text-[10px] uppercase tracking-[2px] text-[#6B6B66]"
                                            style={{ fontFamily: FONT_MONO }}
                                        >
                                            Mitsubishi
                                        </p>
                                        <h3
                                            className="mb-1.5 text-xl uppercase leading-none tracking-tight text-[#F3F1EC]"
                                            style={{
                                                fontFamily: FONT_DISPLAY,
                                                fontWeight: 600,
                                            }}
                                        >
                                            {vehicle.name}
                                        </h3>

                                        <div className="flex items-end justify-between">
                                            <div>
                                                <span
                                                    className="mb-0.5 block text-[10px] uppercase tracking-wider text-[#6B6B66]"
                                                    style={{
                                                        fontFamily: FONT_MONO,
                                                    }}
                                                >
                                                    Starting at
                                                </span>
                                                <span
                                                    className="text-xl font-medium text-[#F3F1EC]"
                                                    style={{
                                                        fontFamily: FONT_MONO,
                                                    }}
                                                >
                                                    {formatPrice(vehicle.price)}
                                                </span>
                                            </div>

                                            {/* <span
                                                className="flex items-center gap-1 text-[11px] uppercase tracking-widest text-[#C8102E] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                style={{
                                                    fontFamily: FONT_MONO,
                                                }}
                                            >
                                                View
                                                <span className="transition-transform duration-300 motion-safe:group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </span> */}
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

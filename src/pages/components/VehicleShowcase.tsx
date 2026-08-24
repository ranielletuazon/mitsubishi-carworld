import { useState, useEffect } from "react";

interface Vehicle {
    id: number;
    name: string;
    variant: string;
    price: number;
    category: string;
    image: string;
    slug: string;
}

const API_URL = "https://mitsubishicarworld.com.ph/api/get_vehicles.php";
// TODO before deploy: move to an env var (import.meta.env.VITE_API_URL)

// NOTE: confirm this matches your real folder — Vehicles.tsx page currently
// uses "../assets/cars/images/", this file previously used "../../assets/images/".
// Pick one location and keep every component consistent with it.
const vehicleImages = import.meta.glob("../../assets/images/*.png", {
    eager: true,
    import: "default",
}) as Record<string, string>;

const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
        maximumFractionDigits: 0,
    }).format(price);

interface VehicleShowcaseProps {
    title?: string;
    limit?: number;
}

export default function VehicleShowcase({
    title = "Explore the Line Up",
    limit = 4,
}: VehicleShowcaseProps) {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load vehicles.");
                return res.json();
            })
            .then((data: Vehicle[]) => {
                setVehicles(data.slice(0, limit));
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [limit]);

    return (
        <section className="w-full bg-white mt-24 pb-20">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Header */}
                <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-600">
                        Mitsubishi Carworld
                    </span>
                </div>
                <h2 className="text-3xl font-black text-gray-900 text-center uppercase tracking-tight mb-12">
                    {title}
                </h2>

                {/* States */}
                {loading && (
                    <div className="py-16 text-center text-gray-400 text-sm">
                        Loading vehicles...
                    </div>
                )}

                {error && (
                    <div className="py-16 text-center text-red-600 text-sm">
                        {error} Please check your connection and try again.
                    </div>
                )}

                {/* Featured grid */}
                {!loading && !error && vehicles.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {vehicles.map((vehicle) => {
                            const imageSrc =
                                vehicleImages[
                                    `../../assets/images/${vehicle.image}.png`
                                ];

                            return (
                                <a
                                    key={vehicle.slug}
                                    href={`/vehicles/${vehicle.slug}`}
                                    className="group flex flex-col bg-white border border-gray-200 hover:border-red-600/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative bg-gray-50 flex items-end justify-center h-44 px-4 pt-6 pb-2 overflow-hidden">
                                        {imageSrc ? (
                                            <img
                                                src={imageSrc}
                                                alt={`${vehicle.name} side view`}
                                                className="w-full max-h-36 object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:-translate-x-1.5"
                                            />
                                        ) : (
                                            <div className="text-[10px] uppercase tracking-widest text-gray-400">
                                                Image not found
                                            </div>
                                        )}
                                    </div>

                                    {/* Body */}
                                    <div className="flex flex-col gap-2.5 px-5 py-4 border-t border-gray-100 flex-1">
                                        <p className="text-base font-medium text-gray-900 leading-snug">
                                            {vehicle.name}
                                        </p>

                                        <div className="flex items-baseline gap-1.5 mt-auto pt-1">
                                            <span className="text-[10px] uppercase tracking-wider text-gray-400">
                                                From
                                            </span>
                                            <span className="text-lg font-medium text-gray-900">
                                                {formatPrice(vehicle.price)}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1 text-xs font-medium text-red-600 uppercase tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <span>View More</span>
                                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                )}

                {/* View full lineup CTA */}
                <div className="flex items-center justify-center mt-14">
                    <a
                        href="/vehicles"
                        className="group relative overflow-hidden border-2 border-black px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase text-black transition-colors duration-300 hover:text-white inline-flex items-center gap-3"
                    >
                        <span className="absolute inset-0 bg-black translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                        <span className="relative z-10">View Full Lineup</span>
                        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

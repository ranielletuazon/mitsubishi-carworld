import { useNavigate } from "react-router-dom";
import { useState } from "react";

import xpander from "../assets/rn-bmc-nav-newxpander.png";
import triton from "../assets/Triton-Side.png";
import versavan from "../assets/versa-van.png";
import l300 from "../assets/W50_L300.png";
import montero from "../assets/W85_Pajero.png";
import outlander from "../assets/X3N-0-GT-WhitePearl-Side.webp";
import xforce from "../assets/xforce-Side.png";
import mirageG4 from "../assets/new-mirage-g4-P19_MirageG4.png";

type Category = "all" | "suv" | "pickup" | "sedan" | "van";

interface Vehicle {
    name: string;
    variant: string;
    price: string;
    category: Exclude<Category, "all">;
    image: string;
    slug: string;
}

const vehicles: Vehicle[] = [
    {
        name: "MIRAGE G4",
        variant: "GLS 1.2 CVT · Sedan",
        price: "₱711,000",
        category: "sedan",
        image: mirageG4,
        slug: "mirage-g4",
    },
    {
        name: "XPANDER",
        variant: "GLS Sport 1.5 AT · 7-seater",
        price: "₱1,068,000",
        category: "suv",
        image: xpander,
        slug: "xpander",
    },
    {
        name: "TRITON",
        variant: "Adventure 4x4 AT · Double Cab",
        price: "₱1,134,000",
        category: "pickup",
        image: triton,
        slug: "triton",
    },
    {
        name: "VERSA",
        variant: "GL 2.2 MT · Passenger",
        price: "₱1,645,000",
        category: "van",
        image: versavan,
        slug: "versa-van",
    },
    {
        name: "L300",
        variant: "Cab & Chassis 2.2 MT",
        price: "₱813,000",
        category: "van",
        image: l300,
        slug: "l300",
    },
    {
        name: "MONTERO",
        variant: "GLS Premium 2.4 4WD AT",
        price: "₱1,568,000",
        category: "suv",
        image: montero,
        slug: "montero-sport",
    },
    {
        name: "DESTINATOR",
        variant: "GT 2.4 MIVEC CVT · 7-seater",
        price: "₱1,389,000",
        category: "suv",
        image: outlander,
        slug: "outlander",
    },
    {
        name: "XFORCE",
        variant: "Ultimate 1.5T CVT · Crossover",
        price: "₱1,367,000",
        category: "suv",
        image: xforce,
        slug: "xforce",
    },
];

const filters: { label: string; value: Category }[] = [
    { label: "All Models", value: "all" },
    { label: "SUV", value: "suv" },
    { label: "Pick-up", value: "pickup" },
    { label: "Sedan", value: "sedan" },
    { label: "Van / Utility", value: "van" },
];

// Uncomment all for display categories
// const categoryStyles: Record<Exclude<Category, "all">, string> = {
//     suv: "bg-[#EEEDFE] text-[#3C3489]",
//     mpv: "bg-[#E1F5EE] text-[#085041]",
//     pickup: "bg-[#FAEEDA] text-[#633806]",
//     sedan: "bg-[#FCEBEB] text-[#791F1F]",
//     van: "bg-[#F1EFE8] text-[#444441]",
// };

// const categoryLabels: Record<Exclude<Category, "all">, string> = {
//     suv: "SUV",
//     mpv: "MPV",
//     pickup: "Pick-up",
//     sedan: "Sedan",
//     van: "Utility",
// };

interface VehicleCardProps {
    vehicle: Vehicle;
    onClick: () => void;
}

function VehicleCard({ vehicle, onClick }: VehicleCardProps) {
    return (
        <div
            onClick={onClick}
            className="group flex flex-col bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200"
        >
            {/* Image */}
            <div className="relative bg-gray-50 flex items-end justify-center h-44 px-4 pt-6 pb-2 overflow-hidden">
                {/* Uncomment to display categories */}
                {/* <span
                    className={`absolute top-3 left-3 text-[10px] font-medium tracking-[1.5px] uppercase px-2.5 py-1 rounded ${categoryStyles[vehicle.category]}`}
                >
                    {categoryLabels[vehicle.category]}
                </span> */}
                <img
                    src={vehicle.image}
                    alt={`${vehicle.name} side view`}
                    className="w-full max-h-36 object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:-translate-x-1.5"
                />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-2.5 px-5 py-4 border-t border-gray-100 flex-1">
                <div>
                    <p className="text-base font-medium text-gray-900 leading-snug">
                        {vehicle.name}
                    </p>
                    {/* <p className="text-xs text-gray-500 mt-0.5">
                        {vehicle.variant}
                    </p> */}
                </div>

                <div className="flex items-baseline gap-1.5 mt-auto pt-1">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400">
                        From
                    </span>
                    <span className="text-lg font-medium text-gray-900">
                        {vehicle.price}
                    </span>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1 text-xs font-medium text-red-600 uppercase tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>View Details</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                    </span>
                </div>
            </div>
        </div>
    );
}

interface VehicleShowcaseProps {
    title?: string;
    subtitle?: string;
}

export default function VehicleShowcase({
    title = "Explore the Line Up",
    // subtitle = "Find the Mitsubishi that fits your life",
}: VehicleShowcaseProps) {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState<Category>("all");

    const filtered =
        activeFilter === "all"
            ? vehicles
            : vehicles.filter((v) => v.category === activeFilter);

    return (
        <>
            <section className="w-full py-10 bg-white">
                {/* Header */}
                <div className="container mx-auto px-4 lg:px-6">
                    <h2 className="text-3xl font-black text-gray-900 text-center uppercase tracking-tight mb-2">
                        {title}
                    </h2>
                    {/* <p className="text-sm text-gray-500 text-center mb-8">
                        {subtitle}
                    </p> */}

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {filters.map((f) => (
                            <button
                                key={f.value}
                                onClick={() => setActiveFilter(f.value)}
                                className={`text-xs font-medium tracking-wider uppercase px-4 py-2 border transition-all duration-200
                                ${
                                    activeFilter === f.value
                                        ? "bg-red-600 border-red-600 text-white"
                                        : "bg-transparent border-gray-300 text-gray-500 hover:border-red-600 hover:text-red-600"
                                }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="container mx-auto border-t border-l border-gray-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filtered.map((vehicle) => (
                            <div
                                key={vehicle.slug}
                                className="border-b border-r border-gray-200"
                            >
                                <VehicleCard
                                    vehicle={vehicle}
                                    onClick={() =>
                                        navigate(`/vehicles/${vehicle.slug}`)
                                    }
                                />
                            </div>
                        ))}

                        {filtered.length === 0 && (
                            <div className="col-span-full py-16 text-center text-gray-400 text-sm">
                                No models found in this category.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

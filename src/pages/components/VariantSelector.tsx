import { useState } from "react";

export interface Variant {
    name: string;
    price: number;
    image: string;
    imageAlt: string;
    specs: string[];
    keyFeatures: string[];
}

interface VariantSelectorProps {
    variants: Variant[];
    brochureHref: string;
}

const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
        maximumFractionDigits: 0,
    }).format(price);

export default function VariantSelector({
    variants,
    brochureHref,
}: VariantSelectorProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = variants[activeIndex];

    return (
        <section className="w-full bg-white py-16 sm:py-20">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
                        Choose A Variant
                    </h2>
                </div>

                <div className="max-w-5xl lg:max-w-6xl mx-auto border border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
                        <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[700px] bg-gray-50 overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-200">
                            <img
                                key={active.image}
                                src={active.image}
                                alt={active.imageAlt}
                                className="w-full h-full lg:object-contain object-cover object-top"
                            />
                        </div>

                        <div className="p-6 sm:p-8 flex flex-col">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {variants.map((variant, i) => (
                                    <button
                                        key={variant.name}
                                        onClick={() => setActiveIndex(i)}
                                        className={`text-xs font-bold uppercase tracking-widest px-5 py-2.5 border transition-all duration-200 cursor-pointer ${
                                            activeIndex === i
                                                ? "bg-red-600 border-red-600 text-white"
                                                : "bg-white border-gray-300 text-gray-600 hover:border-red-600 hover:text-red-600"
                                        }`}
                                    >
                                        {variant.name}
                                    </button>
                                ))}
                            </div>

                            <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6 pb-6 border-b border-gray-100">
                                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                                    {active.name}
                                </h3>
                                <div className="text-right">
                                    <span className="block text-[10px] uppercase tracking-wider text-gray-400">
                                        From
                                    </span>
                                    <span className="text-xl font-black text-gray-900">
                                        {formatPrice(active.price)}
                                    </span>
                                </div>
                            </div>

                            {active.specs.length > 0 && (
                                <div className="mb-6">
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                        Specifications
                                    </p>
                                    <ul className="space-y-2">
                                        {active.specs.map((spec) => (
                                            <li
                                                key={spec}
                                                className="flex items-start gap-2 text-sm text-gray-700"
                                            >
                                                <span className="text-red-600 mt-0.5 shrink-0">
                                                    •
                                                </span>
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {active.keyFeatures.length > 0 && (
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                        Key Features
                                    </p>
                                    <ul className="space-y-2">
                                        {active.keyFeatures.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed"
                                            >
                                                <span className="text-red-600 mt-0.5 shrink-0">
                                                    •
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-xs text-gray-400 mb-4">
                        For full details and specifications, please download the
                        brochure.
                    </p>
                    <a
                        href={brochureHref}
                        className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 transition-colors duration-200"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>
        </section>
    );
}

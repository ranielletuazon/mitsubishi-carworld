import Header from "./components/Header";
import Footer from "./components/Footer";

interface PriceEntry {
    year: string;
    variant: string;
    price: number;
}

interface PriceGroup {
    model: string;
    entries: PriceEntry[];
}

const priceGroups: PriceGroup[] = [
    {
        model: "Mirage",
        entries: [
            { year: "2024", variant: "Mirage GLX 1.2G MT", price: 711000 },
            { year: "2024", variant: "Mirage GLX 1.2G CVT", price: 772000 },
        ],
    },
    {
        model: "Mirage G4",
        entries: [
            { year: "2024", variant: "Mirage G4 GLX 1.2G MT", price: 769000 },
            { year: "2024", variant: "Mirage G4 GLX 1.2G CVT", price: 819000 },
            { year: "2024", variant: "Mirage G4 GLS 1.2G CVT", price: 899000 },
        ],
    },
    {
        model: "L300",
        entries: [
            { year: "2025", variant: "L300 C/C 2.2D M/T", price: 825000 },
            { year: "2024", variant: "L300 C/C 2.2D MT", price: 825000 },
        ],
    },
    {
        model: "Triton",
        entries: [
            { year: "2025", variant: "Triton GL 2.4D 4WD M/T", price: 1157000 },
            { year: "2024", variant: "Triton GL 2.4D 2WD M/T", price: 1134000 },
            {
                year: "2024",
                variant: "Triton GLX 2.4D 2WD M/T",
                price: 1311000,
            },
            {
                year: "2024",
                variant: "Triton GLX 2.4D 2WD A/T",
                price: 1383000,
            },
            {
                year: "2024",
                variant: "Triton GLS 2.4D 2WD A/T",
                price: 1582000,
            },
            { year: "2024", variant: "Triton GL 2.4D 4WD M/T", price: 1157000 },
            {
                year: "2024",
                variant: "Triton GLX 2.4D 4WD M/T",
                price: 1561000,
            },
            {
                year: "2024",
                variant: "Triton Athlete 2.4D 4WD A/T",
                price: 1909000,
            },
        ],
    },
    {
        model: "Strada",
        entries: [
            { year: "2024", variant: "Strada C/C 2.5D 2WD M/T", price: 845000 },
            { year: "2024", variant: "Strada GL 2.4D 2WD MT", price: 1048000 },
            { year: "2024", variant: "Strada GLS 2.4D 2WD AT", price: 1395000 },
            {
                year: "2024",
                variant: "Strada Athlete 2.4D 2WD AT (Bare)",
                price: 1430000,
            },
            {
                year: "2024",
                variant: "Strada Athlete 2.4D 2WD AT",
                price: 1496000,
            },
            { year: "2024", variant: "Strada GLS 2.4D 4WD MT", price: 1549000 },
            {
                year: "2024",
                variant: "Strada Athlete 2.4D 4WD AT (Bare)",
                price: 1754000,
            },
            {
                year: "2024",
                variant: "Strada Athlete 2.4D 4WD A/T",
                price: 1827000,
            },
            { year: "2024", variant: "Strada GL 2.4D 4WD MT", price: 1225000 },
        ],
    },
    {
        model: "Montero Sport",
        entries: [
            {
                year: "2025",
                variant: "Montero Sport GLX 2.4D 2WD M/T",
                price: 1568000,
            },
            {
                year: "2025",
                variant: "Montero Sport GLS 2.4D 2WD A/T",
                price: 1899000,
            },
            {
                year: "2025",
                variant: "Montero Sport Black Series 2.4D 2WD A/T",
                price: 2162000,
            },
            {
                year: "2025",
                variant: "Montero Sport Black Series 2.4D 4WD A/T",
                price: 2502000,
            },
            {
                year: "2024",
                variant: "Montero Sport GLX 2.4D 2WD MT",
                price: 1568000,
            },
            {
                year: "2024",
                variant: "Montero Sport GLS 2.4D 2WD AT",
                price: 1828000,
            },
            {
                year: "2024",
                variant: "Montero Sport Black Series 2.4D 2WD AT",
                price: 2103000,
            },
            {
                year: "2024",
                variant: "Montero Sport GT 2.4D 4WD AT",
                price: 2428000,
            },
        ],
    },
    {
        model: "Xforce",
        entries: [
            {
                year: "2025",
                variant: "Xforce GLS 1.5G 2WD CVT",
                price: 1367000,
            },
            { year: "2025", variant: "Xforce GT 1.5G 2WD CVT", price: 1581000 },
        ],
    },
    {
        model: "Xpander",
        entries: [
            {
                year: "2025",
                variant: "Xpander GLX 1.5G 2WD M/T",
                price: 1068000,
            },
            {
                year: "2025",
                variant: "Xpander GLX 1.5G 2WD A/T",
                price: 1128000,
            },
            {
                year: "2025",
                variant: "Xpander GLS 1.5G 2WD A/T",
                price: 1216000,
            },
            {
                year: "2025",
                variant: "Xpander Cross 1.5G 2WD A/T (Monotone)",
                price: 1346000,
            },
            {
                year: "2025",
                variant: "Xpander Cross 1.5G 2WD A/T (Two-Tone)",
                price: 1356000,
            },
            {
                year: "2024",
                variant: "Xpander GLX 1.5G 2WD M/T",
                price: 1068000,
            },
            {
                year: "2024",
                variant: "Xpander GLX 1.5G 2WD A/T",
                price: 1128000,
            },
            {
                year: "2024",
                variant: "Xpander GLS 1.5G 2WD A/T",
                price: 1198000,
            },
            {
                year: "2024",
                variant: "Xpander Cross 1.5G 2WD AT (Monotone)",
                price: 1328000,
            },
            {
                year: "2024",
                variant: "Xpander Cross 1.5G 2WD AT (Two-Tone)",
                price: 1338000,
            },
            {
                year: "2024",
                variant: "Xpander Cross Outdoor Edition 1.5G 2WD A/T",
                price: 1363000,
            },
        ],
    },
];

const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
        maximumFractionDigits: 0,
    }).format(price);

export default function PriceList() {
    return (
        <>
            <Header />
            <main className="w-full max-w-full bg-white">
                {/* Section title */}
                <section className="w-full bg-black py-10 sm:py-14 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        Price List
                    </h1>
                    <p className="text-sm text-white/60 max-w-lg mx-auto">
                        Suggested retail prices for the current Mitsubishi
                        lineup.
                    </p>
                </section>

                {/* Price tables */}
                <section className="w-full py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
                        {priceGroups.map((group) => (
                            <div key={group.model} className="mb-12 sm:mb-16">
                                <h2 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tight mb-4 pb-3 border-b-2 border-red-600">
                                    {group.model}
                                </h2>

                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="text-left text-[11px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-200">
                                            <th className="py-3 pr-4 w-16">
                                                Year
                                            </th>
                                            <th className="py-3 pr-4">
                                                Variant
                                            </th>
                                            <th className="py-3 pl-4 text-right w-40">
                                                SRP
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {group.entries.map((entry, i) => (
                                            <tr
                                                key={`${entry.variant}-${i}`}
                                                className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                                            >
                                                <td className="py-3 pr-4 text-gray-500">
                                                    {entry.year}
                                                </td>
                                                <td className="py-3 pr-4 text-gray-800">
                                                    {entry.variant}
                                                </td>
                                                <td className="py-3 pl-4 text-right font-bold text-gray-900 whitespace-nowrap">
                                                    {formatPrice(entry.price)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}

                        {/* Footnotes */}
                        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200">
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Please note: Image/s shown may not be an
                                accurate representation of the specific model/s.
                            </p>
                            <p className="text-xs text-gray-400 leading-relaxed mt-1">
                                Updated as of September 2024.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

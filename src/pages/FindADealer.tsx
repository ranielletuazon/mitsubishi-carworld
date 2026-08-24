import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Dealer {
    name: string;
    address: string;
    sales: string[];
    service?: string[];
    parts?: string[];
    serviceAppointment?: string[];
    hours: { days: string; time: string }[];
    inquireUrl: string;
}

const dealers: Dealer[] = [
    {
        name: "Mitsubishi Carworld Pampanga",
        address: "Jose Abad Santos Avenue, City of San Fernando, Pampanga",
        sales: ["+63949-994-2737", "+63918-854-2233"],
        service: ["+63918-854-2176"],
        parts: ["+63918-854-2179", "+63918-854-2172"],
        serviceAppointment: [
            "+63939-984-2153",
            "+63919-008-9872",
            "+63918-854-2916",
        ],
        hours: [
            { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
            { days: "Saturday", time: "8:00 AM – 6:00 PM" },
        ],
        inquireUrl: "https://mitsubishicarworld.com.ph/contact-us/",
    },
    {
        name: "Mitsubishi Carworld Bataan",
        address: "Roman Highway Brgy. Dona, Orani, Bataan, Philippines",
        sales: ["+63949-863-1797"],
        hours: [
            { days: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
            { days: "Saturday", time: "8:30 AM – 6:00 PM" },
        ],
        inquireUrl: "https://mitsubishicarworld.com.ph/contact-us/",
    },
    {
        name: "Mitsubishi Carworld Marilao",
        address: "McArthur Highway, Tabing-Ilog, Marilao, Bulacan, Philippines",
        sales: ["+63918-854-2168", "+63918-854-2716"],
        service: ["+63918-854-2612", "+63998-854-2764"],
        hours: [
            { days: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
            { days: "Saturday", time: "8:30 AM – 5:00 PM" },
        ],
        inquireUrl: "https://mitsubishicarworld.com.ph/contact-us/",
    },
    {
        name: "Mitsubishi Carworld Malolos",
        address:
            "Carworld Bldg., McArthur Highway, Sumapang Matanda, City of Malolos, Bulacan, Philippines",
        sales: ["+63918-854-2614", "+63918-854-2610", "+6344 791-2405"],
        service: ["+63918-854-2736", "+63918-854-2611"],
        hours: [
            { days: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
            { days: "Saturday", time: "8:30 AM – 5:00 PM" },
        ],
        inquireUrl: "https://mitsubishicarworld.com.ph/contact-us/",
    },
    {
        name: "Mitsubishi Carworld Subic",
        address:
            "Lot C-8, Subic Gateway Park, Phase 1, Commercial Area, Rizal Highway, Subic, Freeport Zone, Philippines",
        sales: ["+6347 250 0808", "+63918-854-2194", "+63917-870-9990"],
        service: ["+63918-854-2296", "+63918-854-2812"],
        hours: [
            { days: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
            { days: "Saturday", time: "8:30 AM – 5:00 PM" },
        ],
        inquireUrl: "https://mitsubishicarworld.com.ph/contact-us/",
    },
    {
        name: "Mitsubishi Carworld Tarlac",
        address:
            "McArthur Highway, San Roque, Tarlac City, Tarlac, Philippines",
        sales: ["+6345-982-5551 to 52", "+63918-854-2792"],
        service: ["+63918-854-2245", "+63918-854-2922", "+63920-958-3973"],
        hours: [
            { days: "Monday – Friday", time: "8:30 AM – 5:30 PM" },
            { days: "Saturday", time: "8:30 AM – 5:00 PM" },
        ],
        inquireUrl: "https://mitsubishicarworld.com.ph/contact-us/",
    },
];

function ContactGroup({
    label,
    numbers,
}: {
    label: string;
    numbers: string[];
}) {
    return (
        <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-red-600 mb-1">
                {label}
            </p>
            {numbers.map((n) => (
                <a
                    key={n}
                    href={`tel:${n.replace(/[^+\d]/g, "")}`}
                    className="block text-xs text-gray-700 hover:text-red-600 transition-colors duration-150"
                >
                    {n}
                </a>
            ))}
        </div>
    );
}

export default function FindADealer() {
    const [openIndex, setOpenIndex] = useState<number | null>();

    return (
        <>
            <Header />
            <main className="w-full max-w-full bg-white">
                {/* Hero */}
                <section className="w-full bg-black py-12 sm:py-16 px-4 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-5 h-0.5 bg-red-600" />
                        <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-500">
                            FIND YOUR DEALER
                        </span>
                        <span className="w-5 h-0.5 bg-red-600" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        Mitsubishi Carworld Dealers
                    </h1>
                    <p className="text-xs sm:text-sm text-white/55">
                        Locate the nearest Mitsubishi Carworld dealerships
                    </p>
                </section>

                {/* Dealer list + Map */}
                <section className="container mx-auto px-4 lg:px-6 py-10 sm:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 lg:gap-8">
                        {/* Dealer accordion */}
                        <div className="border border-gray-200 divide-y divide-gray-200 h-fit">
                            {dealers.map((dealer, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <div key={dealer.name}>
                                        <button
                                            onClick={() =>
                                                setOpenIndex(isOpen ? null : i)
                                            }
                                            className="w-full text-left px-5 py-4 hover:bg-gray-50 transition-colors duration-150 cursor-pointer flex items-start justify-between gap-3"
                                        >
                                            <div>
                                                <p className="text-sm font-bold text-gray-900 mb-1">
                                                    {dealer.name}
                                                </p>
                                                <p className="text-xs text-gray-500 leading-relaxed">
                                                    {dealer.address}
                                                </p>
                                            </div>
                                            <span
                                                className={`text-red-600 text-sm shrink-0 mt-0.5 transition-transform duration-200 ${
                                                    isOpen ? "rotate-180" : ""
                                                }`}
                                            >
                                                ▾
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="px-5 pb-5 pt-1 space-y-4 bg-gray-50/60">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <ContactGroup
                                                        label="Sales"
                                                        numbers={dealer.sales}
                                                    />
                                                    {dealer.service && (
                                                        <ContactGroup
                                                            label="Service"
                                                            numbers={
                                                                dealer.service
                                                            }
                                                        />
                                                    )}
                                                    {dealer.parts && (
                                                        <ContactGroup
                                                            label="Parts"
                                                            numbers={
                                                                dealer.parts
                                                            }
                                                        />
                                                    )}
                                                    {dealer.serviceAppointment && (
                                                        <ContactGroup
                                                            label="Service Appointment"
                                                            numbers={
                                                                dealer.serviceAppointment
                                                            }
                                                        />
                                                    )}
                                                </div>

                                                <div className="border-t border-gray-200 pt-3">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                                                        Operating Hours
                                                    </p>
                                                    {dealer.hours.map((h) => (
                                                        <div
                                                            key={h.days}
                                                            className="flex justify-between text-xs text-gray-600 py-0.5"
                                                        >
                                                            <span>
                                                                {h.days}
                                                            </span>
                                                            <span className="font-medium text-gray-900">
                                                                {h.time}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <a
                                                    href={dealer.inquireUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 px-4 py-2.5"
                                                >
                                                    Inquire Now
                                                    <span>→</span>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Map */}
                        <div className="border border-gray-200 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/d/embed?mid=19KV0yngXBbpNZjmbO4FE0_-dZlhDvZpS"
                                className="w-full h-[360px] sm:h-[440px] lg:h-[640px] block border-0"
                                loading="lazy"
                                title="Mitsubishi Carworld dealer locations map"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

import { useNavigate } from "react-router-dom";

interface FooterLink {
    label: string;
    path: string;
}

interface FooterColumn {
    title: string;
    links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
    {
        title: "Cars",
        links: [
            { label: "All Vehicles", path: "/vehicles" },
            { label: "Mirage", path: "/vehicles/mirage" },
            { label: "Mirage G4", path: "/vehicles/mirage-g4" },
            { label: "Xpander", path: "/vehicles/xpander" },
            { label: "Outlander", path: "/vehicles/outlander" },
            { label: "Montero", path: "/vehicles/montero-sport" },
            { label: "Strada", path: "/vehicles/strada" },
            { label: "L300", path: "/vehicles/l300" },
        ],
    },
    {
        title: "Sales",
        links: [
            { label: "Promotions", path: "/promotions" },
            { label: "Price List", path: "/price-list" },
            { label: "Brochures", path: "/brochures" },
        ],
    },
    {
        title: "Service",
        links: [
            { label: "Book a Service", path: "/service/book" },
            { label: "Service Promos", path: "/service/promos" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", path: "/about" },
            { label: "Find a Dealer", path: "/find-dealer" },
            { label: "Careers", path: "/careers" },
            { label: "Data Privacy Notice", path: "/privacy" },
        ],
    },
];

function FacebookIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.65.25 1.2.6 1.75 1.15.55.55.9 1.1 1.15 1.75.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.75 4.9 4.9 0 01-1.75 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.75-1.15 4.9 4.9 0 01-1.15-1.75c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.25-.65.6-1.2 1.15-1.75A4.9 4.9 0 015.43 2.55c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.25a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zm5.2-8.45a1.17 1.17 0 100-2.34 1.17 1.17 0 000 2.34z" />
        </svg>
    );
}

function YoutubeIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 00.5 6.19 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.87.55 9.38.55 9.38.55s7.51 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.81zM9.6 15.5v-7l6.26 3.5-6.26 3.5z" />
        </svg>
    );
}

export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="w-full bg-black text-white">
            {/* Top red accent line */}
            <div className="h-[3px] w-full bg-gradient-to-r from-red-900 via-red-600 to-red-900" />

            {/* Main footer content */}
            <div className="max-w-[1180px] mx-auto px-6 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8">
                {/* Brand column */}
                <div className="col-span-2 md:col-span-1">
                    <div className="text-lg font-black uppercase tracking-wide">
                        CAR<span className="text-red-600">WORLD</span>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed mt-3.5 max-w-[260px]">
                        The Home of Mitsubishi in the Philippines. Genuine
                        vehicles, trusted service, and a nationwide dealer
                        network built on 45 years of driving excellence.
                    </p>
                    <div className="flex gap-2.5 mt-5">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/60 hover:border-red-600 hover:text-red-600 transition-colors duration-200"
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/60 hover:border-red-600 hover:text-red-600 transition-colors duration-200"
                        >
                            <InstagramIcon />
                        </a>
                        <a
                            href="#"
                            aria-label="YouTube"
                            className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/60 hover:border-red-600 hover:text-red-600 transition-colors duration-200"
                        >
                            <YoutubeIcon />
                        </a>
                    </div>
                </div>

                {/* Link columns */}
                {footerColumns.map((col) => (
                    <div key={col.title}>
                        <h3 className="relative text-[11px] font-bold tracking-[2px] uppercase text-white mb-4 pb-2.5 w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-5 after:h-0.5 after:bg-red-600">
                            {col.title}
                        </h3>
                        <div className="flex flex-col gap-2.5">
                            {col.links.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => navigate(link.path)}
                                    className="text-left text-[13px] text-white/55 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer w-fit"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-[1180px] mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <span className="text-[11px] text-white/40 tracking-wide">
                        © 2026 Mitsubishi Carworld, Inc. All rights reserved.
                    </span>
                    <span className="text-[11px] text-white/40">
                        <button
                            onClick={() =>
                                window.open(
                                    "https://lausgroup.com.ph",
                                    "_blank",
                                )
                            }
                            className="text-white/70 font-bold bg-transparent border-none cursor-pointer hover:text-red-500 transition-colors duration-200 p-0"
                        >
                            Laus Group of Companies
                        </button>{" "}
                    </span>
                </div>
            </div>
        </footer>
    );
}

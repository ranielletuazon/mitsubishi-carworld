import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import nav_carworld_logo from "../../assets/images/carworld_nav-logo-home.png";
import nav_lausgroup_logo from "../../assets/images/lgc-black-logo.png";

interface NavLink {
    label: string;
    path: string;
    children?: { label: string; path: string }[];
}

const navLinks: NavLink[] = [
    { label: "VEHICLES", path: "/vehicles" },
    {
        label: "SERVICES",
        path: "/services",
        children: [
            { label: "Book an Appointment", path: "/contact-us" },
            { label: "Service Promos", path: "/service-promos" },
        ],
    },
    { label: "FIND A DEALER", path: "/find-a-dealer" },
    {
        label: "ABOUT US",
        path: "/about-us",
        children: [
            { label: "Company Profile", path: "/company-profile" },
            { label: "News", path: "/news" },
        ],
    },
    { label: "CONTACT US", path: "/contact-us" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

    const handleLausGroupClick = () => {
        window.open("https://lausgroup.com.ph", "_blank");
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-black shadow-lg">
            {/* Top brand accent line */}
            <div className="h-1 w-full bg-red-600" />

            <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 lg:px-6 lg:py-4">
                {/* CarWorld Logo */}
                <a
                    href="/"
                    className="flex shrink-0 items-center bg-transparent border-none cursor-pointer"
                    aria-label="CarWorld Home"
                >
                    <img
                        src={nav_carworld_logo}
                        alt="CarWorld Logo"
                        className="h-9 w-auto sm:h-11 lg:h-12"
                    />
                </a>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
                    {navLinks.map((link) =>
                        link.children ? (
                            <div key={link.label} className="group relative">
                                <a
                                    href={link.path}
                                    className="relative flex items-center gap-1 text-sm font-medium tracking-wide text-white/85 transition-colors duration-200 hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-200 hover:after:w-full bg-transparent border-none cursor-pointer"
                                >
                                    {link.label}
                                    <ChevronDown
                                        size={14}
                                        className="transition-transform duration-200 group-hover:rotate-180"
                                    />
                                </a>

                                {/* Dropdown */}
                                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                                    <div className="min-w-[200px] border-t-2 border-red-600 bg-black shadow-lg">
                                        {link.children.map((child) => (
                                            <a
                                                key={child.label}
                                                href={child.path}
                                                className="block px-4 py-3 text-xs font-medium tracking-wide text-white/75 transition-colors duration-150 hover:bg-white/5 hover:text-white"
                                            >
                                                {child.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <a
                                key={link.label}
                                href={link.path}
                                className="relative text-sm font-medium tracking-wide text-white/85 transition-colors duration-200 hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-200 hover:after:w-full bg-transparent border-none cursor-pointer"
                            >
                                {link.label}
                            </a>
                        ),
                    )}
                </nav>

                {/* Right: LausGroup logo + mobile toggle */}
                <div className="flex items-center gap-3">
                    {/* LausGroup logo clickable button */}
                    <button
                        onClick={handleLausGroupClick}
                        className="hidden bg-white px-3 py-2 shadow-sm lg:flex border-2 border-red-600 items-center bg-transparent border-2 border-red-600 transition-opacity hover:opacity-80 cursor-pointer"
                        aria-label="Visit LausGroup website"
                    >
                        <img
                            src={nav_lausgroup_logo}
                            alt="LausGroup Logo"
                            className="h-7 w-auto md:h-9"
                        />
                    </button>

                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="inline-flex items-center justify-center p-2 text-white transition-colors hover:bg-white/10 lg:hidden bg-transparent border-none cursor-pointer"
                    >
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <nav className="border-t border-white/10 bg-black px-4 pb-5 pt-2 lg:hidden">
                    <div className="flex flex-col">
                        {navLinks.map((link, index) =>
                            link.children ? (
                                <div key={link.label}>
                                    <button
                                        onClick={() =>
                                            setMobileExpanded(
                                                mobileExpanded === link.label
                                                    ? null
                                                    : link.label,
                                            )
                                        }
                                        className="flex w-full items-center justify-between border-l-2 border-transparent py-3 pl-3 text-left text-sm font-medium tracking-wide text-white/85 transition-colors duration-300 hover:border-red-600 hover:bg-white/5 hover:text-white bg-transparent border-none cursor-pointer"
                                        style={{
                                            transitionDelay: menuOpen
                                                ? `${index * 60}ms`
                                                : "0ms",
                                        }}
                                    >
                                        {link.label}
                                        <ChevronDown
                                            size={16}
                                            className={`mr-3 transition-transform duration-200 ${
                                                mobileExpanded === link.label
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>

                                    {mobileExpanded === link.label && (
                                        <div className="flex flex-col bg-white/5">
                                            {link.children.map((child) => (
                                                <a
                                                    key={child.label}
                                                    href={child.path}
                                                    onClick={() => {
                                                        setMenuOpen(false);
                                                        setMobileExpanded(null);
                                                    }}
                                                    className="py-2.5 pl-8 text-xs font-medium tracking-wide text-white/70 transition-colors duration-150 hover:text-white"
                                                >
                                                    {child.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    key={link.label}
                                    href={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="border-l-2 border-transparent py-3 pl-3 text-left text-sm font-medium tracking-wide text-white/85 transition-colors duration-300 hover:border-red-600 hover:bg-white/5 hover:text-white bg-transparent border-none cursor-pointer text-left"
                                    style={{
                                        transitionDelay: menuOpen
                                            ? `${index * 60}ms`
                                            : "0ms",
                                    }}
                                >
                                    {link.label}
                                </a>
                            ),
                        )}

                        {/* LausGroup link for mobile */}
                        <button
                            onClick={() => {
                                handleLausGroupClick();
                                setMenuOpen(false);
                            }}
                            className="mt-4 inline-flex bg-white px-3 py-2 shadow-sm border-2 border-red-600 items-center transition-opacity hover:opacity-80 bg-transparent border-2 border-red-600 cursor-pointer w-full justify-center"
                            aria-label="Visit LausGroup website"
                        >
                            <img
                                src={nav_lausgroup_logo}
                                alt="LausGroup Logo"
                                className="h-8 w-auto"
                            />
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
}

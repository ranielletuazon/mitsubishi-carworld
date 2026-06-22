import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import nav_carworld_logo from "../assets/carworld_nav-logo-home.png";
import nav_lausgroup_logo from "../assets/lgc-black-logo.png";

const navLinks = [
    { label: "VEHICLES", path: "/vehicles" },
    { label: "SERVICE", path: "/service" },
    { label: "FIND A DEALER", path: "/find-dealer" },
    { label: "ABOUT US", path: "/about" },
    { label: "CONTACT US", path: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLausGroupClick = () => {
        window.location.href = "https://lausgroup.com.ph";
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-black shadow-lg">
            {/* Top brand accent line */}
            <div className="h-1 w-full bg-red-600" />

            <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 lg:px-6 lg:py-4">
                {/* CarWorld Logo */}
                <button
                    onClick={() => navigate("/")}
                    className="flex shrink-0 items-center bg-transparent border-none cursor-pointer"
                    aria-label="CarWorld Home"
                >
                    <img
                        src={nav_carworld_logo}
                        alt="CarWorld Logo"
                        className="h-9 w-auto sm:h-11 lg:h-12"
                    />
                </button>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => navigate(link.path)}
                            className="relative text-sm font-medium tracking-wide text-white/85 transition-colors duration-200 hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all after:duration-200 hover:after:w-full bg-transparent border-none cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
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
                        {navLinks.map((link, index) => (
                            <button
                                key={link.label}
                                onClick={() => {
                                    navigate(link.path);
                                    setMenuOpen(false);
                                }}
                                className="border-l-2 border-transparent py-3 pl-3 text-left text-sm font-medium tracking-wide text-white/85 transition-colors duration-300 hover:border-red-600 hover:bg-white/5 hover:text-white bg-transparent border-none cursor-pointer text-left"
                                style={{
                                    transitionDelay: menuOpen
                                        ? `${index * 60}ms`
                                        : "0ms",
                                }}
                            >
                                {link.label}
                            </button>
                        ))}

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

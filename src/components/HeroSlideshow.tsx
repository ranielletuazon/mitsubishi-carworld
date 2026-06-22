import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ── Swap these for your real imports ──────────────────────────────────────
// import montero from "../assets/slides/montero.jpg";
import promo from "../assets/promo-buy-n-win.jpg";
import xpander from "../assets/xpander.jpg";
import strada from "../assets/strada-black.jpg";
import cw_banner from "../assets/CW_Banner.jpg";

const SLIDE_DURATION = 5000; // ms per slide

interface Slide {
    eyebrow: string;
    title: string[]; // split into lines
    subtitle: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    bgImage: string; // swap in real image paths
    bgColor: string; // fallback while image loads
}

const slides: Slide[] = [
    {
        eyebrow: "Limited Promo · Until July 31, 2026",
        title: ["BUY AND WIN", "Ultimate Giveaway"],
        subtitle:
            "Get a chance to win a Brand New Mitsubishi Xpander 1.5 GLX AT and other amazing prizes when you purchase a car from any Mitsubishi Carworld dealership from February 1, 2026 to July 31, 2026. Grand Raffle Draw is on August 17, 2026.",
        primaryCta: { label: "Explore", href: "/vehicles" },
        secondaryCta: { label: "Talk to a Dealer", href: "/find-dealer" },
        bgImage: promo,
        bgColor:
            "linear-gradient(135deg,#050a14 0%,#08152a 40%,#0d1e3d 70%,#061020 100%)",
    },
    {
        eyebrow: "All-New 2025",
        title: ["XPANDER", "BLACK SERIES"],
        subtitle:
            "Command every road. The new Montero Sport arrives with bold styling, advanced 4WD technology, and a cabin built for those who lead.",
        primaryCta: { label: "Explore", href: "/vehicles/xpander" },
        secondaryCta: { label: "Request a Quote", href: "/contact" },
        bgImage: xpander, // e.g. montero
        bgColor:
            "linear-gradient(135deg,#0a0a0a 0%,#1a0505 40%,#2d0808 70%,#1a0000 100%)",
    },
    {
        eyebrow: "Best Seller",
        title: ["STRADA", "BLACK SERIES"],
        subtitle:
            "Space, style, and efficiency in one package. The Xpander is the Philippines' most loved MPV — now with enhanced safety features.",
        primaryCta: { label: "Explore", href: "/vehicles/xpander" },
        secondaryCta: { label: "Book a Test Drive", href: "/contact" },
        bgImage: strada,
        bgColor:
            "linear-gradient(135deg,#050d0a 0%,#08201a 40%,#0a2e20 70%,#061a10 100%)",
    },
    {
        eyebrow: "45 Years Anniversary",
        title: ["Mitsubishi Carworld", ""],
        subtitle: "",
        primaryCta: { label: "Explore", href: "/vehicles/strada" },
        // secondaryCta: { label: "Find a Dealer", href: "/find-dealer" },
        bgImage: cw_banner,
        bgColor:
            "linear-gradient(135deg,#0d0a04 0%,#241806 40%,#342208 70%,#1a1204 100%)",
    },
];

export default function HeroSlideshow() {
    const [current, setCurrent] = useState(0);
    const [progress, setProgress] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef<number>(0);
    const pausedRef = useRef(false);
    const elapsedRef = useRef(0);

    const goTo = useCallback((index: number) => {
        setCurrent((index + slides.length) % slides.length);
        elapsedRef.current = 0;
        setProgress(0);
    }, []);

    const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
    const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

    // Auto-advance + progress bar
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        startRef.current = performance.now() - elapsedRef.current;

        const animate = (now: number) => {
            if (pausedRef.current) return;
            const elapsed = now - startRef.current;
            const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
            setProgress(pct);
            if (pct < 100) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);
        timerRef.current = setTimeout(
            goNext,
            SLIDE_DURATION - elapsedRef.current,
        );

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [current, goNext]);

    // Keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [goNext, goPrev]);

    const handleMouseEnter = () => {
        pausedRef.current = true;
        elapsedRef.current = (progress / 100) * SLIDE_DURATION;
        if (timerRef.current) clearTimeout(timerRef.current);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };

    const handleMouseLeave = () => {
        pausedRef.current = false;
        startRef.current = performance.now() - elapsedRef.current;
        const animate = (now: number) => {
            if (pausedRef.current) return;
            const elapsed = now - startRef.current;
            const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
            setProgress(pct);
            if (pct < 100) rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        timerRef.current = setTimeout(
            goNext,
            SLIDE_DURATION - elapsedRef.current,
        );
    };

    return (
        <section
            className="relative w-full overflow-hidden bg-black"
            style={{
                height: "calc(100vh - 57px)",
                minHeight: "480px",
                maxHeight: "800px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Featured vehicles slideshow"
        >
            {/* Slides */}
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className="absolute inset-0 flex items-end transition-opacity duration-700"
                    style={{
                        opacity: i === current ? 1 : 0,
                        pointerEvents: i === current ? "auto" : "none",
                    }}
                    aria-hidden={i !== current}
                >
                    {/* Background */}
                    <div
                        className="absolute inset-0 transition-transform duration-[6000ms] ease-out"
                        style={{
                            background: slide.bgImage
                                ? `url(${slide.bgImage}) center/cover no-repeat`
                                : slide.bgColor,
                            transform:
                                i === current ? "scale(1.04)" : "scale(1)",
                        }}
                    />
                    {/* Overlays */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(90deg,rgba(0,0,0,0.78) 0%,rgba(0,0,0,0.38) 60%,rgba(0,0,0,0.05) 100%)",
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to top,rgba(0,0,0,0.55) 0%,transparent 50%)",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 px-6 pb-14 sm:px-12 lg:px-16 max-w-2xl">
                        <p
                            className="text-xs font-bold uppercase tracking-[3px] text-red-600 mb-3 transition-all duration-500"
                            style={{
                                opacity: i === current ? 1 : 0,
                                transform:
                                    i === current
                                        ? "translateY(0)"
                                        : "translateY(14px)",
                                transitionDelay: "300ms",
                            }}
                        >
                            {slide.eyebrow}
                        </p>
                        <h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight mb-4 transition-all duration-500"
                            style={{
                                opacity: i === current ? 1 : 0,
                                transform:
                                    i === current
                                        ? "translateY(0)"
                                        : "translateY(18px)",
                                transitionDelay: "440ms",
                            }}
                        >
                            {slide.title.map((line, j) => (
                                <span key={j} className="block">
                                    {line}
                                </span>
                            ))}
                        </h2>
                        <p
                            className="text-sm text-white/70 leading-relaxed mb-8 max-w-md hidden sm:block transition-all duration-500"
                            style={{
                                opacity: i === current ? 1 : 0,
                                transform:
                                    i === current
                                        ? "translateY(0)"
                                        : "translateY(14px)",
                                transitionDelay: "560ms",
                            }}
                        >
                            {slide.subtitle}
                        </p>
                        <div
                            className="flex flex-wrap gap-3 transition-all duration-500"
                            style={{
                                opacity: i === current ? 1 : 0,
                                transform:
                                    i === current
                                        ? "translateY(0)"
                                        : "translateY(14px)",
                                transitionDelay: "680ms",
                            }}
                        >
                            <a
                                href={slide.primaryCta.href}
                                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-7 py-3 transition-colors duration-200"
                            >
                                {slide.primaryCta.label}
                            </a>
                            {slide.secondaryCta && (
                                <a
                                    href={slide.secondaryCta.href}
                                    className="border border-white/40 hover:border-white hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-7 py-3 transition-colors duration-200"
                                >
                                    {slide.secondaryCta.label}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {/* Prev / Next arrows */}
            <button
                onClick={goPrev}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center border border-white/20 bg-black/30 text-white hover:bg-red-600 hover:border-red-600 transition-colors duration-200"
            >
                <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
                onClick={goNext}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center border border-white/20 bg-black/30 text-white hover:bg-red-600 hover:border-red-600 transition-colors duration-200"
            >
                <ChevronRight size={20} strokeWidth={2.5} />
            </button>

            {/* Slide counter */}
            {/* <div className="absolute top-5 right-6 z-20 text-xs text-white/50 font-semibold tracking-[2px]">
                <span className="text-white">
                    {String(current + 1).padStart(2, "0")}
                </span>
                {" / "}
                {String(slides.length).padStart(2, "0")}
            </div> */}

            {/* Dot indicators */}
            <div className="absolute bottom-5 right-6 z-20 flex items-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className="h-[3px] transition-all duration-300 bg-white/30 hover:bg-white/60"
                        style={{
                            width: i === current ? "44px" : "28px",
                            background: i === current ? "#cc0000" : undefined,
                        }}
                    />
                ))}
            </div>

            {/* Red progress bar */}
            <div
                className="absolute bottom-0 left-0 h-[3px] bg-red-600 z-20"
                style={{
                    width: `${progress}%`,
                    transition: "none",
                }}
            />
        </section>
    );
}

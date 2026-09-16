import Header from "./components/Header";
import Footer from "./components/Footer";

interface Brochure {
    name: string;
    image: string;
    file: string;
}

const IMG_BASE = "/brochures/images";
const FILE_BASE = "/brochures/files";

const brochures: Brochure[] = [
    {
        name: "Mirage",
        image: `${IMG_BASE}/mirage.jpg`,
        file: `${FILE_BASE}/mirage.pdf`,
    },
    {
        name: "Mirage G4",
        image: `${IMG_BASE}/mirage-g4.jpg`,
        file: `${FILE_BASE}/mirage-g4.pdf`,
    },
    {
        name: "Xpander",
        image: `${IMG_BASE}/xpander.jpg`,
        file: `${FILE_BASE}/xpander.pdf`,
    },
    {
        name: "Outlander PHEV",
        image: `${IMG_BASE}/outlander-phev.jpg`,
        file: `${FILE_BASE}/outlander-phev.pdf`,
    },
    {
        name: "Montero Sport",
        image: `${IMG_BASE}/montero-sport.jpg`,
        file: `${FILE_BASE}/montero-sport.pdf`,
    },
    {
        name: "Strada",
        image: `${IMG_BASE}/strada.jpg`,
        file: `${FILE_BASE}/strada.pdf`,
    },
    {
        name: "Strada GL | Cab & Chassis",
        image: `${IMG_BASE}/strada-gl.jpg`,
        file: `${FILE_BASE}/strada-gl.pdf`,
    },
    {
        name: "L300",
        image: `${IMG_BASE}/l300.jpg`,
        file: `${FILE_BASE}/l300.pdf`,
    },
];

export default function Brochures() {
    return (
        <>
            <Header />
            <main className="w-full max-w-full bg-white">
                {/* Hero */}
                <section className="w-full bg-black py-12 sm:py-16 px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-5 h-0.5 bg-red-600" />
                        <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-500">
                            Downloads
                        </span>
                        <span className="w-5 h-0.5 bg-red-600" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        Brochures
                    </h1>
                    <p className="text-sm text-white/60 max-w-lg mx-auto">
                        Download detailed specifications and features for every
                        model in the Mitsubishi lineup.
                    </p>
                </section>

                {/* Brochure grid */}
                <section className="w-full py-14 sm:py-20">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                            {brochures.map((brochure) => (
                                <div
                                    key={brochure.name}
                                    className="group flex flex-col border border-gray-200 hover:border-red-600/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
                                >
                                    <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                                        <img
                                            src={brochure.image}
                                            alt={`${brochure.name} brochure cover`}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3 px-4 py-4 flex-1 border-t border-gray-100">
                                        <h3 className="text-sm font-black text-gray-900 uppercase tracking-tight leading-snug">
                                            {brochure.name}
                                        </h3>

                                        <div className="mt-auto flex flex-col gap-2">
                                            <a
                                                href={brochure.file}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-center text-[11px] font-bold uppercase tracking-widest text-gray-700 border border-gray-300 hover:border-red-600 hover:text-red-600 px-3 py-2.5 transition-colors duration-200"
                                            >
                                                View
                                            </a>
                                            <a
                                                href={brochure.file}
                                                download
                                                className="text-center text-[11px] font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 px-3 py-2.5 transition-colors duration-200"
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

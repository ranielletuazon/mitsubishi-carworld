import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Contact() {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    return (
        <>
            <Header />
            <main className="w-full max-w-full bg-white">
                {/* Hero */}
                <section className="w-full bg-black py-12 sm:py-16 px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-5 h-0.5 bg-red-600" />
                        <span className="text-[11px] font-bold tracking-[3px] uppercase text-red-500">
                            Get in Touch
                        </span>
                        <span className="w-5 h-0.5 bg-red-600" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-2">
                        Contact Us
                    </h1>
                    <p className="text-xs sm:text-sm text-white/55">
                        Questions, quotes, or feedback — we're here to help
                    </p>
                </section>

                {/* Form */}
                <section className="container mx-auto px-4 lg:px-6 py-10 sm:py-14">
                    <div className="relative border border-gray-200">
                        {!iframeLoaded && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white z-10">
                                <div className="w-8 h-8 border-2 border-gray-200 border-t-red-600 rounded-full animate-spin" />
                                <p className="text-xs text-gray-400 uppercase tracking-widest">
                                    Loading form...
                                </p>
                            </div>
                        )}
                        <iframe
                            src="https://crm.lausgroup.com.ph/ContactUs/contactForm_LAG.php?brand=MITS:Contact Mitsubishi Carworld:mitsubishicarworld.com.ph"
                            onLoad={() => setIframeLoaded(true)}
                            className="w-full h-200 block border-0"
                            title="Mitsubishi Carworld contact form"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

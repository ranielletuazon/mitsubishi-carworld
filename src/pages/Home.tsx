import Header from "../components/Header";
import HeroSlideshow from "../components/HeroSlideshow";
import VehicleShowcase from "../components/VehicleShowcase";

export default function Home() {
    return (
        <>
            <Header />
            <div className="w-full max-w-full">
                <HeroSlideshow />

                {/* Cars Display */}
                <VehicleShowcase />

                <div className="container mx-auto"></div>
            </div>
        </>
    );
}

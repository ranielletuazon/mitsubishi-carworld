import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Vehicles from "./pages/Vehicles";
import Service from "./pages/Service";
import FindADealer from "./pages/FindADealer";
import CompanyProfile from "./pages/CompanyProfile";
import News from "./pages/News";
import NewsPoster from "./pages/NewsPoster";
import Contact from "./pages/Contact";
import ServicePromos from "./pages/ServicePromos";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about-us" element={<About />}></Route>
                    <Route path="/vehicles" element={<Vehicles />}></Route>
                    <Route path="/services" element={<Service />}></Route>
                    <Route
                        path="/find-a-dealer"
                        element={<FindADealer />}
                    ></Route>
                    <Route
                        path="/company-profile"
                        element={<CompanyProfile />}
                    ></Route>
                    <Route path="/news" element={<News />}></Route>
                    <Route path="/news-post" element={<NewsPoster />}></Route>
                    <Route path="/contact-us" element={<Contact />}></Route>
                    <Route
                        path="/service-promos"
                        element={<ServicePromos />}
                    ></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

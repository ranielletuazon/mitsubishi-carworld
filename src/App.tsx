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
import MirageG4 from "./pages/cars/MirageG4";
import Xpander from "./pages/cars/Xpander";
import Triton from "./pages/cars/Triton";
import Montero from "./pages/cars/Montero";
import L300 from "./pages/cars/L300";
import Xforce from "./pages/cars/Xforce";
import Destinator from "./pages/cars/Destinator";
import Versa from "./pages/cars/Versa";
import Strada from "./pages/cars/Strada";
import Outlander from "./pages/cars/Outlander";
import MirageG4Exterior from "./pages/cars/MirageG4/Exterior";
import MirageG4Interior from "./pages/cars/MirageG4/Interior";
import MirageG4Drive from "./pages/cars/MirageG4/Drive";
import MirageG4Safety from "./pages/cars/MirageG4/Safety";
import XpanderDrive from "./pages/cars/Xpander/Drive";
import XpanderExterior from "./pages/cars/Xpander/Exterior";
import XpanderInterior from "./pages/cars/Xpander/Interior";
import XpanderSafety from "./pages/cars/Xpander/Safety";
import MonteroDrive from "./pages/cars/Montero/Drive";
import MonteroExterior from "./pages/cars/Montero/Exterior";
import MonteroInterior from "./pages/cars/Montero/Interior";
import MonteroSafety from "./pages/cars/Montero/Safety";
import TritonDrive from "./pages/cars/Triton/Drive";
import TritonExterior from "./pages/cars/Triton/Exterior";
import TritonInterior from "./pages/cars/Triton/Interior";
import TritonSafety from "./pages/cars/Triton/Safety";
import DestinatorDrive from "./pages/cars/Destinator/Drive";
import DestinatorExterior from "./pages/cars/Destinator/Exterior";
import DestinatorInterior from "./pages/cars/Destinator/Interior";
import DestinatorSafety from "./pages/cars/Destinator/Safety";
import XforceDrive from "./pages/cars/Xforce/Drive";
import XforceExterior from "./pages/cars/Xforce/Exterior";
import XforceInterior from "./pages/cars/Xforce/Interior";
import XforceSafety from "./pages/cars/Xforce/Safety";
import VersaDrive from "./pages/cars/Versa/Drive";
import NewsView from "./pages/NewsView";
import PriceList from "./pages/PriceList";
import DataPrivacy from "./pages/DataPrivacy";
import Brochure from "./pages/Brochure";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    {/* Vehicles Catalog */}
                    <Route path="/vehicles" element={<Vehicles />}></Route>

                    {/* Mirage G4 */}
                    <Route path="/vehicles/mirage-g4" element={<MirageG4 />} />
                    <Route
                        path="/vehicles/mirage-g4/exterior"
                        element={<MirageG4Exterior />}
                    />
                    <Route
                        path="/vehicles/mirage-g4/interior"
                        element={<MirageG4Interior />}
                    />
                    <Route
                        path="/vehicles/mirage-g4/drive"
                        element={<MirageG4Drive />}
                    />
                    <Route
                        path="/vehicles/mirage-g4/safety"
                        element={<MirageG4Safety />}
                    />

                    {/* Xpander */}
                    <Route
                        path="/vehicles/xpander"
                        element={<Xpander />}
                    ></Route>
                    <Route
                        path="/vehicles/xpander/drive"
                        element={<XpanderDrive />}
                    ></Route>
                    <Route
                        path="/vehicles/xpander/exterior"
                        element={<XpanderExterior />}
                    ></Route>
                    <Route
                        path="/vehicles/xpander/interior"
                        element={<XpanderInterior />}
                    ></Route>
                    <Route
                        path="/vehicles/xpander/safety"
                        element={<XpanderSafety />}
                    ></Route>

                    {/* Montero Sporrt */}
                    <Route
                        path="/vehicles/montero-sport"
                        element={<Montero />}
                    ></Route>
                    <Route
                        path="/vehicles/montero-sport/drive"
                        element={<MonteroDrive />}
                    ></Route>
                    <Route
                        path="/vehicles/montero-sport/exterior"
                        element={<MonteroExterior />}
                    ></Route>
                    <Route
                        path="/vehicles/montero-sport/interior"
                        element={<MonteroInterior />}
                    ></Route>
                    <Route
                        path="/vehicles/montero-sport/safety"
                        element={<MonteroSafety />}
                    ></Route>

                    {/* Triton */}
                    <Route path="/vehicles/triton" element={<Triton />}></Route>
                    <Route
                        path="/vehicles/triton/drive"
                        element={<TritonDrive />}
                    ></Route>
                    <Route
                        path="/vehicles/triton/exterior"
                        element={<TritonExterior />}
                    ></Route>
                    <Route
                        path="/vehicles/triton/interior"
                        element={<TritonInterior />}
                    ></Route>
                    <Route
                        path="/vehicles/triton/safety"
                        element={<TritonSafety />}
                    ></Route>

                    {/* Destinator */}
                    <Route
                        path="/vehicles/destinator"
                        element={<Destinator />}
                    ></Route>
                    <Route
                        path="/vehicles/destinator/drive"
                        element={<DestinatorDrive />}
                    ></Route>
                    <Route
                        path="/vehicles/destinator/exterior"
                        element={<DestinatorExterior />}
                    ></Route>
                    <Route
                        path="/vehicles/destinator/interior"
                        element={<DestinatorInterior />}
                    ></Route>
                    <Route
                        path="/vehicles/destinator/safety"
                        element={<DestinatorSafety />}
                    ></Route>

                    {/* Xforce */}
                    <Route path="/vehicles/xforce" element={<Xforce />}></Route>
                    <Route
                        path="/vehicles/xforce/drive"
                        element={<XforceDrive />}
                    ></Route>
                    <Route
                        path="/vehicles/xforce/exterior"
                        element={<XforceExterior />}
                    ></Route>
                    <Route
                        path="/vehicles/xforce/interior"
                        element={<XforceInterior />}
                    ></Route>
                    <Route
                        path="/vehicles/xforce/safety"
                        element={<XforceSafety />}
                    ></Route>

                    {/* L300 */}
                    <Route path="/vehicles/l300" element={<L300 />}></Route>

                    {/* Versa Van */}
                    <Route
                        path="/vehicles/versa-van"
                        element={<Versa />}
                    ></Route>
                    <Route
                        path="/vehicles/versa-van/drive"
                        element={<VersaDrive />}
                    ></Route>

                    {/* Strada */}
                    <Route path="/vehicles/strada" element={<Strada />}></Route>

                    {/* Outlander */}
                    <Route
                        path="/vehicles/outlander"
                        element={<Outlander />}
                    ></Route>

                    <Route path="/about-us" element={<About />}></Route>
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
                    <Route path="/news/:slug" element={<NewsView />} />
                    <Route path="/price-list" element={<PriceList />}></Route>
                    <Route
                        path="/data-privacy-notice"
                        element={<DataPrivacy />}
                    ></Route>
                    <Route path="/brochures" element={<Brochure />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

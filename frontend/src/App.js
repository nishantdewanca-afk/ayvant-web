import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { ExitIntentPopup } from "./components/ExitIntentPopup";
import Home from "./pages/Home";
import Cybersecurity from "./pages/Cybersecurity";
import ITSupport from "./pages/ITSupport";
import ITConsulting from "./pages/ITConsulting";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import {
  ITSupportVancouver,
  ITSupportSurrey,
  ITSupportLangley,
  ITSupportBurnaby,
  ITSupportRichmond,
  ITSupportCoquitlam,
  ITSupportPortMoody,
  ITSupportDelta,
  ITSupportAbbotsford,
  ITSupportChilliwack,
} from "./pages/LocationPages";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/it-support" element={<ITSupport />} />
            <Route path="/it-consulting" element={<ITConsulting />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Location-based SEO pages */}
            <Route path="/it-support-vancouver" element={<ITSupportVancouver />} />
            <Route path="/it-support-surrey" element={<ITSupportSurrey />} />
            <Route path="/it-support-langley" element={<ITSupportLangley />} />
            <Route path="/it-support-burnaby" element={<ITSupportBurnaby />} />
            <Route path="/it-support-richmond" element={<ITSupportRichmond />} />
            <Route path="/it-support-coquitlam" element={<ITSupportCoquitlam />} />
            <Route path="/it-support-port-moody" element={<ITSupportPortMoody />} />
            <Route path="/it-support-delta" element={<ITSupportDelta />} />
            <Route path="/it-support-abbotsford" element={<ITSupportAbbotsford />} />
            <Route path="/it-support-chilliwack" element={<ITSupportChilliwack />} />
            {/* Legal pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
        <ExitIntentPopup />
      </BrowserRouter>
    </div>
  );
}

export default App;

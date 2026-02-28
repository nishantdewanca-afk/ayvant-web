import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Cybersecurity from "./pages/Cybersecurity";
import ITSupport from "./pages/ITSupport";
import ITConsulting from "./pages/ITConsulting";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
  // Load GHL chat widget globally
  useEffect(() => {
    const chatScript = document.createElement('script');
    chatScript.src = 'https://beta.leadconnectorhq.com/loader.js';
    chatScript.setAttribute('data-resources-url', 'https://beta.leadconnectorhq.com/chat-widget/loader.js');
    chatScript.setAttribute('data-widget-id', '69a2a83d95702f720374ab00');
    chatScript.async = true;
    document.body.appendChild(chatScript);

    return () => {
      if (document.body.contains(chatScript)) {
        document.body.removeChild(chatScript);
      }
    };
  }, []);

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
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

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
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

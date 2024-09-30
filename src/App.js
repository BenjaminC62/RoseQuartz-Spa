import "./styles/App.css";
import "./styles/Home.css";

import Nav from "./components/spa/Nav";
import Home from "./components/spa/Home";
import Contact from "./components/spa/Contact";
import About from "./components/spa/About";
import Services from "./components/spa/Services";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="Container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;

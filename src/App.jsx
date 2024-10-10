import "./styles/App.css";
import "./styles/Home.css";
import "./styles/Footer.css";

import Nav from "./components/spa/Nav";
import Home from "./components/spa/Home";
import Contact from "./components/spa/Contact";
import About from "./components/spa/About";
import Services from "./components/spa/Services/Services";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/spa/Footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;

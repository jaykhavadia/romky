import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./common/Header";
import Footer from "./common/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

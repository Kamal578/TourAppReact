import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Tour from "../pages/tours/Tour";
import WhyUs from "../pages/whyus/WhyUs";
import Gallery from "../pages/gallery/Gallery";
import Contact from "../pages/contact/Contact";
import Header from "../components/layout/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tours' element={<Tour />} />
        <Route path='/whyus' element={<WhyUs />} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
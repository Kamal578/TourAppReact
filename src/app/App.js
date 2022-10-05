import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Tour from "../pages/tours/Tour";
import WhyUs from "../pages/whyus/WhyUs";
import GalleryPage from "../pages/gallery/GalleryPage";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/tours' exact element={<Tour />} />
        <Route path='/whyus' exact element={<WhyUs />} />
        <Route path='/gallery' exact element={<GalleryPage/>} />
        <Route path='/contact' exact element={<Contact />} />
        <Route element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
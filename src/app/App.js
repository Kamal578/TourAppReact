import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Tours from "../pages/tours/Tours";
import WhyUs from "../pages/whyus/WhyUs";
import GalleryPage from "../pages/gallery/GalleryPage";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import TourInnerPage from "../pages/tourInnerPage/TourInnerPage";

const App = () => {
  return (
    <div className="font-primary">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tours" exact element={<Tours />} />
          <Route path="/whyus" exact element={<WhyUs />} />
          <Route path="/gallery" exact element={<GalleryPage />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/tourInnerPage" exact element={<TourInnerPage />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

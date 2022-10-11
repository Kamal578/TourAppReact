import React from "react";
import Hero from "./Hero";
import UpcomingTours from "./UpcomingTours";
import Gallery from "./Gallery";
import Header from "../../components/layout/Header";
import HowItWorks from "./HowItWorks";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header currentPage={1} />
      <Hero />
      <UpcomingTours />
      <Gallery />
      <HowItWorks />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}

import React from "react";
import Hero from "./Hero";
import UpcomingTours from "./UpcomingTours";
import Gallery from "./Gallery";
import Header from "../../components/layout/Header";
import HowItWorks from "./HowItWorks";

export default function Home() {
  return (
    <div className="Home">
      <Header currentPage={1}/>
      <Hero />
      <UpcomingTours/>
      <Gallery/>
      <HowItWorks/>
    </div>
  );
}

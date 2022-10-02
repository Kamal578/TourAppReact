import React from "react";
import Header from "../../components/layout/Header";
import Hero from "./Hero";
import UpcomingTours from "./UpcomingTours";

export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <UpcomingTours/>
    </div>
  );
}

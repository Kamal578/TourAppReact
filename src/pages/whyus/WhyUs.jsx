import React from "react";
import WhoWeAre from "./WhoWeAre";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import AgencyInfo from "./AgencyInfo";
import Responsibility from "./Responsibility";

export default function WhyUs() {
  return (
    <div>
      <Header />
      <WhoWeAre />
      <AgencyInfo />
      <Responsibility />
      <Footer />
    </div>
  );
}

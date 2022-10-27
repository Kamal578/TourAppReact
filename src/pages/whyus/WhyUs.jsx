import React from "react";
import WhoWeAre from "./WhoWeAre";
import Header from "../../components/layout/Header";
import AgencyInfo from "./AgencyInfo";
import Responsibility from "./Responsibility";

export default function WhyUs() {
  return (
    <div>
      <Header currentPage={4} color="#666666"/> <br />
      <WhoWeAre />
      <AgencyInfo />
      <Responsibility />
    </div>
  );
}

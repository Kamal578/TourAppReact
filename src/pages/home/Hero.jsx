import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="h-screen bg-hero-bg bg-cover bg-center flex flex-col items-center justify-center text-white z-0">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <p className="text-7xl font-primary font-bold mb-5">
          Discover incredible <span className="text-green">places in</span>{" "}
          Azerbaijan
        </p>
        <p className="text-2xl font-primary font-semibold mt-5 mb-10">
          We are ready to guide you to travel in places in Azerbaijan with
          information for all of them
        </p>
      </div>
      <NavLink
        exact to="/tours"
        className="text-3xl mt-7 font-primary font-normal border-2 border-white rounded-full py-3 px-5 hover:border-white hover:text-green hover:bg-white transition-all duration-200"
      >
        {" "}
        Explore
      </NavLink>
    </div>
  );
}

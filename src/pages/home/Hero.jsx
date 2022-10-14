import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeroBg from "../../assets/img/home-hero-bg.png";
import GazangulLake from "../../assets/img/Gazangul_Lake.png";
import GrandCanyon from "../../assets/img/grandcanyon.jpg";

const images = [HeroBg, GazangulLake, GrandCanyon];

export default function Hero() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        return v === 2 ? 0 : v + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen  bg-cover bg-center flex flex-col items-center justify-center text-white z-0"
      style={{ backgroundImage: `url(${images[value]})`, transition: "500ms" }}
    >
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
        exact
        to="/tours"
        className="text-3xl mt-7 font-primary font-normal border-2 border-white rounded-full py-3 px-5 hover:border-white hover:text-green hover:bg-white transition-all duration-200"
      >
        {" "}
        Explore
      </NavLink>
    </div>
  );
}

import React from "react";
import Grid1 from "../../assets/img/tourBg/Scenery.png";
import Grid2 from "../../assets/img/tourBg/AlbanKilsesi.png";
import Grid3 from "../../assets/img/tourBg/BakuF1.png";
import Grid4 from "../../assets/img/tourBg/KhanPalace.png";

const images = [Grid1, Grid2, Grid3, Grid4];

let GridBackground = [];

images.forEach((image) => {
  GridBackground.push(<div style={{ backgroundImage: `url(${image})` }} className="bg-center bg-cover"></div>)
});


function Hero() {
  return (
    <div id="parent" className="h-screen relative">
      <div className="grid grid-cols-2 grid-rows-2 h-full">
        {GridBackground}
      </div>
      <h1 className="text-4xl font-bold select-none text-white md:text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
        Baku,Sheki Tour
      </h1>
    </div>
  );
}

export default Hero;

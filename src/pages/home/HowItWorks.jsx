import React from "react";
import CloudCheck from "../../assets/icons/CloudCheck.svg";
import OutlineFileSearch from "../../assets/icons/OutlineFileSearch.svg";
import PaperPlane from "../../assets/icons/OutlinePaperPlane.svg";

function HowItWorks() {
  return (
    <div className="bg-howItWorks relative w-screen h-[80vh] bg-no-repeat bg-cover bg-center max-w-full">
      <div className="absolute w-full h-full top-0 bg-whiteGradient text-7xl bg-white bg-opacity-80 flex flex-col justify-center gap-20">
        <p className="font-primary text-7xl text-center mt-10 font-bold text-darkerGreen">
          How it works?
        </p>
        <div className="flex flex-row justify-between items-center px-[5rem]">
          <div
            id="howItWorksEl1"
            className="flex flex-col flex-wrap items-center justify-between"
          >
            <img src={OutlineFileSearch} className="w-[6rem]" alt="notepad" />
            <p className="text-2xl text-greyish font-primary font-normal">Explore Tours</p>
          </div>
          <div
            id="howItWorksEl2"
            className="flex flex-col items-center justify-between"
          >
            <img src={PaperPlane} className="w-[6rem]" alt="paperplane" />
            <p className="text-2xl text-greyish font-primary font-normal">Find your tours</p>
          </div>
          <div
            id="howItWorksEl2"
            className="flex flex-col items-center justify-between"
          >
            <img src={CloudCheck} className="w-[6rem]" alt="paperplane" />
            <p className="text-2xl text-greyish font-primary font-normal">Start booking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// style={{color: 'white', background: "linear-gradient(172.95deg, rgba(255, 255, 255, 0.2) 5.5%, rgba(255, 255, 255, 0.2) 94.69%), rgba(255, 255, 255, 0.87);"}}
export default HowItWorks;

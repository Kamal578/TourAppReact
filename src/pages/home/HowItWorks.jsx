import React from "react";
import CloudCheck from "../../assets/icons/CloudCheck.svg";
import OutlineFileSearch from "../../assets/icons/OutlineFileSearch.svg";
import PaperPlane from "../../assets/icons/OutlinePaperPlane.svg";

function HowItWorks() {
  return (
    <div className="bg-howItWorks relative w-screen h-[50vh] bg-no-repeat bg-cover bg-center max-w-full">
      <div className="absolute w-full h-full top-0 bg-whiteGradient text-7xl bg-white bg-opacity-50 flex flex-col gap-2">
        <p className="font-primary text-7xl text-center mt-10 font-bold text-darkerGreen">
          How it works?
        </p>
        <div className="flex flex-row justify-between items-center px-[5rem]">
          <div
            id="howItWorksEl1"
            className="flex flex-col flex-wrap items-center justify-center"
          >
            <img src={OutlineFileSearch} className="w-[5rem]" alt="notepad" />
            <p className="text-2xl">Explore Tours</p>
          </div>
          <div
            id="howItWorksEl2"
            className="flex flex-col items-center justify-center"
          >
            <img src={PaperPlane} className="w-[5rem]" alt="paperplane" />
            <p className="text-2xl">Find your tours</p>
          </div>
          <div
            id="howItWorksEl2"
            className="flex flex-col items-center justify-center"
          >
            <img src={CloudCheck} className="w-[5rem]" alt="paperplane" />
            <p className="text-2xl">Start booking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// style={{color: 'white', background: "linear-gradient(172.95deg, rgba(255, 255, 255, 0.2) 5.5%, rgba(255, 255, 255, 0.2) 94.69%), rgba(255, 255, 255, 0.87);"}}
export default HowItWorks;

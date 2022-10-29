import React from "react";
import CloudCheck from "../../assets/icons/CloudCheck.svg";
import OutlineFileSearch from "../../assets/icons/OutlineFileSearch.svg";
import PaperPlane from "../../assets/icons/OutlinePaperPlane.svg";

function HowItWorks() {
  return (
    <div className="bg-howItWorks relative w-screen h-[80vh] bg-no-repeat bg-cover bg-center max-w-full">
      <div className="absolute w-full h-full top-0 bg-whiteGradient text-7xl bg-white bg-opacity-80 flex flex-col justify-center gap-20">
        <p className="text-4xl md:text-7xl text-center mt-10 font-bold text-darkerGreen">
          How it works?
        </p>
        <div className="flex flex-col md:flex-row justify-around md:justify-between items-center px-5 md:px-[5rem]">
          <div
            id="howItWorksEl1"
            className="flex flex-col flex-wrap items-center justify-between"
          >
            <img
              src={OutlineFileSearch}
              className="md:w-[6rem] w-[4rem]"
              alt="notepad"
            />
            <p className="text-2xl text-greyish font-normal text-center">
              Explore Tours
            </p>
          </div>
          <div
            id="howItWorksEl2"
            className="flex flex-col items-center justify-between"
          >
            <img
              src={PaperPlane}
              className="md:w-[6rem] w-[4rem]"
              alt="paperplane"
            />
            <p className="text-2xl text-greyish text-center">
              Find your tours
            </p>
          </div>
          <div
            id="howItWorksEl2"
            className="flex flex-col items-center justify-between"
          >
            <img
              src={CloudCheck}
              className="md:w-[6rem] w-[4rem]"
              alt="paperplane"
            />
            <p className="text-2xl text-greyish font-normal text-center">
              Start booking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

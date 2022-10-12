import React from "react";
import AboutPic from "../.././assets/img/AboutImage.png";
import AboutPic2 from "../.././assets/img/lankaran3.png";
const WhoWeAre = () => {
  return (
    <div className="pt-20">
      <h3 className="text-6xl font-bold text-center text-darkerGreen">About</h3>
      <div className="flex gap-16 mx-32 mt-10">
        <img src={AboutPic} alt="" className="w-[29.1rem] h-[43.6rem]" />
        <div>
          <h4 className="mb-6 text-6xl font-bold text-center text-darkerGreen">
            Who we are?
          </h4>
          <p className="m-10 text-3xl leading-10 text-black-rgba">
            We are ready to help you to spend an amazing vacation day in our
            country’s various places. Our company is a trusted professional
            company based in Azerbaijan. You will be provided with deatiled
            information about accommodation, meals, transport services. The
            highly-experiences, well-developed, multicultural guides will
            satisfy all the things you need in your vacation. The
            highly-experiences, well-developed, multicultural guides will
            satisfy all the things you need in your vacation.
          </p>
        </div>
      </div>
      <div className="flex px-32 pb-9 gap-36">
        <div className="">
          <h4 className="max-w-md mt-16 mb-5 text-3xl font-bold leading-10 mr-15 text-darkerGreen">
            We guide you to see wonderful views both in cities and countryside.{" "}
          </h4>
          <p className="pr-16 text-3xl leading-10 text-black-rgba">
            Tours in Azerbaijan will impress you with its places and traditions.
            Our company plays an important role to help.
          </p>
        </div>
        <img src={AboutPic2} alt={AboutPic2} className="-mt-7"/>
      </div>
    </div>
  );
};

export default WhoWeAre;

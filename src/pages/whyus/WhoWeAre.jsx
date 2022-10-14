import React from "react";
import AboutPic from "../.././assets/img/AboutImage.png";
import AboutPic2 from "../.././assets/img/lankaran3.png";
const WhoWeAre = () => {
  return (
    <div className="mt-20">
      <h3 className="font-bold text-center 2xl:text-6xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl text-darkerGreen">
        About
      </h3>
      <div className="flex mt-10 2xl:mx-32 xl:mx-32 lg:mx-32 md:mx-16 sm:mx-0 xl:gap-10 lg:gap-10 md:gap-10">
        <img
          src={AboutPic}
          alt=""
          className="2xl:w-[29.1rem] 2xl:h-[43.6rem] xl:w-[24rem] xl:h-[38rem] lg:w-[20rem] lg:h-[34rem] md:w-[20rem] md:h-[34rem] sm:w-[18rem] sm:h-[30rem]"
        />
        <div className="">
          <h4 className="mb-6 font-bold text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl text-darkerGreen">
            Who we are?
          </h4>
          <p className="xl:leading-10 xl:text-2xl text-black-rgba lg:text-xl md:text-xl lg:leading-tight md:leading-tight sm:leading-tight">
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
      <div className="flex 2xl:px-32 xl:px-30 lg:mx-25 md:px-20 sm:px-20 pb-9 2xl:gap-36">
        <div className="">
          <h4 className="max-w-md mt-16 mb-5 font-bold leading-10 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl 2xl:mr-15 text-darkerGreen lg:leading-normal md:leading-tight sm:leading-tight">
            We guide you to see wonderful views both in cities and countryside.{" "}
          </h4>
          <p className="pr-16 2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl sm:text-xl 2xl:leading-10 xl:leading-7 lg:leading-normal md:leading-tight sm:leading-tight text-black-rgba">
            Tours in Azerbaijan will impress you with its places and traditions.
            Our company plays an important role to help.
          </p>
        </div>
        <img
          src={AboutPic2}
          alt={AboutPic2}
          className="2xl:-mt-7 xl:mb-7 2xl:w-[36.2rem] xl:w-[33rem] lg:w-[29rem] md:w-[27rem] sm:w-[27rem] 2xl:h-[22.7rem] xl:h-[20.7rem] lg:h-[18.7rem] md:h-[15rem] sm:h-[13rem]"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;

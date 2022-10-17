import React from "react";
import HeydarAliyevCenter1 from "../../assets/img/HeydarAliyevCenter1.png";
import HeydarAliyevCenter2 from "../../assets/img/HeydarAliyevCenter2.png";
import { NavLink } from "react-router-dom";
import KhanSarayInside from "../../assets/img/KhanSarayInside.png";

function AboutTour() {
  return (
    <div className="h-full max-w-screen pt-10">
      <h1 className="text-center text-3xl font-bold py-10 text-darkerGreen md:text-7xl">
        About the tour
      </h1>
      <div
        id="section1"
        className="px-10 mt-10 flex flex-col gap-5 justify-center items-center md:flex-row md:px-10 md:gap-16"
      >
        <div
          id="aboutTourImage1"
          className="w-[100%] h-[50vh] bg-cover bg-center md:w-[35%] md:h-[80vh]"
          style={{ backgroundImage: `url(${HeydarAliyevCenter1})` }}
        ></div>
        <p className="text-2xl text-thin font-[#666666] w-[100%] md:w-[50%]">
          You can be guided by our professional team members to have an amazing
          trip in Lachin and Shusha. views of the Lesser Caucasus Mountains and
          Dashalti river valley, is one of the best spots to experience it.
          Before the conflict, the area was frequently used as a location for
          cultural events, such as Novruz holiday celebrations and exciting
          matches of Chovgan, an ancient form of polo, because of its setting
          and vast flat expanse.
        </p>
      </div>
      <div
        id="section2"
        className="px-10 mt-10 flex flex-col-reverse gap-5 justify-center items-center md:flex-row md:px-10 md:gap-16"
      >
        <p className="text-2xl text-thin font-[#666666] w-[100%] md:w-[50%]">
          You can be guided by our professional team members to have an amazing
          trip in Lachin and Shusha. views of the Lesser Caucasus Mountains and
          Dashalti river valley, is one of the best spots to experience it.
          Before the conflict, the area was frequently used as a location for
          cultural events, such as Novruz holiday celebrations and exciting
          matches of Chovgan, an ancient form of polo, because of its setting
          and vast flat expanse.
        </p>
        <div
          id="aboutTourImage2"
          className="w-[100%] h-[50vh] bg-cover bg-center md:w-[35%] md:h-[80vh]"
          style={{ backgroundImage: `url(${HeydarAliyevCenter2})` }}
        ></div>
      </div>
      <div
        id="section3"
        className="px-10 mt-10 flex flex-col gap-5 justify-center items-center md:px-36"
      >
        <p className="text-2xl text-thin font-[#666666] ">
          You can be guided by our professional team members to have an amazing
          trip in Lachin and Shusha. views of the Lesser Caucasus Mountains and
          Dashalti river valley, is one of the best spots to experience it.
          Before the conflict, the area was frequently used as a location for
          cultural events, such as Novruz holiday celebrations and exciting
          matches of Chovgan, an ancient form of polo, because of its setting
          and vast flat expanse.
        </p>
        <p className="text-2xl text-thin font-[#666666] ">
          You can be guided by our professional team members to have an amazing
          trip in Lachin and Shusha. views of the Lesser Caucasus Mountains and
          Dashalti river valley, is one of the best spots to experience it.
          Before the conflict, the area was frequently used as a location for
          cultural events, such as Novruz holiday celebrations and exciting
          matches of Chovgan, an ancient form of polo, because of its setting
          and vast flat expanse.
        </p>
        <p className="text-2xl text-thin font-[#666666] ">
          The enormous and exquisitely woven carpets in Shusha, a historical
          center of Azerbaijani carpet-weaving, were treasured well beyond the
          region's borders. They were decorated with vibrant colors and patterns
          inspired by Karabakh's lush landscape. The presence of a renowned
          carpet museum here, which was devoted to the Karabakh school of
          carpet-weaving until the city was occupied in 1992, serves to
          emphasize its singularity.
        </p>
        <NavLink
          exact
          to="/gallery"
          className="text-2xl text-center border-2 border-darkerGreen text-darkerGreen flex flex-row items-center justify-center px-5 py-3 rounded-lg font-primary font-semibold mt-5 hover:border-green hover:text-green transition-all duration-300"
        >
          See more
        </NavLink>
      </div>
      <div
        className="bg-cover bg-center h-[65vh] mt-10"
        style={{ backgroundImage: `url(${KhanSarayInside})` }}
      ></div>
    </div>
  );
}

export default AboutTour;

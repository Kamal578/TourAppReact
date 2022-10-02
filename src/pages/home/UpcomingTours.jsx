import React from "react";
import Tour from "./Tour";
import Guba from "../../assets/img/Guba.jpg";
import Gusar from "../../assets/img/Gusar.jpg";
import Baku from "../../assets/img/tour1.jpg";
import Sheki from "../../assets/img/Sheki.jpg";

export default function UpcomingTours() {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-100 my-10">
      <p className="text-center text-7xl text-darkerGreen font-primary font-bold mb-10">
        Upcoming Tours
      </p>
      <div className="flex flex-row gap-x-2 md:flex-row">
        <Tour
          title="Baku City Tour"
          date="01-08.10.2022"
          time="10:00 - 23:00"
          thumbnail={Baku}
          price={100}
        />
        <Tour
          title="Baku, Sheki"
          date="01-08.10.2022"
          time="10:00 - 23:00"
          thumbnail={Sheki}
          price={100}
        />
        <Tour
          title="Quba, Shamakhi"
          date="01-08.10.2022"
          time="10:00 - 23:00"
          thumbnail={Guba}
          price={100}
        />
        <Tour
          title="Quba, Qusar"
          date="01-08.10.2022"
          time="10:00 - 23:00"
          thumbnail={Gusar}
          price={100}
        />
      </div>
    </div>
  );
}

import React from "react";
import Tour from "./Tour";
import Guba from "../../assets/img/Guba.jpg";
import Gusar from "../../assets/img/Gusar.jpg";
import Baku from "../../assets/img/tour1.jpg";
import Sheki from "../../assets/img/Sheki.jpg";
import { NavLink } from "react-router-dom";

export default function UpcomingTours() {
  const TourInfoExample = [
    {
      "thumbnail":Baku,
      "title":"Baku City Tour",
      "date":"01-08.10.2022",
      "time":"10:00 - 23:00",
      "price":100
    },
    {
      "thumbnail":Sheki,
      "title":"Baku, Sheki",
      "date":"01-08.10.2022",
      "time":"10:00 - 23:00",
      "price":100
    },
    {
      "thumbnail":Guba,
      "title":"Quba,Shamakhi",
      "date":"01-08.10.2022",
      "time":"10:00 - 23:00",
      "price":100
    },
    {
      "thumbnail":Gusar,
      "title":"Quba, Qusar",
      "date":"01-08.10.2022",
      "time":"10:00 - 23:00",
      "price":100
    }
  ]
  let Tours = [];

  for (let i = 0; i < TourInfoExample.length; i++) {
    Tours.push(
      <Tour
        title={TourInfoExample[i].title}
        date={TourInfoExample[i].date}
        time={TourInfoExample[i].time}
        thumbnail={TourInfoExample[i].thumbnail}
        price={TourInfoExample[i].price}
      />
    );
  }
  return (
    <div className="flex flex-col items-center justify-center my-10 bg-white h-100">
      <p className="mb-10 font-bold text-center text-7xl text-darkerGreen font-primary">
        Upcoming Tours
      </p>
      <div className="flex flex-col items-center justify-center gap-x-3 md:flex-row">
        {/* <Tour
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
        /> */}
        {Tours}
      </div>
      <div className="pt-10 text-2xl font-semibold transition-all duration-200 border-2 border-transparent text-darkerGreen font-primary hover:border-b-darkerGreen">
        <NavLink exact to="/tours">View more</NavLink>
      </div>
    </div>
  );
}

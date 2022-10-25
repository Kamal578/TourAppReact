import React from "react";
import Tour from "../../components/common/Tour";
import Guba from "../../assets/img/Guba.jpg";
import Gusar from "../../assets/img/Gusar.jpg";
import Baku from "../../assets/img/tour1.jpg";
import Sheki from "../../assets/img/Sheki.jpg";
import { NavLink } from "react-router-dom";

export default function UpcomingTours() {
  const TourInfoExample = [
    {
      thumbnail: Baku,
      title: "Baku City Tour",
      date: "01-08.10.2022",
      time: "10:00 - 23:00",
      price: 100,
    },
    {
      thumbnail: Sheki,
      title: "Baku, Sheki",
      date: "01-08.10.2022",
      time: "10:00 - 23:00",
      price: 100,
    },
    {
      thumbnail: Guba,
      title: "Quba,Shamakhi",
      date: "01-08.10.2022",
      time: "10:00 - 23:00",
      price: 100,
    },
    {
      thumbnail: Gusar,
      title: "Quba, Qusar",
      date: "01-08.10.2022",
      time: "10:00 - 23:00",
      price: 100,
    },
  ];
  let Tours = [];


  TourInfoExample.forEach((tour)=>{
    Tours.push(
      <Tour
        title={tour.title}
        date={tour.date}
        time={tour.time}
        thumbnail={tour.thumbnail}
        price={tour.price}
      />
    );
  })
  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-white ">
      <p className="mb-10 text-2xl font-bold text-center text-darkerGreen font-primary md:text-7xl">
        Upcoming Tours
      </p>
      <div className="flex flex-col items-center justify-center w-full pt-24 bg-akaroa gap-x-3 md:flex-row">
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
      <div className="flex items-center justify-center w-full py-10 text-2xl font-semibold bg-akaroa">
        <NavLink
          exact
          to="/tours"
          className="transition-all duration-200 border-2 border-transparent text-darkerGreen font-primary hover:border-b-darkerGreen"
        >
          View more
        </NavLink>
      </div>
    </div>
  );
}

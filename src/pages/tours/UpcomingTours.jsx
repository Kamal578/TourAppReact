import React, { useEffect, useState } from "react";
import Tour from "../../components/common/Tour";
import Guba from "../../assets/img/Guba.jpg";
import Gusar from "../../assets/img/Gusar.jpg";
import Baku from "../../assets/img/tour1.jpg";
import Sheki from "../../assets/img/Sheki.jpg";
import { NavLink } from "react-router-dom";

const UpcomingTours = () => {
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
  for (let i = 0; i < 4; i++) {
    let tour = TourInfoExample[i];
    Tours.push(
      <Tour
        title={tour.title}
        date={tour.date}
        time={tour.time}
        thumbnail={tour.thumbnail}
        price={tour.price}
      />
    );
  }
  return (
    <div className="flex flex-col items-center justify-center pt-10 bg-akaroa ">
      <p className="mb-10 text-2xl font-bold text-center text-darkerGreen font-primary md:text-7xl">
        Upcoming Tours
      </p>
      <div
        className="bg-akaroa grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-[2em] justify-center content-center"
      >
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
};
export default UpcomingTours;

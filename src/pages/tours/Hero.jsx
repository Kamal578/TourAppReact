import React from "react";
import axios from "axios";
import Tour from "../../components/common/Tour";
import Guba from "../../assets/img/Guba.jpg";
import Gusar from "../../assets/img/Gusar.jpg";
import Baku from "../../assets/img/tour1.jpg";
import Sheki from "../../assets/img/Sheki.jpg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Tours = () => {
  const url = "https://admintour.thejavachip.com/api/tour/";
  const getAllTours = async () => {
    await axios
      .get(url)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getAllTours();
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

  TourInfoExample.forEach((tour) => {
    Tours.push(
      <Tour
        title={tour.title}
        date={tour.date}
        time={tour.time}
        thumbnail={tour.thumbnail}
        price={tour.price}
        className="flex-child"
      />
    );
  });
  return (
    <div className="flex flex-col items-center justify-center pt-24 mb-10 bg-white h-100">
      <p className="mb-10 text-3xl font-bold text-center text-darkerGreen font-primary md:text-7xl">
        All Tours
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-[5em] justify-
        center content-center"
      >
        {Tours}
      </div>
      <div className="pt-10 text-2xl font-semibold transition-all duration-200 border-2 border-transparent text-darkerGreen font-primary hover:border-b-darkerGreen">
        <NavLink exact to="/tours">
          View more
        </NavLink>
      </div>
    </div>
  );
};

export default Tours;

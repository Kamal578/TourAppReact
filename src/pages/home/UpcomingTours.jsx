import React, { useEffect, useState } from "react";
import Tour from "../../components/common/Tour";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function UpcomingTours() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const url = "https://admintour.thejavachip.com/api/upcoming_tour";
    const getAllTours = async () => {
      await axios
        .get(url)
        .then((response) => {
          setTours(response.data.sliders);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllTours();
  }, []);
  // const TourInfoExample = [
  //   {
  //     thumbnail: Baku,
  //     title: "Baku City Tour",
  //     date: "01-08.10.2022",
  //     time: "10:00 - 23:00",
  //     price: 100,
  //   },
  //   {
  //     thumbnail: Sheki,
  //     title: "Baku, Sheki",
  //     date: "01-08.10.2022",
  //     time: "10:00 - 23:00",
  //     price: 100,
  //   },
  //   {
  //     thumbnail: Guba,
  //     title: "Quba,Shamakhi",
  //     date: "01-08.10.2022",
  //     time: "10:00 - 23:00",
  //     price: 100,
  //   },
  //   {
  //     thumbnail: Gusar,
  //     title: "Quba, Qusar",
  //     date: "01-08.10.2022",
  //     time: "10:00 - 23:00",
  //     price: 100,
  //   },
  // ];
  return (
    <div className="flex flex-col items-center justify-center my-10 bg-white h-100">
      <p className="mb-10 text-5xl font-bold text-center max-xss:text-3xl md:text-7xl text-darkerGreen font-primary">
        Upcoming Tours
      </p>
      <div className="flex flex-col flex-wrap items-center justify-center gap-x-3 md:flex-row">
        {tours.map((tour) => (
          <Tour
            key={tour.title}
            title={tour.title}
            date={tour.date}
            time={tour.time}
            thumbnail={tour.thumbnail}
            price={tour.price}
          />
        ))}
      </div>
      <div className="pt-10 text-2xl font-semibold transition-all duration-200 border-2 border-transparent text-darkerGreen font-primary hover:border-b-darkerGreen">
        <NavLink exact to="/tours">
          View more
        </NavLink>
      </div>
    </div>
  );
}

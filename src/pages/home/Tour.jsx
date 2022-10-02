import React from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Tour(props) {
  const yellowStyle = { color: "#E8A908" };
  return (
    <div className="flex flex-col items-left justify-center ">
      <div
        style={{ backgroundImage: `url(${props.thumbnail})` }}
        className="border-transparent bg-cover bg-center rounded-lg px-36 py-60 m-2"
      ></div>
      {/* image */}
      <div className="flex flex-col items-left gap-y-2">
        <p className="text-3xl text-left font-primary font-semibold text-darkerGreen">
          {props.title}
        </p>
        <p className="text-2xl text-left font-primary font-normal text-black flex flex-row gap-2">
          <AiOutlineCalendar style={yellowStyle} />
          {props.date}
        </p>
        <p className="text-2xl text-left font-primary font-normal text-black flex flex-row gap-2">
          <AiOutlineClockCircle style={yellowStyle} />
          {props.time}
        <span style={yellowStyle} className="font-medium">{props.price}$</span>
        </p>
        <NavLink exact to="/" className="bg-darkerGreen font-primary text-white px-5 py-4 border-transparent rounded-lg text-2xl flex items-center justify-center">
            View Details
        </NavLink>
      </div>
    </div>
  );
}

export default Tour;

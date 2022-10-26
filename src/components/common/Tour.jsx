import React from "react";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Tour(props) {
  const yellowStyle = { color: "#E8A908" };
  return (
    <div className="flex flex-col items-left justify-center">
      <div
        id="tourImage"
        style={{ backgroundImage: `url(${props.thumbnail})` }}
        className="border-transparent bg-cover bg-center rounded-lg w-full h-[70vh] m-2"
      ></div>
      <div className="flex flex-col items-left gap-y-2">
        <p className="text-3xl text-left font-primary font-semibold text-darkerGreen">
          {props.title}
        </p>
        <p className="text-2xl text-left font-primary font-normal text-black flex flex-row gap-2">
          <AiOutlineCalendar style={yellowStyle} />
          {props.date}
        </p>
        <p className="text-2xl text-left font-primary font-normal text-black flex flex-row gap-2 justify-between">
          <span className="flex flex-row gap-2">
            <AiOutlineClockCircle style={yellowStyle} />
            {props.time}
          </span>
          <span style={yellowStyle} className="font-medium">
            {props.price}$
          </span>
        </p>
        <NavLink
          exact
          to="/tourInnerPage"
          className="bg-darkerGreen font-primary text-white w-full h-[20%] border-2 border-transparent rounded-lg text-2xl flex items-center justify-center hover:bg-transparent hover:border-darkerGreen hover:text-darkerGreen transition-all duration-200 md:h-[10vh]"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
}

export default Tour;

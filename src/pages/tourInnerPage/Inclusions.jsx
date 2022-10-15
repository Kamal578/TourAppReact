import React from "react";
import { BiBus } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

function Inclusions() {
  const yellowStyle = { color: "#E8A908", height: "10vh" };
  return (
    <div className="h-screen md:h-[70vh] bg-pineglade flex flex-col items-center gap-10">
      <h1 className="text-center text-3xl font-bold py-10 text-darkerGreen md:text-7xl">
        What is included?
      </h1>
      <ul
        id="inclusions"
        className="flex flex-col gap-20 text-xl items-center justify-between font-bold text-[#333333] md:flex-row md:text-4xl"
      >
        <li className="flex flex-col gap-2 items-center">
          <BiBus style={yellowStyle} />
          Transportation
        </li>
        <li className="flex flex-col gap-2 items-center">
          <GiKnifeFork style={yellowStyle} />
          Meals
        </li>
        <li className="flex flex-col gap-2 items-center">
          <AiFillHome style={yellowStyle} />
          Acommodation
        </li>
      </ul>
    </div>
  );
}

export default Inclusions;

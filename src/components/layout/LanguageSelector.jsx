import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function LanguageSelector() {
  return (
    <div className="hover:cursor-pointer">
      <select className="pr-10 text-xl font-bold text-white bg-transparent border-transparent rounded appearance-none w-35 border-1 hover:border-gray-400 focus:outline-none hover:cursor-pointer ">
        <option value={"eng"} className="text-black bg-transparent">Eng</option>
        <option value={"aze"} className="text-black bg-transparent">Aze</option>
        <option value={"rus"} className="text-black bg-transparent">Rus</option>
      </select>
      <MdOutlineKeyboardArrowDown size={'25px'} className="relative text-white left-14 -top-6"/>
    </div>
  );
}

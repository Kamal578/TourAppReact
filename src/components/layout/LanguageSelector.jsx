import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function LanguageSelector({color}) {
  return (
    <div className="">
      <select className={`text-${color} flex items-center pr-1 text-xl bg-transparen text- size-4`}>
        <option value="eng">
          Eng
        </option>
        <option value="aze">
          Aze
        </option>
        <option value="rus">
          Rus
        </option>
      </select>
    </div>
  );
}

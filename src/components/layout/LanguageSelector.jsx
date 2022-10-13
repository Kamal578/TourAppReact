import React from "react";

export default function LanguageSelector() {
  return (
    <div className="">
      <select className="flex items-center pr-1 text-xl text-white bg-transparent border-white size-4">
        <option value="eng" className="text-black bg-transparent">
          Eng
        </option>
        <option value="aze" className="text-black bg-transparent">
          Aze
        </option>
        <option value="rus" className="text-black bg-transparent">
          Rus
        </option>
      </select>
    </div>
  );
}

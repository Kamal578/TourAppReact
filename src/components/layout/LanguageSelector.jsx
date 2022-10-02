import React from "react";

export default function LanguageSelector() {
  return (
    <div>
      <select className="text-xl font-bold rounded border-1 border-transparent text-white pl-5 pr-10 bg-transparent hover:border-gray-400 focus:outline-none appearance-none">
        <option value={"Eng"} className="bg-transparent">Eng</option>
        <option value={"Aze"} className="bg-transparent">Aze</option>
        <option value={"Rus"} className="bg-transparent">Rus</option>
      </select>
    </div>
  );
}

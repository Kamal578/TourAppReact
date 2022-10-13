import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchInput({ color }) {
  return (
    <div className="search-box">
      <button className="btn-search">
        <AiOutlineSearch style={{ color: color }} />
      </button>
      <input
        type="text"
        className={`input-search  hover:border-black border-black hover:border-2`}
        placeholder="Search for tours..."
        style={{ color: color, "::placeholder": color }}
      />
    </div>
  );
}

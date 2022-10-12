import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchInput(props) {
  return (
    <div className="search-box">
      <button className="btn-search">
        <AiOutlineSearch style={{color:props.color}}/>
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Search for tours..."
        style={{color: props.color, '::placeholder': props.color}}
      />
    </div>
  );
}

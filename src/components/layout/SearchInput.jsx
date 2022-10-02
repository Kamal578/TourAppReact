import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'

export default function SearchInput() {
  return (
    <div className="search-box">
        <button className="btn-search"><AiOutlineSearch/></button>
        <input type="text" className="input-search" placeholder="Search for tours..."/>
    </div>
  );
}

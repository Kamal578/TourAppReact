import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function Header({ color, currentPage }) {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div className="w-full">
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="flex items-center justify-between">
          <div className="ml-2">
            <NavLink
              exact
              to="/"
              className="text-4xl font-bold select-none text-green font-logo"
            >
              Tour.
            </NavLink>
          </div>
          <div id="NavItems" className="hidden space-x-6 md:flex">
            <NavLink
              exact
              to={"/"}
              className={
                navbar
                  ? `header-link ${currentPage === 1 && "border-green"}`
                  : `header-link active ${currentPage === 1 && "border-green"}`
              }
              style={navbar ? { color: "white" } : { color: color }}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to={"/tours"}
              className={
                navbar
                  ? `header-link ${currentPage === 2 && "border-green"}`
                  : `header-link active ${currentPage === 2 && "border-green"}`
              }
              style={navbar ? { color: "white" } : { color: color }}
            >
              Tours
            </NavLink>
            <NavLink
              exact
              to={"/gallery"}
              className={
                navbar
                  ? `header-link ${currentPage === 3 && "border-green"}`
                  : `header-link active ${currentPage === 3 && "border-green"}`
              }
              style={navbar ? { color: "white" } : { color: color }}
            >
              Gallery
            </NavLink>
            <NavLink
              exact
              to={"/whyUs"}
              className={
                navbar
                  ? `header-link ${currentPage === 4 && "border-green"}`
                  : `header-link active ${currentPage === 4 && "border-green"}`
              }
              style={navbar ? { color: "white" } : { color: color }}
            >
              Why us
            </NavLink>
            <NavLink
              exact
              to={"/contact"}
              className={
                navbar
                  ? `header-link ${currentPage === 5 && "border-green"}`
                  : `header-link active ${currentPage === 5 && "border-green"}`
              }
              style={navbar ? { color: "white" } : { color: color }}
            >
              Contact
            </NavLink>
          </div>
          <div id="SearchInput" className="search-box">
            <button className="btn-search">
              <AiOutlineSearch
                style={navbar ? { color: "white" } : { color: color }}
              />
            </button>
            <input
              type="text"
              className={`input-search  hover:border-black border-black hover:border-2`}
              placeholder="Search for tours..."
              style={{ color: color, "::placeholder": color }}
            />
          </div>
          <div id="LanguageSelector" className="">
            <select
              className={`text-${
                navbar ? "white" : color
              } flex items-center pr-1 text-xl bg-transparen text- size-4`}
            >
              <option value="eng">Eng</option>
              <option value="aze">Aze</option>
              <option value="rus">Rus</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

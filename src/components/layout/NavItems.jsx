import React from "react";
import { NavLink } from "react-router-dom";

export default function NavItems(props) {

  return (
    <div className="hidden space-x-6 md:flex">
      <NavLink
        exact
        to={"/"}
        className={`header-link ${props.currentPage === 1 && "border-green"}`}
      >
        Home
      </NavLink>
      <NavLink
        exact
        to={"/tours"}
        className={`header-link ${props.currentPage === 2 && "border-green"}`}
      >
        Tours
      </NavLink>
      <NavLink
        exact
        to={"/gallery"}
        className={`header-link ${props.currentPage === 3 && "border-green"}`}
      >
        Gallery
      </NavLink>
      <NavLink
        exact
        to={"/whyUs"}
        className={`header-link ${props.currentPage === 4 && "border-green"}`}
      >
        Why us
      </NavLink>
      <NavLink
        exact
        to={"/contact"}
        className={`header-link ${props.currentPage === 5 && "border-green"}`}
      >
        Contact
      </NavLink>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import NavItems from "./NavItems";
import SearchInput from "./SearchInput";

function Header({color,currentPage}) {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div className="w-full">
      <nav className={navbar? "navbar active" : "navbar"}>
        <div className="flex items-center justify-between">
          <div className="ml-2">
            <p className="text-4xl font-bold select-none text-green font-logo">
              Tour.
            </p>
          </div>
          <NavItems currentPage={currentPage} color={color}/>
          <SearchInput color={color}/>
          <LanguageSelector color={color} />
        </div>
      </nav>
    </div>
  );
}

export default Header;

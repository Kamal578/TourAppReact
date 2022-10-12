import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import NavItems from "./NavItems";
import SearchInput from "./SearchInput";

function Header(props) {
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
<<<<<<< HEAD
    <div className="w-full">
      <nav className={navbar? "navbar active" : "navbar"}>
=======
    <div>
      <nav className="container fixed z-40 w-full p-6 mx-auto bg-transparent snap-y:bg-darkerGreen">
>>>>>>> 13a7b684fd382bf8eb88796a4732b969e67f4b33
        <div className="flex items-center justify-between">
          <div className="ml-2">
            <p className="text-4xl font-bold select-none text-green font-logo">
              Tour.
            </p>
          </div>
<<<<<<< HEAD
          <NavItems currentPage={props.currentPage} color={props.color}/>
          <SearchInput color={props.color}/>
=======
          <NavItems currentPage={props.currentPage} />
          <SearchInput />
>>>>>>> 13a7b684fd382bf8eb88796a4732b969e67f4b33
          <LanguageSelector />
        </div>
      </nav>
    </div>
  );
}

export default Header;

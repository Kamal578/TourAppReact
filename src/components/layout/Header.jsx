import React from "react";
import LanguageSelector from "./LanguageSelector";
import NavItems from "./NavItems";
import SearchInput from "./SearchInput";

function Header(props) {
  return (
    <div>
      <nav className="container fixed z-40 w-full p-6 mx-auto bg-transparent snap-y:bg-darkerGreen">
        <div className="flex items-center justify-between">
          <div className="ml-2">
            <p className="text-4xl font-bold select-none text-green font-logo">
              Tour.
            </p>
          </div>
          <NavItems currentPage={props.currentPage} />
          <SearchInput />
          <LanguageSelector />
        </div>
      </nav>
    </div>
  );
}

export default Header;

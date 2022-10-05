import React from "react";
import LanguageSelector from "./LanguageSelector";
import NavItems from "./NavItems";
import SearchInput from "./SearchInput";

function Header(props) {
  return (
    <div>
      <nav className="fixed w-full container mx-auto p-6 bg-transparent z-40">
        <div className="flex items-center justify-between">
          <div className="ml-2">
            <p className="text-green text-4xl font-logo font-bold select-none">
              Tour.
            </p>
          </div>
          <NavItems currentPage={props.currentPage}/>
          <SearchInput />
          <LanguageSelector/>
        </div>
      </nav>
    </div>
  );
}

export default Header
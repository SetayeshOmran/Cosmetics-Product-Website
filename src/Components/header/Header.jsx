import React from "react";

import logo from "../../assets/logo.png";
import Logo from "./Logo";

import Searchbox from "./Searchbox";
import Menu from "./Menu";



const Header = () => {
  return (
    <nav className="text--black background-Yellow mt-1 md:mt-2">
      <div className=" flex flex-wrap  justify-between  px-4 py-2 md:p-6">
        <Logo />
        <div className=" flex">
        <Menu/>
         
          <Searchbox />
        </div>
      </div>
    </nav>
  );
};

export default Header;

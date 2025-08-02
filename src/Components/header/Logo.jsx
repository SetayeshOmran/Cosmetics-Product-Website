import React from 'react';
import logo from "../../assets/logo.png";
const Logo = () => {
    return (
        <a
          href="#"
          className="flex   space-x-4 rtl:space-x-reverse "
        >
          <img
            src={logo}
            className="h-10"
            alt="amazon logo"
          />
          <span className=" text-lg poppins-semibold font-normal whitespace-nowrap text--black ">
          amazon
          </span>
        </a>
    );
}

export default Logo;

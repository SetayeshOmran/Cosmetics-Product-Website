import React from "react";
import { useState } from "react";
import ItemMenu from "./ItemMenu";
import { MenuItem } from "./MenuData";
const MenubtnRes = () => {
  const [show,setShow]=useState(false);
  const changeBtn=()=>{
setShow(!show);

  }



  return (
    
    <div className="md:hidden flex bg-white flex-col z-20 rounded-md px-1 py-2 items-center justify-center">
      <button
     onClick={changeBtn}
        data-collapse-toggle="navbar-search"
        type="button"
        className="inline-flex hoverColor  items-center p-2 w-10 h-10 justify-center text-sm text--black"
        aria-controls="navbar-search"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className="mx-3 Header_cart__hbMUW cursor-pointer hoverColor"
        height="2em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
          fill="currentColor"
        ></path>
      </svg>
      {show && (
  <div className="mt-2 p-2 rounded z-20">
          <ul className="flex flex-col  md:p-0 poppins-medium md:space-x-8 rtl:space-x-reverse md:flex-row ">
        {MenuItem.map((item,index) => (
          <li key={index}>
            <a
              href="#"
              className="block py-2 px-1 text--blackpoppins-medium hoverColor"
              aria-current="page"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
  </div>
)}



    </div>
  );
};

export default MenubtnRes;

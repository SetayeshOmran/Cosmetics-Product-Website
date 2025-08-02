import React from "react";
import MenubtnRes from "./MenubtnRes";
import ItemMenu from "./ItemMenu";

const Menu = () => {
  return (
    <>
   
      <div className="flex md:order-2">
       <MenubtnRes/>
      </div>
     <ItemMenu/>
    </>
  );
};

export default Menu;

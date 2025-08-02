import React, { useState } from "react";
import { ProductsData } from "../../data/products";
import { motion } from "framer-motion";
import { useAutoAnimate } from '@formkit/auto-animate/react'
const Menu = () => {
  const [menuProduct, setMenuProduct] = useState(ProductsData);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)
  const filter = (type) => {
    setMenuProduct(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className="flex justify-evenly items-start mt-10" >
      <ul className="list-none pl-5 poppins-medium text--black  text-xl uppercase">
        <li onClick={()=>setMenuProduct(ProductsData)} className="mt-20   hoverColor">All</li>
        <li onClick={() => filter("skin care")} className="mt-5  hoverColor">
          Skin Care
        </li>
        <li onClick={() => filter("conditioner")} className="mt-5  hoverColor">
          Conditioner
        </li>
        <li onClick={() => filter("foundation")} className="mt-5  hoverColor">
          Foundation
        </li>
      </ul>
      <div className="boxProducts"  ref={parent}>
        {menuProduct.map((product, i) => (
          <div
          
            key={i}
            className="bg--white flex w-60 py-5 px-3  h-48 rounded-lg m-1 "
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div className="LeftSlide flex flex-col items-start justify-between">
              <div className="flex flex-col items-start">
                <span className="name poppins-semibold text-2xl text--black">
                  {product.name}
                </span>
                <span className="detail text-xs poppins-light mt-1 text--black">
                  {product.details}
                </span>
              </div>

              <span className="price text-3xl text--black poppins-bold">
                <b>{product.price} $</b>
              </span>
              <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#fff3aa", color: "black" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="px-2 py-2 bg-yellow-300 rounded-lg shadow-md"
    >
      buy Now
    </motion.button>
            </div>
            <div className="RightSlide">
              <img src={product.img} alt="" className="proImg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

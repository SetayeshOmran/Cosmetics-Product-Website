import React from "react";
import { motion } from "framer-motion";
const LeftHero = () => {
  return (
    <div className="w-20percent h-full flex flex-col gap-32 ">
      <motion.div className="z-30" initial={{scale:0.5}} animate={{ scale: 1 }} transition={{ duration:1}}>
        <h3 className="poppins-semibold text-2xl text--black uppercase w-40 ">
          skin protection cream
        </h3>
      </motion.div>

      <div>
        <h2 className="poppins-bold   poppins-bold text--black text-xl  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-col gap-2 ">
          <b>Trendy</b>
          <b className="mt-2">Collection</b>{" "}
        </h2>
        <p className="w-44 mt-2 text-lg">
          Seedily say has suitable disposal and boy. Exercise joy man children
          rejoiced.
        </p>
      </div>
    </div>
  );
};

export default LeftHero;

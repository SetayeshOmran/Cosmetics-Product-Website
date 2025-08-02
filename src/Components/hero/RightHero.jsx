import React from "react";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
const RightHero = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  useEffect(() => {
    const controls = animate(count, 100, { duration: 2 });
    return () => controls.stop();
  }, []);
  return (
    <div className="w-20percent h-full flex flex-col items-end responsive_leftHero" >
      <div className="flex flex-col items-end  h-48 " style={{zIndex:20}} >
        <span className=" poppins-bold text--black text-xl  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">1.5m</span>
        <span >Monthly traffic</span>
      </div>
      <div className="flex flex-col items-end justify-start h-60 xl:h-72 z-30 ">
        <div className="flex items-center justify-center ">


        <motion.span className="text-xl  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  poppins-bold text--black">
          {rounded} 
        </motion.span>
        <span className="text-xl  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl poppins-bold text--black">K</span>
        </div>
        <span className="flex justify-center items-center">Happy Customers</span>
      </div>
    </div>
  );
};

export default RightHero;

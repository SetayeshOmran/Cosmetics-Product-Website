import React from "react";
import hero from "../../assets/hero.png";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';


const CenterHero = () => {
  
const isMobile = useMediaQuery({ maxWidth: 1100 });
const initialLeft = isMobile ? "50rem" : "63rem";
const targetLeft = isMobile ? "40rem" : "58rem";
  const transition={
    duration:3,
    type:"spring"
  }
  return (

    <div className="w-35percent Center-hero">
      <div className="ImgSection">
        <motion.div
        initial={{top:"2rem"}}
        whileInView={{top:"6rem"}}
        transition={transition}
        className="BlueCircle"></motion.div>
        <motion.img
       whileInView={{top:"5rem"}}
       transition={transition}
       initial={{top:"6rem"}}
        
        
        className="HeroImg" src={hero} alt="" />
      </div>
      <motion.div
       initial={initialLeft}
       whileInView={targetLeft}
       transition={transition}
      
      className="SingUp w-48  xl:w-72 flex items-center justify-evenly mt-10">
        <div className="bg--white   h-10 xl:h-16 w-10 xl:w-16  rounded-full border--black flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="#343434"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="23px"
            width="23px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 1a5 5 0 0 1 5 5v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V6a5 5 0 0 1 5-5zm5 10h-2v1a1 1 0 0 0 1.993.117L17 12v-1zm-8 0H7v1a1 1 0 0 0 1.993.117L9 12v-1zm3-8a3 3 0 0 0-2.995 2.824L9 6v2h6V6a3 3 0 0 0-2.824-2.995L12 3z"></path>
            </g>
          </svg>
        </div>

        <div className="SignUpCart bg--white text--black text-sm  shadow2 xl:w-40 w-28 flex items-center justify-between py-2.5 px-2 rounded-2xl ">
          <span className="w-24">Best Signup Offers</span>
<div className="bg--white h-9 w-9  rounded-full border-solid border-2 border-sky-200 flex items-center justify-center">
<svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            ></path>
          </svg>
</div>

        </div>
      </motion.div>
    </div>
  );
};

export default CenterHero;

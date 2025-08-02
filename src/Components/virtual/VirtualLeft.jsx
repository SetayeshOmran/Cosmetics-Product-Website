import React from "react";
import shade from "../../assets/shade.png";

const VirtualLeft = () => {
  return (
    <div >
      <h2 className=" poppins-bold text--black  fontsize-35 uppercase">Virtual Try-On</h2>
      <div className="uppercase w-80 text-2xl mt-10 text--black ">Never Buy the wrong Shade Again!</div>
      <div className="felx flex-col gap-0 xl:gap-1 mt-10  ">
        <div className="poppins-bold text--black text-2xl uppercase ">
            
            Try Now!</div>
        <div className="w-52 h-16 ">
          <img className="marginLeft-tryText"  src={shade} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VirtualLeft;

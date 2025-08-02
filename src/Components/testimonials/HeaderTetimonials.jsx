import React from 'react';
import testimonialHero from "../../assets/testimonialHero.png";

const HeaderTetimonials = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center gap-6 px-4'>
      <div className="textTest text-center lg:text-left">
        <div className='poppins-bold text--black text-3xl md:text-4xl uppercase'>
          Top Rated
        </div>
        <p className='poppins-light text-sm pt-2 max-w-xs mx-auto lg:mx-0'>
          Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.
        </p>
      </div>

      <div className="testImg">
        <img src={testimonialHero} alt="" className='imgTest'/>
      </div>

      <div className="textTest text2 text-center lg:text-right">
        <div className='poppins-bold text--black text-4xl md:text-5xl uppercase'>
          100k
        </div>
        <p className='poppins-light text-sm pt-2'>Happy Customers with us</p>
      </div>
    </div>
  );
};

export default HeaderTetimonials;

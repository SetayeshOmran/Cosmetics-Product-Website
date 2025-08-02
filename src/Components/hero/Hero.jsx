import React from 'react';
import LeftHero from './LeftHero';
import CenterHero from './CenterHero';
import RightHero from './RightHero';


const Hero = () => {
    return (
        <div className='flex justify-between items-center mx-8 my-4'>
            <LeftHero/>
            <CenterHero/>
            <RightHero/>
        </div>
    );
}

export default Hero;

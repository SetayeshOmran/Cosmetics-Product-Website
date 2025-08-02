import React from 'react';

import VirtualLeft from './VirtualLeft';
import VirtualRight from './VirtualRight';
const Virtual = () => {
    return (
        <div className=' block  lg:flex justify-around   mt-30 mx-10'>
           <VirtualLeft/>
           <VirtualRight/>
        </div>
    );
}

export default Virtual;

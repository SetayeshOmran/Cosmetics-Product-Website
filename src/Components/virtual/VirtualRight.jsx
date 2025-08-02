import React from 'react';
import after from '../../assets/after.png'
import befor from '../../assets/before.png'
import ReactCompareImage from 'react-compare-image';
const VirtualRight = () => {
    return (
        <div className='w-full lg:w-1/3 '>
            <ReactCompareImage leftImage={befor} rightImage={after} />
        </div>
    );
}

export default VirtualRight;
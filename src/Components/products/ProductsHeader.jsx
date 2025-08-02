import React from 'react';
import plane from '../../assets/plane.png'
const ProductsHeader = () => {
    return (
        <div className='flex justify-center	 items-center mt-14'>
           <img className='w-28 mx-3' src={plane} alt="" />
           <div className=" poppins-bold text--black  text-3xl uppercase">Our Feature Products</div>
        </div>
    );
}

export default ProductsHeader;

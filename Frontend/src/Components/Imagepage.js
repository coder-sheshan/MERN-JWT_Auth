import React from 'react';
import SideImage from '../Assets/EnterImage.jpg';

const Imagepage = ({iamgeWidth}) => {
  return (
    <div className={` hidden lg:block  w-1/2  ${iamgeWidth ? iamgeWidth : "w-1/2"}`}>
      <img className='rounded-2xl h-[100%] w-full ' src={SideImage} alt='SideImage'/>
    </div>
  )
}
 
export default Imagepage

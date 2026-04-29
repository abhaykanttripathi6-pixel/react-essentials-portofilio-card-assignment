import React, { useState } from 'react'
import Introduction from './Introduction';
import Bio from './Bio';
import Features from './Features';
import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.avif';
import img3 from '../assets/images/img-3.avif';

const PortfolioCard = () => {

   const [theme, setTheme] = useState(false);
   const [imgIndex, setImgIndex] = useState(0); 
   const avatars = [img1, img2, img3];

  return (
    <div>
      <div className='h-screen bg-amber-50 flex justify-center items-center'>
            <div className={`w-100 px-6 pb-4 border-2 rounded-xl shadow-xl/70 cursor-default ${theme ? 'bg-black border-white' : 'bg-white border-gray-200'}`} >
      
              <Introduction theme={theme} avatars={avatars} imgIndex={imgIndex}/>
              <Bio theme={theme}/>
              <Features theme={theme} setTheme={setTheme} avatars={avatars} imgIndex={imgIndex} setImgIndex={setImgIndex}/>

            </div >
          </div >
      
    </div>
  )
}

export default PortfolioCard;

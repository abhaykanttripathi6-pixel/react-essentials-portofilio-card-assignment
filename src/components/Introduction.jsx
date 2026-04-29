import React from 'react';

const Introduction = ({theme, avatars, imgIndex}) => {


  return (
     <header className='py-8 flex justify-center items-center gap-4'>
                <figure>
                  <img src={avatars[imgIndex]} alt="avatar" className='h-20 w-20 object-cover rounded-[50%] border-3 border-blue-400 ' />
                </figure>
      
                <div>
                  <h1 className={`text-black text-2xl font-bold ${theme ? 'text-white' : ''}`}>John Doe</h1>
                  <p className='text-gray-400 text-sm font-semibold leading-7'>Product Designer & Frontend Engineer</p>
                </div>
    </header>
  )
}

export default Introduction;

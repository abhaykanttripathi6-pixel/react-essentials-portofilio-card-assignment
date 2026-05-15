import React from 'react';

const Introduction = ({theme, employees, employeeIndex}) => {


  return (
     <header className='py-5 flex justify-flex-start items-center gap-4'>
                <figure>
                  <img src={employees[employeeIndex].avatar} alt="avatar" className='h-20 w-20 object-cover rounded-[50%] border-3 border-blue-400 ' />
                </figure>
      
                <div>
                  <h1 className={`text-black text-2xl font-bold ${theme ? 'text-white' : ''}`}>{employees[employeeIndex].name}</h1>
                  <p className='text-gray-400 text-sm font-semibold leading-7'>{employees[employeeIndex].role}</p>
                </div>
    </header>
  )
}

export default Introduction;

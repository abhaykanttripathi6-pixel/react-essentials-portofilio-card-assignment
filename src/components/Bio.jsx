import React from 'react'

const Bio = ({theme, employees, employeeIndex,}) => {


    return (
        <main>
            <div >
                <p className={`text-gray-600 text-sm font-semibold leading-5 ${theme ? 'text-white/90' : ''}`}>{employees[employeeIndex].description}</p>
            </div>

            <div className='my-5'>
                <div className={`font-semibold ${theme ? 'text-white' : ''}`}>Skills</div>
                <div className=' p-2 flex flex-wrap gap-2'>
                    {
                       employees[employeeIndex].skills.map((skill, index) => {
                            return (
                                <span key={index} className=' px-2 py-1  mx-2 bg-blue-100 border-2 border-white text-black text-xs text-center font-medium rounded-xl hover:-translate-y-0.5 hover:border-blue-200 duration-300 '>{skill}</span>
                            )
                        })
                    }
                </div>
            </div>

        </main>
    )
}

export default Bio;

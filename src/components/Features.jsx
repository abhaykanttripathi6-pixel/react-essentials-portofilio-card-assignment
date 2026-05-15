import React, { useState } from 'react';
import { MdDarkMode, MdOutlineLightMode, MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
const Features = ({ theme, setTheme, employees, setEmployees, employeeIndex, setEmployeeIndex }) => {

    const [likesCount, setLikesCount] = useState(0);

    const handleIncrement = (val) => {

        if (val === 'img') {

            if ((employeeIndex < employees.length - 1)) return setEmployeeIndex(prev => prev + 1);
            setLikesCount(0);
            if ((employeeIndex === employees.length - 1)) return setEmployeeIndex(0);
            setLikesCount(0);

        }

        if (val === "like") {
            setEmployees((prev) => prev.map((emp, index) => index === employeeIndex ? { ...emp , likes: emp.likes + 1 } : emp));
        }

        return;
    }

    const handleDecrement = () => {
        if (employeeIndex > 0) {
            return setEmployeeIndex(prev => prev - 1);
        }
        return setEmployeeIndex(employees.length - 1);
    }

    const handleContact = () => {
        alert("Thank you for contacting us.");
    }

    return (
        <footer>
            <div className='flex justify-between items-center'>
                <div className={`theme w-20 border-2 flex justify-center items-center gap-2 rounded-xl font-semibold transition-all duration-200 ease-in cursor-pointer ${theme ? 'text-white border-white hover:bg-white hover:text-black ' : 'text:black border-black hover:bg-black hover:text-white'}`} onClick={() => setTheme(prev => !prev)}>
                    {
                        theme ?
                            <>
                                <MdOutlineLightMode />
                                <span>Light</span>
                            </>
                            :
                            <>
                                <MdDarkMode />
                                <span>Dark</span>
                            </>
                    }
                </div>

                <div className={`flex justify-center items-center gap-2 text-xl cursor-pointer ${theme ? 'text-white' : ''}`} >
                    <div className='leftArr' onClick={() => handleDecrement()}><MdKeyboardArrowLeft /></div>
                    <div className="rightArr" onClick={() => handleIncrement('img')}><MdOutlineKeyboardArrowRight /></div>
                    <div className='text-xs'><span>{employeeIndex + 1}/{employees.length}</span></div>
                </div>

                <div className={`flex items-center gap-1 cursor-pointer ${theme ? 'text-white' : ''}`}>
                    <div className='text-red-600 flex align-center' onClick={() => handleIncrement('like')}>
                        <FaHeart className='w-8 active:scale-130 duration-800' />
                    </div>
                    <span className='w-3'>{employees[employeeIndex].likes}</span>
                </div>

                <div className={`p-1.5 bg-blue-600 flex items-center gap-1 text-white text-sm font-medium rounded-lg hover:scale-105 active:scale-95 duration-300 cursor-pointer`} onClick={handleContact}>
                    <MdOutlineEmail className='text-lg' />
                    <span>Contact</span>
                </div>

            </div>
        </footer>
    )
}

export default Features;

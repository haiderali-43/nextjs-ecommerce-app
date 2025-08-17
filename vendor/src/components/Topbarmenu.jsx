import React from 'react'
import { FaLink, FaGlobe, FaDollarSign,FaArrowAltCircleDown } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";

const Topbarmenu = () => {
    const handleClick = () => {
        prompt("Feature coming soon!");
    }
    return (
        <div className="flex justify-between items-center px-6 h-[60px] bg-white shadow-md border-b">
            {/* Left Section */}
            <div className="text-lg font-semibold text-gray-700 mr-10">Earnings</div>

            {/* Right Menu */}
            <div className="flex items-center gap-4 text-gray-600">
                {/* Icon buttons */}
                <button className="p-2 rounded-full hover:bg-gray-700 transition  text-black">
                    <FaLink size={18} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-700 transition">
                    <FaGlobe size={18} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-700 transition">
                    <FaDollarSign size={18} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-700 transition">
                    <BsCircleHalf size={18} />
                </button>

                {/* Profile (could be avatar later) */}
                <div className="flex items-center gap-2 cursor-pointer px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                    <span className="text-sm font-medium">Profile</span>
                    <span onClick={handleClick}><FaArrowAltCircleDown /></span>
                </div>
            </div>
        </div>
    )
}

export default Topbarmenu

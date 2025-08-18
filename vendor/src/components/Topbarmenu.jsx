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
            <div className="text-lg font-semibold text-gray-700 mr-10 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 px-3 py-2">Earnings</div>

            {/* Right Menu */}
            <div className="flex items-center gap-4 text-gray-600">
                {/* Icon buttons */}
                <button className="p-3 rounded-lg hover:bg-gray-200 bg-gray-100 transition">
                    <FaLink size={18} />
                </button>
                <button className="p-3 rounded-lg hover:bg-gray-200 bg-gray-100 transition">
                    <FaGlobe size={18} />
                </button>
                <button className="p-3 rounded-lg hover:bg-gray-200 bg-gray-100 transition">
                    <FaDollarSign size={18} />
                </button>
                <button className="p-3 rounded-lg hover:bg-gray-200 bg-gray-100 transition">
                    <BsCircleHalf size={18} />
                </button>

                {/* Profile (could be avatar later) */}
                <div className="flex items-center gap-2 cursor-pointer px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition" onClick={handleClick}>
                    <span><FaArrowAltCircleDown /></span>
                    <span className="text-sm font-medium">Profile</span>   
                </div>
            </div>
        </div>
    )
}

export default Topbarmenu

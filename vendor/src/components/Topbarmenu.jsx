// Topbarmenu.jsx
import React, { useState, useRef, useEffect } from 'react'
import { FaLink, FaGlobe, FaDollarSign, FaArrowAltCircleDown } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";
import ProfileMenu from './ProfileMenu';

const Topbarmenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-between items-center px-6 h-[60px] bg-white shadow-md border-b relative">
            {/* Left Section */}
            <div className="text-lg font-semibold text-gray-700 mr-10 cursor-pointer rounded-lg bg-gray-100 hover:bg-gray-200 px-3 py-2">
                Earnings
            </div>

            {/* Right Menu */}
            <div className="flex items-center gap-4 text-gray-600" ref={menuRef}>
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

                {/* Profile button */}
                <div
                    className="flex items-center gap-2 cursor-pointer px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition relative"
                    onClick={() => setOpenMenu((prev) => !prev)}
                >
                    <span><FaArrowAltCircleDown /></span>
                    <span className="text-sm font-medium">Profile</span>

                    {/* Profile Dropdown */}
                    {openMenu && (
                        <div className="absolute top-12 right-0 z-50">
                            <ProfileMenu />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Topbarmenu

"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect, useRef } from "react";

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const handleNavbarClose = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log('clicked');

    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <div className="flex">
            {isSidebarOpen && (
                <div ref={sidebarRef} className="fixed top-0 left-0  z-[10000] ">
                    <Sidebar isSidebarOpen={isSidebarOpen} />
                </div>
            )}
            <div className="flex flex-col w-full">
                <Navbar handleNavbarClose={handleNavbarClose} />
                <div className="flex-grow">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

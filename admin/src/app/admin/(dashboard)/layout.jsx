"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/AdminSidebar";
import { useState, useRef } from "react";


const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const sidebarRef = useRef(null);

    const handleNavbarOpen = () => {
        setIsSidebarOpen(true);
    };


    return (
        <div className="bg-[#f6f9fc] flex space-x-[16rem]  h-screen">
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-[10000] transition-transform duration-500 ease-in-out transform  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            </div>
            <div className="flex flex-col h-screen w-[75%]">
                <Navbar handleNavbarClose={handleNavbarOpen} />
                <div className="flex-1 mt-16">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;

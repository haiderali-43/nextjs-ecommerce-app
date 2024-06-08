"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const sidebarRef = useRef(null);

    const handleNavbarOpen = () => {
        setIsSidebarOpen(true);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false);
        }
    };

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
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
        <div className="bg-[#f6f9fc]">
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-[10000] transition-transform duration-500 ease-in-out transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
               
            </div>
            <div className="flex flex-col h-screen">
                <Navbar handleNavbarClose={handleNavbarOpen} />
                <div className="flex-1 mt-16">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;

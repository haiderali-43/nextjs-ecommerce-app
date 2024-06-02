"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
        <div className="">
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-[10000] transition-transform duration-500 ease-in-out transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <Sidebar isSidebarOpen={isSidebarOpen} />
                <span
                    className={`absolute top-2 right-6 text-xl mt-4 text-white cursor-pointer transition-transform duration-500 ease-in-out transform ${isSidebarOpen ? "rotate-0" : "rotate-45"
                        }`}
                    onClick={handleSidebarClose}
                >
                    <IoClose />
                </span>
            </div>
            <div className="flex flex-col h-screen">
                <Navbar handleNavbarClose={handleNavbarOpen} />
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;

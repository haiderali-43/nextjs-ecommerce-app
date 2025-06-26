'use client';
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
const DashboardLayout = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;


    return (

        <div className="flex justify-between w-full ">
            <div className="w-[20%] h-screen bg-black text-white">
                <Sidebar />
            </div>
            <div className="w-[80%] flex flex-col gap-4 bg-gray-100 h-screen">
                {children}
            </div>
        </div>


    )
}
export default DashboardLayout;
'use client';
import { useEffect, useState } from "react";
import SidebarVendor from '../../components/SidebarVendor'
import Topbar from "@/components/Topbar";
const DashboardLayout = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;


    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 border-r  text-black">
                <SidebarVendor />
             
            </div>
            {/* Main content area */}
            <div className="flex flex-col flex-1">
                {/* Topbar */}
                <div>
                    <Topbar />
                </div>
                {/* Children */}
                <main className="flex-1 p-4 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
export default DashboardLayout;
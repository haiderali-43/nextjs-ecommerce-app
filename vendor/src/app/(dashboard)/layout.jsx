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
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0 border-r bg-sky-50 text-black">
                <Sidebar />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aut modi quas? Nam nesciunt quos omnis. Aperiam, molestias, voluptates ipsa neque quis repellendus quaerat ex vitae, laudantium tenetur accusamus? Quisquam?
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
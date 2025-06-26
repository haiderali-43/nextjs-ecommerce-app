'use client'
import { Poppins } from "next/font/google";
import '../styles/globals.css';

import NavbarStore from "@/components/NavbarStore";
import SidebarStore from "@/components/SidebarStore";
import { metadata } from "@/lib/metaData";
import { useEffect, useRef, useState } from "react";
import HelloUser from "@/components/HelloUser";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHelloUserOpen, setIsHelloUserOpen] = useState(false);

  const sidebarRef = useRef(null);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
    setIsHelloUserOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setIsHelloUserOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleCloseSidebar();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body className={`${poppins.className} h-screen`}>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleCloseSidebar}
          ></div>
        )}
        <div
          className={`fixed left-0 top-0 z-[10000] transform transition-transform duration-700 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          ref={sidebarRef}
        >
          <HelloUser handleSidebarClose={handleCloseSidebar} isHelloUserOpen={isHelloUserOpen} />
          <SidebarStore isSidebarOpen={isSidebarOpen} />
        </div>
        <div className="flex flex-col h-screen">
          <NavbarStore handleSidebar={handleOpenSidebar} />
          <div className="absolute top-36 py-2 px-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

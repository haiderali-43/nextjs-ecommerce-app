'use client'
import { Poppins } from "next/font/google";
import "./globals.css";

import NavbarStore from "@/components/NavbarStore";
import SidebarStore from "@/components/SidebarStore";
import { metadata } from "@/lib/metaData";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setSidebarOpen(!sidebarOpen);

  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body className={`${poppins.className}`}>
        <div className="absolute left-0 top-0  z-[10000]">
          <SidebarStore isSidebarOpen={sidebarOpen} />
        </div>
        <div className="flex flex-col ">
          <NavbarStore handleSidebar={handleOpenSidebar} />
           <div className="absolute top-[23%] px-2 py-1">
            {children}
           </div>
        </div>
      </body>
    </html>
  );
}

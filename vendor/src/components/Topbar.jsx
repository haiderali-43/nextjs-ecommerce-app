import React from 'react'
import Image from 'next/image'
import Topbarmenu from './Topbarmenu'

const Topbar = () => {
    return (
        <div className="p-2 w-full fixed top-0 left-0 z-50 h-[60px] text-xl  bg-white shadow-md flex items-center justify-between">
            <Image src={"/logo-removebg-preview.png"} alt="logo" width={150} height={150} />
            <Topbarmenu />
        </div>
    )
}

export default Topbar

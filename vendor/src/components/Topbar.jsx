import React from 'react'
import Image from 'next/image'

const Topbar = () => {
    return (
        <div className="p-2 w-full fixed top-0 left-0 z-50 border-b border-gray-300 h-[60px] text-xl">
            <div>
                <div>
                    <Image src={"/logo-removebg-preview.png"} alt="logo" width={200} height={200} className="" />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Topbar
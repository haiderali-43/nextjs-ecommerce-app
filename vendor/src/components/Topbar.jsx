import React from 'react'
import Logo from './logo'

import Topbarmenu from './Topbarmenu'


const Topbar = () => {
    return (
        <div className="p-2 w-full fixed top-0 left-0 z-50 h-[60px] text-xl  bg-white shadow-md flex items-center justify-between">
            <Logo />
            <Topbarmenu />
        </div>
    )
}

export default Topbar

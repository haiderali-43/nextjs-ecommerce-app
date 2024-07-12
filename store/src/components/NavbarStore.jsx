import Image from 'next/image'
import React from 'react'

import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'


const NavbarStore = () => {
    return (
        <div className='flex flex-col h-screen'>
            <div className='w-full bg-[#2b3445] text-white h-10 py-2 flex justify-between px-4'>
                <div>
                    Free Express Shipping
                </div>
                <div className='flex space-x-6 mr-4'>
                    <AiOutlineTwitter className='md:text-2xl mt-1 md:mt-0 ' />
                    <AiFillFacebook className='md:text-2xl mt-1 md:mt-0 ' />
                    <AiOutlineInstagram className='md:text-2xl mt-1 md:mt-0' />
                </div>
            </div>
            <div className='flex justify-between p-4'>
                <div>
                    <Image src="/logo.svg" alt="logo" width={100} height={100} className='hidden md:block' />
                    <Image src="/logo.svg" alt="logo" width={70} height={70} className='md:hidden mt-1 ' />
                </div>
                <div>
                    <input type="text" placeholder='Searching for...' className='rounded-md focus:outline-none border border-gray-300 py-1 px-4 mt-1 md:min-w-[45rem] w-[250px]  ' />
                </div>
                <div className='flex space-x-2 md:space-x-6 text-xl md:text-2xl mt-2 md:mr-10 mr-3 '>
                    <AiOutlineUser />
                    <AiOutlineShoppingCart />
                </div>

            </div>
        </div>
    )
}

export default NavbarStore

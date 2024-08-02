import React from 'react'
import { Cross2Icon } from '@radix-ui/react-icons';
import { FaUser } from 'react-icons/fa'
import { cn } from '@/lib/utils';
const HelloUser = ({ handleSidebarClose, isHelloUserOpen }) => {
    return (
        <div className={cn(`fixed top-0 w-full text-white flex justify-between bg-slate-700 px-5 py-4 z-10 transform transition-transform ease-in-out duration-300 ${isHelloUserOpen ? "translate-x-0" : "-translate-x-full"} `)}>
            <p className='flex space-x-10'>
                <span>
                    <FaUser className='h-5 w-6  text-white mt-1' />
                </span>
                <span className='text-lg'>Hello Haider Ali</span>
            </p>

            <Cross2Icon className='w-6 h-6 text-white cursor-pointer' onClick={handleSidebarClose} />

        </div>
    )
}

export default HelloUser

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='bg-[#f4f6f9] h-screen'>
            <div className='flex flex-col justify-center items-center bg-white ' >
                <div className='border border-gray-400 p-4 rounded-md mt-20 shadow-[0px 0px 10px 0px rgba(0,0,0,0.1)] '>
                    <Image src="/logo.png" alt="logo" width={200} height={200} className='m-auto' />
                    <span className='flex justify-center font-semibold'>Register a new aacount</span>
                    <form action="" className='flex flex-col justify-center items-center space-y-2 mt-4'>
                        <input type="text" placeholder='username' className='mb-2 p-2 rounded-md w-[20rem] focus:out-of-none border border-gray-300' />
                        <input type="email" placeholder='email' className='mb-2 p-2 rounded-md w-[20rem] focus:out-of-none border border-gray-300' />
                        <input type="passowrd" placeholder='passoword' className='mb-2 p-2 rounded-md w-[20rem] focus:outline-none border border-gray-300' />
                        <input type="passowrd" placeholder='confirm passoword' className='mb-2 p-2 rounded-md w-[20rem] focus:outline-none border border-gray-300' />
                        <button className='mb-2 p-2 w-[20rem] bg-[#e64625] text-white rounded-md'>Login</button>
                    </form>
                    <button className='mb-2 p-2 w-[20rem] border border-gray-300 mt-4 rounded-md' >Already have an account?
                        <Link href={'/'} className='ml-2'>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page
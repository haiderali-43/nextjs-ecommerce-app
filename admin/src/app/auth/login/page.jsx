import Link from 'next/link';
import React from 'react'

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h3 className="text-4xl text-center mt-4">Timepiece Haven</h3>
            <form className="mt-8">
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder='Enter your Password' />
                </div>
                <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Login</button>
            </form>
            <Link href={'/dashboard'}>Dashbaord</Link>
        </div>
    );
}

export default page

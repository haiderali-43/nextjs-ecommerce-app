'use client'
import Logo from '@/components/logo';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/dashboard');

  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="bg-[#f4f6f9] h-screen">
      <div className="flex flex-col justify-center items-center bg-white">
        <div className="border border-gray-400 p-4 rounded-md mt-20 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
          <div className='ml-20'><Logo /></div>
          <span className="flex justify-center font-semibold">Vendor Login Portal</span>
          <form className="flex flex-col justify-center items-center space-y-2 mt-4" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              className="mb-2 p-2 rounded-md w-[20rem] focus:outline-none border border-gray-300"
            />
            <div className="relative w-[20rem]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="mb-2 p-2 rounded-md w-full focus:outline-none border border-gray-300 pr-10"
              />
              <span
                className="absolute right-2 -mt-1 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
                id="show_password"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <Link href="/forgot-password" className="hover:underline transition duration-100">
              Forget Password
            </Link>
            <button className="mb-2 p-2 w-[20rem] bg-[#e64625] text-white rounded-md">Login</button>
          </form>
          <button className="mb-2 p-2 w-[20rem] border border-gray-300 mt-4">
            Don't have an account?
            <Link href="/register" className="ml-2 hover:underline transition duration-100">Register Now!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

import React from 'react';
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from 'react-icons/ci';
import { FaGooglePlay } from 'react-icons/fa';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { Button } from '../ui/button';

const Social = () => {
  return (
    <div className="p-6 ">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Social Links</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[45rem] gap-y-8">
          <div className='relative flex items-center w-full '>
            <CiFacebook className='text-3xl text-blue-500 absolute left-2' />
            <input type="url" placeholder='https://example.com' className='pl-12 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 transition-transform duration-150 md:w-[50rem]' />
          </div>
          <div className='relative flex items-center w-full'>
            <CiInstagram className='text-3xl text-pink-500 absolute left-2' />
            <input type="url" placeholder='https://example.com' className='pl-12 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-pink-500 transition-transform duration-150 md:w-[50rem] ' />
          </div>
          <div className='relative flex items-center w-full'>
            <CiTwitter className='text-3xl text-blue-400 absolute left-2' />
            <input type="url" placeholder='https://example.com' className='pl-12 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-400 transition-transform duration-150 md:w-[50rem]' />
          </div>
          <div className='relative flex items-center w-full'>
            <CiYoutube className='text-3xl text-red-500 absolute left-2' />
            <input type="url" placeholder='https://example.com' className='pl-12 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-red-500 transition-transform duration-150 md:w-[50rem]' />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">App Links</h1>
        <div className='flex  space-x-[26rem]'>
          <div className='relative flex items-center w-full'>
            <FaGooglePlay className='text-3xl text-blue-400 absolute left-2' />
            <input type="url" placeholder='https://example.com' className='pl-12 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-400 transition-transform duration-150 md:w-[50rem]' />
          </div>
          <div className='relative flex items-center w-full'>
            <IoLogoAppleAppstore className='text-3xl text-red-500 absolute left-2' />
            <input type="url" placeholder='https://example.com' className='pl-12 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-red-500 transition-transform duration-150 md:w-[50rem]' />
          </div>
        </div>
      </div>
      <Button className='mt-8 w-full md:w-auto'>Save Changes</Button>
    </div>
  );
};

export default Social;

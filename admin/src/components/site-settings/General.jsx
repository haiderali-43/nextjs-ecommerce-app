"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const General = () => {
  const [images, setImages] = useState([]);

  const handleImages = (selectedImages) => {
    const imagesArray = Array.from(selectedImages);
    setImages((prevImages) => [...prevImages, ...imagesArray]);
  };


  const handleImageUpload = (e) => {
    const selectedImages = e.target.files;
    handleImages(selectedImages);
  };

  return (
    <div className='w-full px-5 py-4 md:w-[68rem] '>
      <div className="bg-gray-100 rounded-md h-48 mt-4 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 p-4 w-full">
        <p className="text-gray-400 mb-4 md:mb-20">Drag & Site Logo here</p>
        <input
          type="file"
          className="hidden"
          id="file-upload"
          accept='image/*'
          onChange={handleImageUpload}
        />
        <label
          htmlFor="file-upload"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 w-full text-center md:w-auto"
        >
          Browse Files
        </label>
      </div>
      {/* images preview */}
      <div className="flex flex-wrap mt-4 w-full">
        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {images.map((image, index) => (
              <div key={index} className='relative w-full h-32 bg-gray-100 rounded-md flex justify-center items-center'>
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`image-${index}`}
                  className='w-full h-full object-cover rounded-md mb-4'
                  fill
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* site name and site description */}
      <div className='flex flex-col md:flex-row justify-between md:space-x-4 space-y-4 md:space-y-0 mt-4'>
        <div className='flex-1'>
          <input
            type="text"
            placeholder='Site Name'
            className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 transition-transform duration-150'
          />
        </div>
        <div className='flex-1'>
          <input
            type="text"
            placeholder='Site Description'
            className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 transition-transform duration-150'
          />
        </div>
      </div>
      {/* site banner description */}
      <div className='mt-4'>
        <textarea
          placeholder='Site Banner Description' rows={5}
          className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 resize-none hover:border-black transition-transform duration-150'
        />
      </div>
      {/* site banner image */}
      <div className="bg-gray-100 rounded-md h-48 mt-4 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 p-4 w-full">
        <p className="text-gray-400 mb-4 md:mb-20">Drag & Site Banner Image</p>
        <input
          type="file"
          className="hidden"
          id="banner-upload"
          multiple
          onChange={handleImageUpload}
        />
        <label
          htmlFor="banner-upload"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 w-full text-center md:w-auto"
        >
          Browse Files
        </label>
      </div>
      <div className="flex flex-wrap mt-4 w-full">
        {images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {images.map((image, index) => (
              <div key={index} className='relative w-full h-32 bg-gray-100 rounded-md flex justify-center items-center'>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`image-${index}`}
                  className='w-full h-full object-cover rounded-md mb-4'
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Button className='mt-4 w-full md:w-auto'>Save Changes</Button>
    </div>
  );
};

export default General;

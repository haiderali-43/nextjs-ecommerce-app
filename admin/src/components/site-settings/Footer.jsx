"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button';

const Footer = () => {
  const [images, setImages] = useState([]);

  const handleImages = (selectedImages) => {
    const imagesArray = Array.from(selectedImages);
    setImages((prevImages) => [...prevImages, ...imagesArray]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedImages = e.dataTransfer.files;
    handleImages(droppedImages);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleImageUpload = (e) => {
    const selectedImages = e.target.files;
    handleImages(selectedImages);
  };
  return (
    <div className='w-full md:w-[68rem]'>
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
      <div>
        <textarea placeholder='Description' rows={5} className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 mt-4 resize-none hover:border-black transition-transform duration-150' />
      </div>
      <Button className='mt-8 w-full md:w-auto'>Save Changes</Button>
    </div>
  )
}

export default Footer

'use client'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Page = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [parentCategory, setParentCategory] = useState('')
  const [categoryImage, setCategoryImage] = useState(null)
  const [isFeatured, setIsFeatured] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)

  // Handle image file selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    setCategoryImage(file)
    previewImage(file)
  }

  const previewImage = (file) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result) // Preview image as base64
    }
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    setCategoryImage(null)
    setImagePreview(null) // Clear image preview
  }

  const handleCreateCategory = async (e) => {
    e.preventDefault()

    // Create a new FormData object to handle file and data upload
    const formData = new FormData()
    formData.append('name', name)
    formData.append('parentCategory', parentCategory)
    formData.append('isFeatured', isFeatured)
    if (categoryImage) {
      formData.append('categoryImage', categoryImage) // Append the file
    }

    try {
      const response = await axios.post('/api/categories/createCategory', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log(response)
      router.push('/admin/categories')
    } catch (error) {
      console.error('Error uploading category:', error)
    }
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-semibold'>Add New Category</h1>
      <div className='mt-4'>
        <form onSubmit={handleCreateCategory}>
          <div className='border border-gray-400 shadow-lg ring-0 px-6 py-6 rounded-md bg-white'>
            {/* Name and category inputs */}
            <div className='flex flex-col md:flex-row justify-between md:space-x-4 space-y-4 md:space-y-0'>
              <div className='flex-1'>
                <input
                  type='text'
                  placeholder='Name'
                  className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 hover:border-black transition-transform duration-150'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='flex-1'>
                <select value={parentCategory} onChange={(e) => setParentCategory(e.target.value)}>
                  <option value='' disabled>
                    Parent Categories
                  </option>
                  <option value='light'>Light</option>
                  <option value='dark'>Dark</option>
                  <option value='system'>System</option>
                </select>
              </div>
            </div>

            {/* Image Upload and Preview */}
            <div className="bg-gray-100 rounded-md h-48 mt-4 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 p-4 w-full">
              <p className='text-gray-400 mb-4'>Drag & Drop image here</p>
              <input
                type='file'
                className='hidden'
                id='file-upload'
                accept='image/*'
                onChange={handleImageUpload}
              />
              <label
                htmlFor='file-upload'
                className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600'
              >
                Browse Files
              </label>
            </div>

            {/* Image Preview Section */}
            {imagePreview && (
              <div className='relative mt-4'>
                <Image src={imagePreview} alt='Preview' width={50} height={50} className='w-full h-48 object-cover rounded-md' />
                <button
                  type='button'
                  className='absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full'
                  onClick={removeImage}
                >
                  Remove
                </button>
              </div>
            )}

            {/* Other details */}
            <div className='flex space-x-4 mt-4'>
              <input type='checkbox' checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} />
              <span>Featured Category</span>
            </div>

            {/* Submit button */}
            <div className='mt-4'>
              <Button type='submit'>Save Category</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page

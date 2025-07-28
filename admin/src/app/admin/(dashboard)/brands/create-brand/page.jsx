'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { Button } from '@/components/ui/button'

const Page = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [featured, setFeatured] = useState(false)
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', name)
    formData.append('category', category)
    formData.append('featured', featured)
    if (image) {
      formData.append('image', image)
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/brands/createbrand',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log('Brand created successfully:', response.data)
      if (response.status === 200) {
        router.push('/admin/brands/')
      }
    } catch (error) {
      console.error('Error creating brand:', error)
    }
  }

  const handleImageUpload = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Add New Brand</h1>
      <div className="mt-4">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-4"
        >
          <div className="border border-gray-400 shadow-lg px-6 py-6 rounded-md bg-white">
            <div className="flex flex-col md:flex-row justify-between md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 hover:border-black transition-transform duration-150"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 hover:border-black transition-transform duration-150"
                  required
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="bg-gray-100 rounded-md h-48 mt-4 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 p-4">
              <p className="text-gray-400 mb-4">Drag & Drop images here</p>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="file-upload"
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
              >
                Browse Files
              </label>
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center space-x-2 mt-4">
              <input
                type="checkbox"
                id="featured"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
              <label htmlFor="featured">Featured Category</label>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <Button type="submit">Save Brand</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page

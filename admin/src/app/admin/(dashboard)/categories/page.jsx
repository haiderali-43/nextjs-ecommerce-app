'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Switch } from '@/components/ui/switch'
import { IoPencil } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import TableForAll from '@/components/TableForAll'
import Image from 'next/image'

const Page = () => {
  const router = useRouter()
  const [categories, setCategories] = useState([])

  // Fetch categories from the server
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories/getCategories')
        setCategories(response.data)
      } catch (error) {
        console.error('Error fetching categories:', error.response ? error.response.data : error.message)
        // Consider showing a user-friendly message
      }
    }
    fetchCategories()
  }, [])

  const handleUpdateCategory = (categoryId) => {
    router.push(`/admin/categories/update-category/${categoryId}`)
  }

  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`/api/categories/deleteCategory/${categoryId}`)
      setCategories(categories.filter((category) => category._id !== categoryId))
    } catch (error) {
      console.error('Error deleting category:', error)
    }
  }

  // write code here to fetch categories from the server and display them in the table
  // The table should have columns for ID, Name, Image, Level, Featured, and Action
  // The Action column should have buttons for updating and deleting a category
  // The updating button should navigate to the update category page
  // The deleting button should delete the category from the server and remove it
  // from the tab

  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Product Categories</h2>

      {/* Search bar and add button */}
      <div className='flex flex-col md:flex-row justify-between mt-3 space-y-4 md:space-y-0'>
        <input
          type='text'
          placeholder='Search Category'
          className='border border-gray-500 rounded-md p-2 focus:outline-none w-full md:w-[25rem]'
        />
        <Button
          className='text-white px-4 py-3 rounded-md w-full md:w-auto'
          onClick={() => router.push('/admin/categories/create-category')}>
          Add Category
        </Button>
      </div>


      {/* Categories Table */}



      {/* Categories Table */}

      <div className='mt-7'>
        <TableForAll
          HeadOne={"ID"}
          HeadTwo={"Name"}
          HeadThree={"Image"}
          HeadFour={"Level"}
          HeadFive={"Featured"}
          HeadSix={"Action"}
          BodyOne={
           "kk"
          }
          BodyTwo={
          'f'
          }
          BodyThree={"image"}
          BodyFour={"level"}
          BodyFive={<div className='text-2xl'>
            <Switch />
          </div>}
          BodySix={
            <div className='flex space-x-2'>
              <Button
                className='text-white bg-blue-600 hover:bg-blue-700'
                onClick={() => handleUpdateCategory('_id')}>
                <IoPencil />
              </Button>
              <Button
                className='text-white bg-red-600 hover:bg-red-700'
                onClick={() => handleDeleteCategory('_id')}>
                <MdDelete />
              </Button>
            </div>
          }

        />
      </div>

    </div>

  )
}

export default Page

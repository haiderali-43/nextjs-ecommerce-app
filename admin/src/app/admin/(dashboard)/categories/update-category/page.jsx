'use client'
import { Button } from '@/components/ui/button'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    const [name, setName] = useState('')
    const [parentCategory, setParentCategory] = useState('')

    const [image, setImage] = useState('')

    const uploadImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onloadend = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
    }

    const [isFeatured, setIsFeatured] = useState(false)


    const handleCreateCategory = async (id) => {
        e.preventDefault()
        try {
            const data = {
                name,
                parentCategory,
                image,
                isFeatured
            }

            const reponse = await axios.post(`/api/categories/updateCategory/${id}`, data)
            console.log(reponse)
            router.push('/admin/dashboard/categories')

        } catch (error) {
            console.log(error)

        }
    }



    return (
        <div className='p-4'>
            <h1 className='text-2xl font-semibold'>Edit Category</h1>
            <div className='mt-4'>
                <form action="" onSubmit={handleCreateCategory}>
                    <div className='border border-gray-400 shadow-lg ring-0 px-6 py-6 rounded-md bg-white '>
                        {/* Name and category inputs */}
                        <div className='flex flex-col md:flex-row justify-between md:space-x-4 space-y-4 md:space-y-0'>
                            <div className='flex-1'>
                                <input type="text" placeholder='Name' className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 hover:border-black transition-transform duration-150' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='flex-1'>
                                <Select value={parentCategory} onValueChange={(value) => setParentCategory(value)} >
                                    <SelectTrigger className="w-full py-2 hover:border-black transition-transform duration-150">
                                        <SelectValue placeholder="Parent Categories" />
                                    </SelectTrigger>
                                    <SelectContent  >
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        {/* Images */}
                        <div className="bg-gray-100 rounded-md h-48 mt-4 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 p-4 ">
                            <p className="text-gray-400 mb-4 md:mb-20">Drag & Drop images here</p>
                            <input type="file" className="hidden" id="file-upload" value={image} onChange={uploadImage} />
                            <label htmlFor="file-upload" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
                                Browse Files
                            </label>
                        </div>

                        {/* Other details of the product */}
                        <div className='flex space-x-4 mt-4'>
                            <input type="checkbox" name="" id="" value={isFeatured} onChange={(e) => setIsFeatured(e.target.value)} />
                            <span>Featured Category</span>
                        </div>
                        {/* Submit button */}
                        <div className='mt-4'>
                            <Button type='submit'>Save Product</Button>
                        </div>
                    </div>
                </form>


            </div>

        </div>
    )
}

export default page

import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'
import { Button } from '../ui/button'

const AddProductForm = () => {
    return (
        <div className='border border-gray-400 shadow-lg ring-0 px-6 py-6 rounded-md bg-white'>
            {/* Name and category inputs */}
            <div className='flex flex-col md:flex-row justify-between md:space-x-4 space-y-4 md:space-y-0'>
                <div className='flex-1'>
                    <input type="text" placeholder='Name' className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 hover:border-black transition-transform duration-150' />
                </div>
                <div className='flex-1'>
                    <Select>
                        <SelectTrigger className="w-full py-2 hover:border-black transition-transform duration-150">
                            <SelectValue placeholder="Categories" />
                        </SelectTrigger>
                        <SelectContent>
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
                <input type="file" className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
                    Browse Files
                </label>
            </div>
            {/* Description */}
            <div>
                <textarea placeholder='Description' rows={8} className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 mt-4 resize-none hover:border-black transition-transform duration-150' />
            </div>
            {/* Other details of the product */}
            <div className='flex flex-col space-y-4 mt-4'>
                <div className='flex flex-col md:flex-row justify-between md:space-x-4 space-y-4 md:space-y-0'>
                    <div className='flex-1'>
                        <input type="text" placeholder='Stock' className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 hover:border-black transition-transform duration-150' />
                    </div>
                    <div className='flex-1'>
                        <input type="text" placeholder='Tags' className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 hover:border-black transition-transform duration-150' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between md:space-x-4 space-y-4 md:space-y-0 ' >
                    <div className='flex-1'>
                        <input type="text" placeholder='Regular price' className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 hover:border-black transition-transform duration-150' />
                    </div>
                    <div className='flex-1'>
                        <input type="text" placeholder='Sale Price' className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 hover:border-black transition-transform duration-150' />
                    </div>
                </div>
            </div>
            {/* Submit button */}
            <div className='mt-4'>
                <Button>Save Product</Button>
            </div>
        </div>
    )
}

export default AddProductForm

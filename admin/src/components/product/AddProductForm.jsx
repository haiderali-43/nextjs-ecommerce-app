import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'


const AddProductForm = () => {
    return (
        <div className='border border-black shadow-lg ring-0 px-[5rem] py-6 rounded-md bg-white'>
            {/* Name and category inputs */}
            <div className='flex flex-col md:flex-row justify-between px-4'>
                <div className='-ml-4'>
                    <input type="text" placeholder='Name' className='focus:outline-none px-4 py-2 rounded-md w-[20rem] border border-gray-500' />
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="w-[300px] py-2">
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
            {/* images  */}
            <div class="bg-gray-100 rounded-md h-48 mt-4 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 p-4">
                <p class="text-gray-400 mb-20">Drag & Drop images here</p>
                <input type="file" class="hidden" id="file-upload" />
                <label for="file-upload" class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
                    Browse Files
                </label>
            </div>

            {/* description */}
            <div>
                <textarea placeholder='Description' rows={8} className='focus:outline-none px-4 py-2 rounded-md w-full border border-gray-500 mt-4 resize-none' />
            </div>
            {/* other detail of product */}

            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <div className='-ml-4'>
                        <input type="text" placeholder='Stock' className='focus:outline-none px-4 py-2 rounded-md w-[20rem] border border-gray-500' />
                    </div>
                    <div>
                        <input type="text" placeholder='Tags' className='focus:outline-none px-4 py-2 rounded-md w-[20rem] border border-gray-500' />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <input type="text" placeholder='Regular price' className='focus:outline-none px-4 py-2 rounded-md w-[20rem] border border-gray-500' />
                    </div>
                    <div>
                        <input type="text" placeholder='Sale Price' className='focus:outline-none px-4 py-2 rounded-md w-[20rem] border border-gray-500' />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AddProductForm

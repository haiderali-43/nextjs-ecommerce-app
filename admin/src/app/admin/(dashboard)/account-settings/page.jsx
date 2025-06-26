import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl'>Account setting</h1>
      {/* cover image and profile image */}
      <div className='w-[90%] m-auto mt-4 border rounded-[15px] h-[227px] border-black'>
        <Image src='/coverImage.png' alt='cover' width={1200} height={500} />
      </div>
    </div>
  )
}

export default page

import React from 'react'

const Topbar = () => {
  return (
    <div>
      <h2>Top Bar Left Content</h2>
      {/* phone and email */}
      <div className='flex flex-wrap md:flex-nowrap justify-center items-center'>
        <input type="text" placeholder="Phone" className='p-2 rounded-md max-w-96 focus:outline-none md:min-w-auto  md:w-auto' />
        <input type="text" placeholder="Email" className='p-2 rounded-md w-80 focus:outline-none md:w-auto' />
      </div>
    </div>
  )
}

export default Topbar

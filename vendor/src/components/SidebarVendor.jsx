import Image from 'next/image'
import React from 'react'

import { TbHomeDollar, TbRefresh, TbReportAnalytics } from "react-icons/tb";
import { FaBars, FaStar, FaOpencart, FaPager } from "react-icons/fa";

const Sidebar = () => {
  const sidebararray = [
    { name: 'Dashboard', icon: <TbHomeDollar size={20} />, path: '/' },
    {
      name: "Product Management",
      submenu: [
        { name: 'Products', icon: <FaBars size={20} />, path: '/products' },
        { name: 'Product Reviews', icon: <FaStar size={20} />, path: '/product-reviews' },
      ],
    },
    {
      name: 'Order Management',
      submenu: [
        { name: 'Orders', icon: <FaOpencart size={20} />, path: '/orders' },
        { name: 'Reports', icon: <TbReportAnalytics size={20} />, path: '/reports' },
        { name: 'Returns Orders', icon: <TbRefresh size={20} />, path: '/returns' },
      ],
    },
    {
      name: 'Others',
      submenu: [
        { name: 'Return Policy ', icon: <TbRefresh size={20} />, path: '/settings' },
        { name: 'Payout Request', icon: <TbHomeDollar size={20} />, path: '/logout' },
        { name: 'Settings', icon: <FaPager size={20} />, path: '/settings' },
      ]
    }
  ]
  const handleClick = (name) => {
    console.log(name)
  }
  return (
    <div className=' border-l-black border-r-2 h-[100vh] p-2 flex flex-col justify-between z-[-100000]'>
      <div className='flex items-center justify-center h-16 bg-white rounded-lg mb-4'>
        <Image
          src='/logo-removebg-preview.png'
          height={100}
          width={100}
          alt='Logo'
        />
      </div>
      <ul className='flex flex-col gap-4 overflow-y-auto absolute top-20 left-3 right-0 bottom-0'>
        {sidebararray.map((item, index) => (
          <li key={`sidebar-item-${index}`} className='flex flex-col'>
            <div className='flex cursor-pointer items-center gap-2 text-gray-400' onClick={() => handleClick(item.name)}>
              {item.icon}
              <span>{item.name}</span>
            </div>
            {item.submenu?.length > 0 && (
              <ul className='ml-4 mt-4 flex flex-col gap-5'>
                {item.submenu.map((subitem, subindex) => (
                  <li key={`submenu-item-${index}-${subindex}`} className='flex items-center gap-4 text-gray-400 cursor-pointer' onClick={() => handleClick(subitem.name)}>
                    {subitem.icon}
                    <span>{subitem.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar

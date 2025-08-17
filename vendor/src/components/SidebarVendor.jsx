import React from 'react'

import { TbHomeDollar, TbRefresh, TbReportAnalytics } from "react-icons/tb";
import { FaBars, FaStar, FaOpencart, FaPager } from "react-icons/fa";
import { LuNotebookTabs } from "react-icons/lu";

const Sidebar = () => {
  const sidebararray = [
    { name: 'Dashboard', icon: <TbHomeDollar size={20} />, path: '/' },
    {
      name: "Product Management",
      submenu: [
        { name: 'Products', icon: <FaBars size={20} />, path: '/products' },
        { name: 'Product Reviews', icon: <FaStar size={20} />, path: '/product-reviews' },
        { name: 'Tax', icon: <LuNotebookTabs size={20} />, path: '/tax' }
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
    <div className='border-r-2 h-screen p-2 flex flex-col bg-gray-700 text-white'>
      {/* Logo Section */}
      <div className="border-b border-gray-400 mb-4"></div>
      {/* Scrollable Menu Section */}
      <ul className='flex flex-col gap-4 overflow-y-auto pr-2 '>
        {sidebararray.map((item, index) => (
          <li key={`sidebar-item-${index}`} className='flex flex-col'>
            <div className='flex cursor-pointer items-center gap-2 text-gray-400 hover:text-white' onClick={() => handleClick(item.name)}>
              {item.icon}
              <span>{item.name}</span>
            </div>
            {item.submenu?.length > 0 && (
              <ul className='ml-4 mt-2 flex flex-col gap-3'>
                {item.submenu.map((subitem, subindex) => (
                  <li
                    key={`submenu-item-${index}-${subindex}`}
                    className='flex items-center gap-2 text-gray-400 cursor-pointer hover:text-white'
                    onClick={() => handleClick(subitem.name)}
                  >
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

import React from 'react'
import { AiOutlineHome, AiOutlineCart } from 'react-icons/ai'


const Sidebar = () => {
    const sidebarMenu = [
        {
            title: 'Dashboard',
            icon: <AiOutlineHome />,
            link: '/dashboard'
        },
        {
            title: 'Products',
            icon: <AiOutlineCart />,
            link: '/products'
        },
        {
            title: 'Orders',
            icon: 'shopping-cart',
            link: '/orders'
        },
        {
            title: 'Customers',
            icon: 'users',
            link: '/customers'
        },
        {
            title: 'Settings',
            icon: 'settings',
            link: '/settings'
        }
    ]
    return (
        <div>
            {sidebarMenu.map((menu, index) => {
                return (
                    <div key={index} className="flex items-center space-x-2 p-4 hover:bg-gray-100 cursor-pointer">
                        <span className="material-icons">{menu.icon}</span>
                        <span>{menu.title}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar

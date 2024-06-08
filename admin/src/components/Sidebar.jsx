import React from 'react';
import { LuLayoutDashboard, LuUserCog2, LuNewspaper } from "react-icons/lu";
import { CiShoppingBasket, CiShop } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import { ImUsers } from "react-icons/im";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from 'next/navigation';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigation = (link) => {

        router.push(link);
        setIsSidebarOpen(false);

    };

    const sidebarMenu = [
        {
            title: 'Dashboard',
            icon: <LuLayoutDashboard />,
            link: '/admin/dashboard',
        },
        {
            title: 'Products',
            icon: <CiShoppingBasket />,
            submenu: [
                {
                    title: 'Products List',
                    link: '/admin/products',
                },
                {
                    title: 'Create Products',
                    link: '/admin/products/create-product',
                },
                {
                    title: 'Product Reviews',
                    link: '/admin/products/product-reviews',
                },
            ],
        },
        {
            title: 'Categories',
            icon: <LuUserCog2 />,
            submenu: [
                {
                    title: 'Categories List',
                    link: '/admin/categories',
                },
                {
                    title: 'Create Category',
                    link: '/admin/categories/create-category',
                },
            ],
        },
        {
            title: 'Brands',
            icon: <TbGridDots />,
            submenu: [
                {
                    title: 'Brands List',
                    link: '/admin/brands',
                },
                {
                    title: 'Create Brand',
                    link: '/admin/brands/create-brand',
                },
            ],
        },
        {
            title: 'Orders',
            icon: <LuNewspaper />,
            submenu: [
                {
                    title: 'Orders List',
                    link: '/admin/orders',
                },
                {
                    title: 'Order Details',
                    link: '/admin/orders/order-detail',
                },
            ],
        },
        {
            title: 'Customers',
            icon: <ImUsers />,
            link: '/admin/customers',
        },
        {
            title: 'Refunds',
            icon: <HiOutlineReceiptRefund />,
            submenu: [
                {
                    title: 'Refund Requests',
                    link: '/admin/refunds',
                },
                {
                    title: 'Refund Details',
                    link: '/admin/refunds/refund-details',
                },
            ],
        },
        {
            title: 'Sellers',
            icon: <CiShop />,
            submenu: [
                {
                    title: 'Sellers List',
                    link: '/admin/sellers',
                },
                {
                    title: 'Seller Package',
                    link: '/admin/sellers/seller-package',
                },
                {
                    title: 'Earning History',
                    link: '/admin/sellers/earning-history',
                },
                {
                    title: 'Payouts',
                    link: '/admin/sellers/payouts',
                },
                {
                    title: 'Payout Requests',
                    link: '/admin/sellers/payout-requests',
                },
            ],
        },
    ];

    return (
        <div
            className={`h-[100vh] overflow-y-scroll scrollbar-thin overflow-x-hidden w-[15rem] text-white bg-[#2b3445] transition-transform ease-in-out delay-500 px-4 py-2 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className='flex justify-between'>
                <Image src='/logo.svg' alt='logo' width={120} height={50} className='w-auto h-auto text-white cursor-pointer' />
            </div>
            <h2 className='relative top-4 left-3'>Admin</h2>
            {sidebarMenu.map((menu, index) => (
                <div key={index} className='mt-4'>
                    {!menu.submenu ? (
                        <div
                            onClick={() => handleNavigation(menu.link || '#')}
                            className={`flex items-center space-x-2 p-4 cursor-pointer rounded font-light -mb-5 ${pathname === menu.link ? 'bg-gray-700' : ''
                                }`}
                        >
                            <span className='mt-1 text-lg'>{menu.icon}</span>
                            <span className='mt-1'>{menu.title}</span>
                        </div>
                    ) : (
                        <Accordion type='single' collapsible>
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger>
                                    <div className='flex items-center space-x-2 p-4 cursor-pointer rounded'>
                                        <span className='mt-1 text-lg'>{menu.icon}</span>
                                        <span className='mt-1'>{menu.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        {menu.submenu.map((submenu, subIndex) => (
                                            <li
                                                key={subIndex}
                                                onClick={() => handleNavigation(submenu.link)}
                                                className={`flex space-x-4 ml-4 cursor-pointer ${pathname === submenu.link ? 'bg-gray-700' : ''
                                                    }`}
                                            >
                                                <span className='text-2xl mt-1'>.</span>
                                                <span className='mt-[17px]'>{submenu.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;

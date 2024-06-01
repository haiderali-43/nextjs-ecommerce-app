import React from 'react';
import Link from 'next/link';
import { LuLayoutDashboard, LuUserCog2, LuNewspaper } from "react-icons/lu";
import { CiShoppingBasket, CiShop } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import { ImUsers } from "react-icons/im";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,

} from "@/components/ui/accordion"



const Sidebar = ({ isSidebarOpen }) => {
    const sidebarMenu = [
        {
            title: 'Dashboard',
            icon: <LuLayoutDashboard />,
            link: '/dashboard'
        },
        {
            title: 'Products',
            icon: <CiShoppingBasket />,
            submenu: [


                {
                    title: 'Prodcuts List',
                    link: '/products-list'
                },
                {
                    title: 'Create Products',
                    link: '/create-product'
                },
                {
                    title: 'Product Reviews',
                    link: '/product-reviews'
                }


            ]
        },
        {
            title: 'Categories',
            icon: <LuUserCog2 />,
            submenu: [
                {
                    title: "Brands List",
                    link: "/brands"
                },
                {
                    title: "Create Brand",
                    link: "/create",
                }
            ]
        },
        {
            title: 'Brands',
            icon: <TbGridDots />,
            submenu: [
                {
                    title: "Category List",
                    link: "/categories"
                },
                {
                    title: "Create Category",
                    link: "/create",
                }
            ]
        },
        {
            title: 'Orders',
            icon: <LuNewspaper />,
            submenu: [
                {
                    title: "Order List",
                    link: "/order-list"
                },
                {
                    title: "Order Details",
                    link: "/orderdetails",
                }
            ]
        },
        {
            title: "Customers",
            icon: <ImUsers />,
            link: "/customers"
        },
        {
            title: 'Refunds',
            icon: <HiOutlineReceiptRefund />,
            submenu: [
                {
                    title: "Refund Requests",
                    link: "/refunds"
                },
                {
                    title: "Refund Details",
                    link: "/refunddetails",
                }
            ]
        },
        {
            title: "Sellers",
            icon: <CiShop />,
            submenu: [
                {
                    title: "Sellers List",
                    link: "/sellers",
                },
                {
                    title: "Earning History",
                    link: "/earning-history",
                },
                {
                    title: "Payouts",
                    link: "/payouts",
                },
                {
                    title: "Payout Requests",
                    link: "/payout-requests",
                }
            ]
        }
    ];

    return (


        <div className={`h-[100vh] overflow-y-scroll scrollbar-thin overflow-x-hidden w-[15rem] text-white bg-[#2b3445]  px-4 py-2 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='cursor-pointer'>
                <Image src="/logo.svg" alt="logo" width={120} height={50} className='w-auto h-auto text-white' />
            </div>
            {sidebarMenu.map((menu, index) => (
                <div key={index} className=" mt-4">
                    <Link href={menu.link || "#"}>
                        <div className="flex items-center space-x-2 p-4 cursor-pointer  rounded">
                            <Accordion type='single' collapsible>

                                <AccordionItem value="item-1">

                                    <AccordionTrigger>
                                        <div className='flex space-x-4'>
                                            <span className='mt-1 text-lg'>{menu.icon}</span>
                                            <span className='mt-1'>{menu.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {menu.submenu && (
                                            <ul>
                                                {menu.submenu.map((submenu, index) => (
                                                    <li key={index} className="">
                                                        <Link href={submenu.link} className='flex space-x-4 ml-4'>
                                                            <span className='text-xl mt-[8px]'>.</span>
                                                            <span className='mt-4'>{submenu.title}</span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    </AccordionContent>
                                </AccordionItem>


                            </Accordion>
                        </div>
                    </Link>

                </div>
            ))}
        </div>
    );
};

export default Sidebar;


import React from 'react'
import Link from 'next/link';

import Image from 'next/image';
import { Itim } from 'next/font/google';
import { Button } from '@/components/ui/button';


const itim = Itim({ subsets: ['latin'], weight: '400' });

const Page = () => {

    return (
        <div className="p-4">
            <div className='flex flex-col md:flex-row justify-between px-4 mt-10'>
                <div className='mt-14 ml-10'>
                    <h1 className='text-3xl font-bold mt-4'>Welcome to Bazaar Seller Central</h1>
                    <p className='mt-4'>Seller central is a platform where <br /> you can manage your products, orders, customers and much more.</p>
                    <Button variant="" className="mt-8">
                        <Link href="/admin/dashboard">
                            Dashboard
                        </Link>
                    </Button>
                </div>
                <div className='mt-4 md:mt-0'>
                    <Image src="/hero-image.png" alt="hero" width={500} height={500} className='border border-gray-300 rounded-[30px]' />
                </div>
            </div>
            <div className={` ${itim.className} relative top-20  text-2xl text-center `}>
                More than 70% of sellers generate their first sale in less than 60 days.
            </div>
        </div>
    );
}

export default Page

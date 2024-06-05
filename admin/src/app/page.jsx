import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const page = () => {
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
         Seller welcome page
         <Button>
                <Link href="/dashboard">Admin</Link>
         </Button>
        </div>
    );
}

export default page

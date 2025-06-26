import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import General from '@/components/site-settings/General'
import Topbar from '@/components/site-settings/Topbar'
import Footer from '@/components/site-settings/Footer'
import Social from '@/components/site-settings/Social'
import Banner from '@/components/site-settings/Banner'
import Shipping from '@/components/site-settings/Shipping'


const page = () => {
  return (
    <div className='p-6'>
      <div className='p-4 border border-gray-200 rounded-lg shadow-lg'>
        <Tabs defaultValue="account" className="w-[400px] p-4">
          <TabsList>
            <TabsTrigger value="account">General</TabsTrigger>
            <TabsTrigger value="topbar">Topbar</TabsTrigger>
            <TabsTrigger value="footer">Footer</TabsTrigger>
            <TabsTrigger value="social">Social Links</TabsTrigger>
            <TabsTrigger value="banner">Banner Slider</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Vat</TabsTrigger>
          </TabsList>
          <div className='mt-4 ml-4'>
            <TabsContent value="account">
              <General />
            </TabsContent>

            <TabsContent value="footer">
              <Footer />
            </TabsContent>
            <TabsContent value="social">
              <Social />
            </TabsContent>
            <TabsContent value="banner">
              <Banner />
            </TabsContent>
            <TabsContent value="shipping">
              <Shipping />
            </TabsContent>
          </div>
        </Tabs>

      </div>
    </div>
  )
}

export default page

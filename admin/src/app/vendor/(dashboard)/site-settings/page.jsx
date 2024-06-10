import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import General from '@/components/site-settings/General'
import Topbar from '@/components/site-settings/Topbar'
import Footer from '@/components/site-settings/Footer'
import Social from '@/components/site-settings/Social'
import Banner from '@/components/site-settings/Banner'
import Shipping from '@/components/site-settings/Shipping'

const Page = () => {
  return (
    <div className='p-4 md:p-6 w-full'>
      <div className='p-4 border border-gray-200 rounded-lg shadow-lg w-full'>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="flex flex-wrap md:flex-nowrap justify-start md:justify-between w-full space-x-2 md:space-x-0">
            <TabsTrigger value="account" className="w-full md:w-auto">General</TabsTrigger>
            <TabsTrigger value="topbar" className="w-full md:w-auto">Topbar</TabsTrigger>
            <TabsTrigger value="footer" className="w-full md:w-auto">Footer</TabsTrigger>
            <TabsTrigger value="social" className="w-full md:w-auto">Social Links</TabsTrigger>
            <TabsTrigger value="banner" className="w-full md:w-auto">Banner Slider</TabsTrigger>
            <TabsTrigger value="shipping" className="w-full md:w-auto">Shipping & Vat</TabsTrigger>
          </TabsList>
          <div className='mt-4'>
            <TabsContent value="account" className="w-full">
              <General />
            </TabsContent>
            <TabsContent value="topbar" className="w-full">
              <Topbar />
            </TabsContent>
            <TabsContent value="footer" className="w-full">
              <Footer />
            </TabsContent>
            <TabsContent value="social" className="w-full">
              <Social />
            </TabsContent>
            <TabsContent value="banner" className="w-full">
              <Banner />
            </TabsContent>
            <TabsContent value="shipping" className="w-full">
              <Shipping />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default Page

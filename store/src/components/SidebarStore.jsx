import React from 'react';
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from './ui/accordion';
import Link from 'next/link';
import { Cross2Icon } from '@radix-ui/react-icons';

const SidebarStore = ({ isSidebarOpen }) => {

  const sidebarMenu = [
    {
      title: "Electronics",
      submenu: [
        {
          title: "Mobiles Phones",
          submicromenu: [
            {
              title: "Smart Phones",
              link: "/electronics/mobiles/smart-phones",
            },
            {
              title: "Feature Phones",
              link: "/electronics/mobiles/feature-phones"
            },
            {
              title: "Phone Accessories",
              link: "/electronics/mobiles/phone-accessories"

            }
          ]
        },
        {
          title: "Computers & Tablets",
          submicromenu: [
            { title: "Laptops" },
            { title: "Desktops" },
            { title: "Tablets" },
            { title: "Computer Accessories" }
          ]
        },
        {
          title: "Home Appliances",
          submicromenu: [
            { title: "Refrigerators" },
            { title: "Air Conditioners" },
            { title: "Washing Machines" },
            { title: "Kitchen Appliances" }
          ]
        },
        {
          title: "Audio & Video",
          submicromenu: [
            { title: "Televisions" },
            { title: "Speakers" },
            { title: "Headphones" }
          ]
        },
        {
          title: "Cameras & Photography",
          submicromenu: [
            { title: "Digital Cameras" },
            { title: "Lenses" },
            { title: "Camera Accessories" }
          ]
        },
        {
          title: "Wearable Technology",
          submicromenu: [
            { title: "Smart Watches" },
            { title: "Fitness Trackers" },
            { title: "Nintendo" }
          ]
        }
      ]
    },
    {
      title: "Fashion",
      submenu: [
        {
          title: "Men",
          submicromenu: [
            { title: "Clothing" },
            { title: "Footwear" },
            { title: "Accessories" }
          ]
        },
        {
          title: "Women",
          submicromenu: [
            { title: "Clothing" },
            { title: "Footwear" },
            { title: "Accessories" }
          ]
        },
        {
          title: "Kids",
          submicromenu: [
            { title: "Clothing" },
            { title: "Footwear" },
            { title: "Accessories" }
          ]
        }
      ]
    },
    {
      title: "Home & Furniture",
      submenu: [
        {
          title: "Furniture",
          submicromenu: [
            { title: "Living Room" },
            { title: "Bedroom" },
            { title: "Office" }
          ]
        },
        {
          title: "Home Decor",
          submicromenu: [
            { title: "Lighting" },
            { title: "Wall Art & Paintings" },
            { title: "Curtains & Blinds" }
          ]
        },
        {
          title: "Kitchen & Dining",
          submicromenu: [
            { title: "Cookware" },
            { title: "Tableware" },
            { title: "Kitchen Storage" }
          ]
        }
      ]
    },
    {
      title: 'Beauty & Personal Care',
      submenu: [
        {
          title: 'Makeup',
          submicromenu: [
            { title: 'Lips' },
            { title: 'Eyes' },
            { title: 'Face' }
          ]
        },
        {
          title: 'Skin Care',
          submicromenu: [
            { title: 'Moisturizers' },
            { title: 'Cleansers' },
            { title: 'Treatments' }
          ]
        },
        {
          title: 'Hair Care',
          submicromenu: [
            { title: 'Shampoos' },
            { title: 'Conditioners' },
            { title: 'Hair Color' }
          ]
        },
        {
          title: 'Fragrances',
          submicromenu: [
            { title: 'Perfumes' },
            { title: 'Deodorants' }
          ]
        }
      ]
    },
    {
      title: 'Health & Fitness',
      submenu: [
        {
          title: 'Vitamin & Supplements',
          submicromenu: [
            { title: 'Multivitamins' },
            { title: 'Protein Supplements' },
            { title: 'Herbal Supplements' }
          ]
        },
        {
          title: 'Medical Supplies',
          submicromenu: [
            { title: 'First Aids' },
            { title: 'Health Monitors' }
          ]
        },
        {
          title: 'Fitness Equipment',
          submicromenu: [
            { title: 'Cardio Equipment' },
            { title: 'Strength Equipment' },
            { title: 'Yoga & Pilates' }
          ]
        }
      ]
    },
    {
      title: 'Sports & Outdoor',
      submenu: [
        {
          title: 'Sports Equipment',
          submicromenu: [
            { title: 'Cricket' },
            { title: 'Badminton' },
            { title: 'Cycling' }
          ]
        },
        {
          title: 'Outdoor',
          submicromenu: [
            { title: 'Camping' },
            { title: 'Hiking' },
            { title: 'Cycling' }
          ]
        }
      ]
    },
    {
      title: "Toys & Games",
      submenu: [
        {
          title: "Toys",
          submicromenu: [
            { title: "Action Figures" },
            { title: "Dolls" },
            { title: "Educational Toys" }
          ]
        },
        {
          title: "Games",
          submicromenu: [
            { title: "Board Games" },
            { title: "Puzzles" },
            { title: "Card Games" }
          ]
        }
      ]
    },
    {
      title: "Grocery",
      submenu: [
        {
          title: "Fruits & Vegetables",
          submicromenu: [
            { title: "Fresh Vegetables" },
            { title: "Fresh Fruits" },
            { title: "Herbs & Seasonings" }
          ]
        },
        {
          title: "Dairy & Eggs",
          submicromenu: [
            { title: "Milk" },
            { title: "Cheese" },
            { title: "Eggs" }
          ]
        },
        {
          title: "Beverages",
          submicromenu: [
            { title: "Tea" },
            { title: "Coffee" },
            { title: "Soft Drinks" }
          ]
        },
        {
          title: "Snacks",
          submicromenu: [
            { title: "Chips" },
            { title: "Nuts" },
            { title: "Popcorn" }
          ]
        }
      ]
    },
    {
      title: 'Books & Media',
      submenu: [
        {
          title: 'Books',
          submicromenu: [
            { title: 'Fiction' },
            { title: 'Non-Fiction' },
            { title: 'Children Books' }
          ]
        },
        {
          title: 'Music',
          submicromenu: [
            { title: 'Rock' },
            { title: 'Pop' },
            { title: 'Classical' }
          ]
        },
        {
          title: 'Movies',
          submicromenu: [
            { title: 'Action' },
            { title: 'Comedy' },
            { title: 'Drama' }
          ]
        }
      ]
    },
    {
      title: 'Automotive',
      submenu: [
        {
          title: 'Car Accessories',
          submicromenu: [
            { title: 'Car Mats' },
            { title: 'Car Covers' },
            { title: 'Car Fresheners' }
          ]
        },
        {
          title: 'Bike Accessories',
          submicromenu: [
            { title: 'Helmets' },
            { title: 'Gloves' },
            { title: 'Jackets' }
          ]
        },
        {
          title: 'Car Electronics',
          submicromenu: [
            { title: 'Car Stereos' },
            { title: 'Car Speakers' },
            { title: 'Car Amplifiers' }
          ]
        },
        {
          title: 'Bike Electronics',
          submicromenu: [
            { title: 'Bike Stereos' },
            { title: 'Bike Speakers' },
            { title: 'Bike Amplifiers' }
          ]
        }
      ]
    },
    {
      title: 'Baby & Kids',
      submenu: [
        { title: 'Baby Clothing' },
        { title: 'Feeding & Nursing' },
        { title: 'Diapers & Wipes' },
        { title: 'Kids Toys' }
      ]
    },
    {
      title: 'Pet Supplies',
      submenu: [
        {
          title: 'Dog Supplies',
          submicromenu: [
            { title: 'Dog Food' },
            { title: 'Dog Treats' },
            { title: 'Dog Toys' }
          ]
        },
        {
          title: 'Cat Supplies',
          submicromenu: [
            { title: 'Cat Food' },
            { title: 'Cat Treats' },
            { title: 'Cat Toys' }
          ]
        },
        {
          title: 'Bird Supplies',
          submicromenu: [
            { title: 'Bird Food' },
            { title: 'Bird Treats' },
            { title: 'Bird Toys' }
          ]
        }
      ]
    }
  ];

  return (
    <div className={`h-[100vh] w-[20rem] transition-transform overflow-y-scroll scrollbar-thin ease-in-out duration-300 overflow-x-hidden ${isSidebarOpen ? 'translate-x-0' : "-translate-x-full"} bg-[#2b3445] text-white `}>

      <ul className=' mt-16 px-4'>
        {sidebarMenu.map((menu, index) => (
          <li key={index} className='py-2'>
            <Accordion type='single' collapsible>
              <AccordionItem value={`menu-${index}`}>
                <AccordionTrigger>{menu.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className='ml-2'>
                    {menu.submenu.map((submenu, subIndex) => (
                      <li key={subIndex} className='py-2'>
                        <Accordion type='single' collapsible>
                          <AccordionItem value={`submenu-${index}-${subIndex}`}>
                            <AccordionTrigger className="text-white">{submenu.title}</AccordionTrigger>
                            <AccordionContent>
                              <ul className='ml-2'>
                                {submenu.submicromenu && submenu.submicromenu.map((submicromenu, submicroIndex) => (
                                  <li key={submicroIndex} className='py-2'>
                                    <Link href='#' className='text-sm font-semibold text-white'>
                                      {submicromenu.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default SidebarStore;

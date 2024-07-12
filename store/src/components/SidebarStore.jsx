import React from 'react';
import { PiFlowerThin } from "react-icons/pi";
import { GiLipstick } from "react-icons/gi";

const SidebarStore = () => {
  const sidebarMenu = [
    {
      title: "Grocery",
      icon: <PiFlowerThin />,
      submenu: [
        {
          title: "Fruits and Vegetables",
          submicromenu: [
            {
              title: "Fruits",
            },
            {
              title: "Vegetables",
            }
          ]
        },
        {
          title: "Meat & Fish",
          submicromenu: [
            {
              title: "Meat",
            },
            {
              title: "Fish",
            }
          ]
        },
        {
          title: "Cooking",
          submicromenu: [
            {
              title: "Oil",
            },
            {
              title: "Spices",
            }
          ]
        },
        {
          title: "Sauces & Pickles",
          submicromenu: [
            {
              title: "Pickles",
            },
            {
              title: "Tomato Sauce",
            }
          ]
        },
        {
          title: "Dairy and Eggs",
          submicromenu: [
            {
              title: "Dairy",
            },
            {
              title: "Cheese",
            }
          ]
        }
      ]
    },
    {
      title: "Beauty & makeup",
      icon: <GiLipstick />,
      submenu: [
        {
          title: "Skin Care",
        },
        {
          title: "Hair Care",
        }
      ]
    }
  ]
  return (
    <div className='border-r border-red-500 w-[15rem]  '>T
      this is the sidebar
    </div>
  )
}

export default SidebarStore

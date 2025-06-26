"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "./ui/accordion";
import Link from "next/link";

import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

const SidebarStore = ({ isSidebarOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState("");

  const sidebarMenu = [
    {
      title: "Electronics",
      submenu: [
        {
          title: "Smart Phones",
          link: "/electronics/smart-phones",
        },
        {
          title: "Feature Phones",
          link: "/electronic/feature-phones",
        },
        {
          title: "Phone Accessories",
          link: "/electronics/phone-accessories",
        },

        { title: "Laptops", link: "/electronics/laptops" },
        { title: "Desktops", link: "/electronics/desktops" },
        { title: "Tablets", link: "/electronics/tablets" },
        {
          title: "Computer Accessories",
          link: "/electronics/computer-accessories",
        },

        { title: "Refrigerators", link: "/electronics/refrigerators" },
        { title: "Air Conditioners", link: "/electronics/air-conditioners" },
        { title: "Washing Machines", link: "/electronics/washing-machines" },
        {
          title: "Kitchen Appliances",
          link: "/electronics/kitchen-appliances",
        },
        { title: "Televisions", link: "/electronics/televisions" },
        { title: "Speakers", link: "/electronics/speakers" },
        { title: "Headphones", link: "/electronics/headphones" },

        { title: "Digital Cameras", link: "/electronics/digital-cameras" },
        { title: "Lenses", link: "/electronics/lenses" },
        {
          title: "Camera Accessories",
          link: "/electronics/camera-accessories",
        },

        { title: "Smart Watches", link: "/electronics/smart-watches" },
        { title: "Fitness Trackers", link: "/electronics/fitness-trackers" },
        { title: "Nintendo", link: "/electronics/nintendo" },
      ],
    },
    {
      title: "Fashion",
      submenu: [
        { title: "Clothing", link: "/fashion/clothing" },
        { title: "Footwear", link: "/fashion/footwear" },
        { title: "Accessories", link: "/fashion/accessories" },
      ],
    },
    {
      title: "Home & Furniture",
      submenu: [
        { title: "Living Room", link: "/home-furniture/living-room" },
        { title: "Bedroom", link: "/home-furniture/bedroom" },
        { title: "Office", link: "/home-furniture/office" },

        { title: "Lighting", link: "/home-furniture/lighting" },
        { title: "Wall Art & Paintings", link: "/home-furniture/wall-art-paintings" },
        { title: "Curtains & Blinds", link: "/home-furniture/curtains-blinds" },

        { title: "Cookware", link: "/home-furniture/cookware" },
        { title: "Tableware", link: "/home-furniture/tableware" },
        { title: "Kitchen Storage", link: "/home-furniture/kitchen-storage" },

      ],
    },
    {
      title: "Beauty & Personal Care",
      submenu: [
        { title: "Lips", link: "/beauty-personal/lips" },
        { title: "Eyes", link: "/beauty-personal/eyes" },
        { title: "Face", link: "/beauty-personal/face" },

        { title: "Moisturizers", link: "/beauty-personal/moisturizers" },
        { title: "Cleaners", link: "/beauty-personal/cleaners" },
        { title: "Treatments", link: "/beauty-personal/treatments" },

        { title: "Shampoos", link: "/beauty-personal/shampoos" },

        { title: "Hair Care", link: "/beauty-personal/hair-care" },

        { title: "Perfumes", link: "/beauty-personal/perfumes" },

      ],
    },
    {
      title: "Health & Fitness",
      submenu: [
        { title: "Multivitamins", link: "/health-fitness/multivitamins" },
        { title: "Protein Supplements", link: "/health-fitness/protein" },
        { title: "Herbal Supplements", link: "/health-fitness/herbal" },
        { title: "Health Monitor", link: "/health-fitness/health-monitor" },
        { title: "Cardio Equipment", link: "/health-fitness/cardio" },
        { title: "Strength Equipment", link: "/health-fitness/strength" },
        { title: "Yoga & Pilates", link: "/health-fitness/yoga" },
      ],
    },
    {
      title: "Sports & Outdoor",
      submenu: [
        { title: "Cricket" },
        { title: "Badminton" },
        { title: "Cycling" },
        { title: "Camping" },
        { title: "Hiking" },
        { title: "Cycling" },
      ],
    },
    {
      title: "Toys & Games",
      submenu: [
        { title: "Action Figures" },
        { title: "Dolls" },
        { title: "Educational Toys" },
        { title: "Board Games" },
        { title: "Puzzles" },
        { title: "Card Games" },
      ],
    },
    {
      title: "Grocery",
      submenu: [
        { title: "Fresh Vegetables" },
        { title: "Fresh Fruits" },
        { title: "Herbs & Seasonings" },

        { title: "Milk" },
        { title: "Cheese" },
        { title: "Eggs" },
        { title: "Tea" },
        { title: "Coffee" },
        { title: "Soft Drinks" },
        { title: "Chips" },
        { title: "Nuts" },
        { title: "Popcorn" },
      ],
    },
    {
      title: "Books & Media",
      submenu: [
        { title: "Fiction" },
        { title: "Non-Fiction" },
        { title: "Children Books" },

        { title: "Rock" },
        { title: "Pop" },
        { title: "Classical" },

        { title: "Action" },
        { title: "Comedy" },
        { title: "Drama" },
      ],
    },
    {
      title: "Automotive",
      submenu: [
        { title: "Car Mats" },
        { title: "Car Covers" },
        { title: "Car Fresheners" },

        { title: "Helmets" },
        { title: "Gloves" },
        { title: "Jackets" },

        { title: "Car Stereos" },
        { title: "Car Speakers" },
        { title: "Car Amplifiers" },

        { title: "Bike Stereos" },
        { title: "Bike Speakers" },
        { title: "Bike Amplifiers" },
      ],
    },
    {
      title: "Baby & Kids",
      submenu: [
        { title: "Baby Clothing" },
        { title: "Feeding & Nursing" },
        { title: "Diapers & Wipes" },
        { title: "Kids Toys" },
      ],
    },
    {
      title: "Pet Supplies",
      submenu: [
        { title: "Dog Food" },
        { title: "Dog Treats" },
        { title: "Dog Toys" },

        { title: "Cat Food" },
        { title: "Cat Treats" },
        { title: "Cat Toys" },

        { title: "Bird Food" },
        { title: "Bird Treats" },
        { title: "Bird Toys" },
      ],
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  const currentMenu = selectedCategory ? selectedCategory.submenu : sidebarMenu;

  const handleTransition = (action) => {
    setIsTransitioning(true);
    setTimeout(() => {
      action();
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div
      className={`h-[100vh] w-[20rem] transition-transform overflow-y-scroll scrollbar-thin ease-in-out duration-300 overflow-x-hidden ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#2b3445] text-white`}
    >
      <ul
        className={`mt-16 px-4 transform transition-transform duration-300 ease-in-out ${isTransitioning ? "translate-x-[300px]" : " translate-x-0"
          }`}
      >
        {selectedCategory ? (
          <li className="py-2">
            <button
              onClick={() => handleTransition(handleBackClick)}
              className="flex items-center text-sm font-semibold text-white mb-4"
            >
              <ChevronLeftIcon className="mr-2" />
              Back
            </button>
            <hr />
            <h2 className="font-bold mt-3">{selectedCategory.title}</h2>
          </li>
        ) : null}
        {currentMenu.map((menu, index) => (
          <li key={index}>
            <Accordion type="single" collapsible>
              <AccordionItem value={`menu-${index}`}>
                <AccordionTrigger
                  onClick={() =>
                    !selectedCategory &&
                    handleTransition(() => handleCategoryClick(menu))
                  }
                  className="flex justify-between items-center"
                >
                  {menu.title}
                  {!selectedCategory && <ChevronRightIcon className="ml-2" />}
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarStore;

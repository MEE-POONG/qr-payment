import React, { useState } from 'react';
import DarkImageBackground from "@/components/BG";
import GalleryIndex from "@/components/Gallery";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GalleryTwo from '@/components/Gallery/two';

const SelectTem: React.FC = () => {
  // State to track the current gallery template index
  const [currentTemIndex, setCurrentTemIndex] = useState(0);

  // An array of gallery components for demonstration
  const galleryTemplates = [<GalleryIndex />, <GalleryTwo />]; // Add more templates as needed

  // Function to navigate to the next template
  const nextTemplate = () => {
    setCurrentTemIndex((prevIndex) => (prevIndex + 1) % galleryTemplates.length);
  };

  // Function to navigate to the previous template
  const prevTemplate = () => {
    setCurrentTemIndex((prevIndex) => (prevIndex - 1 + galleryTemplates.length) % galleryTemplates.length);
  };
  return (
    <div className="relative w-screen h-screen ">
      <DarkImageBackground />

      <div className='container m-auto flex h-full flex-wrap'>
        <div className="h-auto flex flex-col w-full z-50 lg:w-[40%] py-2 px-1 rounded-lg p-4 ">
          <div className="w-full flex-grow bg-blue-100 rounded-lg p-4 h-max ">

            <div className='mb-2'>
              <span className="block text-lg font-medium text-slate-700">ชื่อ</span>
              <input type="text" id="name"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="John" required />
            </div>
            <div className='mb-2'>
              <span className="block text-lg font-medium text-slate-700">facebook</span>
              <input type="text" id="facebook"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="John" required />
            </div>
            <div className='mb-2'>
              <span className="block text-lg font-medium text-slate-700">instagram</span>
              <input type="text" id="first_name"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="John" required />
            </div>
            <div className='mb-2'>
              <span className="block text-lg font-medium text-slate-700">line</span>
              <input type="text" id="first_name"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="John" required />
            </div>
            <div className='mb-2'>
              <span className="block text-lg font-medium text-slate-700">แคบชั่น</span>
              <input type="text" id="first_name"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="John" required />
            </div>
            <div className='mb-2'>
              <span className="block text-lg font-medium text-slate-700 ">เลือกเทมเพลต</span>
              <div id="select_gallery" className='flex w-full h-max justify-center text-3xl'>
                <button onClick={prevTemplate} className="p-4">
                  <FaChevronLeft />
                </button>
                <div className="flex-grow text-center">
                 Tem {currentTemIndex + 1}
                </div>
                <button onClick={nextTemplate} className="p-4">
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        {galleryTemplates[currentTemIndex]}
      </div>
    </div>
  );
}
export default SelectTem;
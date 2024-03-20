import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GalleryIndex from "@/components/Gallery";
import { GalleryTemData } from '@/data/gallery';
import BoxText from '@/components/Gallery/BoxText';
import Layout from '@/components/layout';
import UserInfoForm from '@/components/Gallery/UserInfoForm';

const SelectTem: React.FC = () => {
  const [galleryTemplate, setGalleryTemplate] = useState(0);

  const [userInfo, setUserInfo] = useState({
    caption: '',
    name: '',
    facebook: '',
    instagram: '',
    line: '',
  });
  const [selectedImages, setSelectedImages] = useState<string[]>(Array(GalleryTemData[0].imglist.length).fill(""));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserInfo(prevInfo => ({ ...prevInfo, [id]: value }));
  };

  const nextTemplate = () => {
    setGalleryTemplate(prevIndex => (prevIndex + 1) % GalleryTemData.length);
  };

  const prevTemplate = () => {
    setGalleryTemplate(prevIndex => (prevIndex - 1 + GalleryTemData.length) % GalleryTemData.length);
  };

  const handleSubmit = () => {
    console.log('User Info:', userInfo);
    setSelectedImages(prev => {
      const newSize = GalleryTemData[galleryTemplate].imglist.length;
      const newArray = [...prev];
      newArray.length = newSize; // Adjust the length of the array
      newArray.fill("", prev.length); // Fill new slots with empty strings
      return newArray;
    });
  };

  return (
    <Layout>
      <div className='container m-auto flex h-full flex-wrap'>
        <div className="flex flex-col w-full z-50 lg:w-[40%] py-2 px-1 rounded-lg p-4 ">
          <div className="w-full flex-grow bg-white rounded-lg p-4">
            <span className="block text-lg font-medium text-slate-700 ">เลือกเทมเพลต</span>
            <div id="select_gallery" className='flex w-full h-max justify-center text-3xl'>
              <button onClick={prevTemplate} className="py-2">
                <FaChevronLeft />
              </button>
              <div className="flex-grow text-center py-2">
                Tem {galleryTemplate + 1}
              </div>
              <button onClick={nextTemplate} className="py-2">
                <FaChevronRight />
              </button>
            </div>
            <div className='hidden md:block '>
              <UserInfoForm userInfo={userInfo} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
        <div className="h-[60%] flex flex-col w-full md:h-[100%] lg:w-[60%] py-2 px-1">
          <GalleryIndex
            mode={'edit'}
            selectTem={galleryTemplate}
            selectedImages={selectedImages}
            updateSelectedImages={setSelectedImages}
          />
          <BoxText data={userInfo} />
        </div>
        <div className="h-auto flex flex-col w-full z-50 lg:w-[40%] py-2 px-1 rounded-lg p-4 md:hidden">
          <div className="w-full flex-grow bg-white rounded-lg p-4 h-max ">
            <UserInfoForm userInfo={userInfo} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </Layout >
  );
}
export default SelectTem;
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GalleryIndex from "@/components/Gallery";
import { GalleryTemData } from '@/data/gallery';
import BoxText from '@/components/Gallery/BoxText';
import Layout from '@/components/layout';
import UserInfoForm from '@/components/Gallery/UserInfoForm';
import axios from 'axios';
import Image from 'next/image';
import SliderIndex from '@/components/Slider';
import SliderCheckData from '@/components/Slider/CheckData';

interface ImageData {
  id: string;
  number: string;
  src: string;
  createdAt: string;
  updatedAt: string;
  postProfileID: string;
}

interface Payment {
  id: string;
  amount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  postProfileID: string;
}

interface Profile {
  id: string;
  name: string;
  caption: string;
  facebook: string;
  instagram: string;
  line: string;
  galleryTemplate: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  deletedBy: null | string;
  ImageData: ImageData[];
  Payment: Payment[];
}

const Index: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [imageCount, setImageCount] = useState(0);
  const [selectedImages, setSelectedImages] = useState<string[]>(Array(GalleryTemData[0].imglist.length).fill(""));

  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const [dynamicStyle, setDynamicStyle] = useState<React.CSSProperties>({});

  const updateImageCount = (count: number) => {
    setImageCount(count);
  };
  const fetchProfiles = async () => {
    const response = await fetch('/api/profiledata/poststory/search');
    const data = await response.json();
    setProfiles(data);
  };

  useEffect(() => {
    fetchProfiles();
    const checkScreenOrientation = () => {
      if (typeof window !== 'undefined') {
        setIsLargeScreen(window.innerWidth > 1024);
        setIsLandscape(window.innerHeight < window.innerWidth);
      }
    };

    checkScreenOrientation();

    window.addEventListener('resize', checkScreenOrientation);

    return () => window.removeEventListener('resize', checkScreenOrientation);
  }, []);

  useEffect(() => {
    if (isLargeScreen && isLandscape) {
      setDynamicStyle({ height: 'calc(100vh - 180px - 0.25rem)' });
    } else {
      setDynamicStyle({ height: 'max-content' });
    }
  }, [isLargeScreen, isLandscape]);

// สร้างฟังก์ชั่นและ รับค่าเลขของสไลด์ เช็คว่าใช้ลำดับสุดท้ายไหม profiles.legth ถ้าใช้ เรียกใช้ fetchProfiles
  return (
    <Layout>
      <div className='m-auto flex h-full flex-wrap lg:flex-nowrap content-start '>
        <SliderCheckData  onLastSlide={fetchProfiles}>
          <div className={`relative aspect-[3/2] `} style={dynamicStyle}>
            <img src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/d04ff08a-43b5-41db-bf6e-c28d608b5600/wlg" className="w-full h-full object-contain bg-white rounded-lg" alt="" />
            < div className={` absolute top-full w-full h-[120px]`} style={{ top: "calc(100% + 0.5rem)" }}>
              <div className={`flex flex-col bg-white rounded-lg items-center justify-center h-[100px] md:h-[160px] mb-2`} >
                <div className="flex justify-around w-full items-center p-1 md:p-2 ">
                  <div id='show_caption' className="font-extrabold text-lg md:text-4xl lg:text-6xl break-words md:leading-normal lg:leading-normal overflow-hidden text-center text-white bg-red-500 p-4 tracking-[.25em] italic ">
                    ESCOBAR
                  </div>
                </div>
              </div>
            </div>
          </div>
          {profiles?.map((profile) => (
            <div key={profile?.id} className={`relative aspect-[3/2] `} style={dynamicStyle}>
              <GalleryIndex
                mode={'view'}
                selectTem={profile.galleryTemplate}
                selectedImages={profile.ImageData.map(image => image.src)}
                updateSelectedImages={setSelectedImages}
                updateImageCount={updateImageCount}
              />
              < div className={` absolute top-full w-full`} style={{ top: "calc(100% + 0.5rem)" }}>
                <BoxText data={profile} />
              </div>
            </div>
          ))}
        </SliderCheckData>
      </div>
    </Layout >
  );
}
export default Index;
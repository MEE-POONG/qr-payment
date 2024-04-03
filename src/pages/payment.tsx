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

const Payment: React.FC = () => {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [imageCount, setImageCount] = useState(0);
  const [selectedImages, setSelectedImages] = useState<string[]>(Array(GalleryTemData[0].imglist.length).fill(""));

  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const [dynamicStyle, setDynamicStyle] = useState<React.CSSProperties>({});

  const updateImageCount = (count: number) => {
    setImageCount(count);
  };

  useEffect(() => {
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

  useEffect(() => {
    const fetchProfile = async () => {
      const profileId = localStorage.getItem('profileId');
      if (typeof profileId !== 'string') return;
      try {
        const response = await fetch(`/api/profiledata/poststory/${profileId}`);
        const data: Profile = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('An error occurred while fetching the profile:', error);
      }
    };

    if (router.isReady) {
      fetchProfile();
    }
  }, [router.isReady, router.query]);
  useEffect(() => {
    console.log("profile : ", profile);
  }, [profile]);

  return (
    <Layout>
      <div className='m-auto flex h-full flex-wrap lg:flex-nowrap content-start '>
        <div className='w-full h-max md:max-md:h-screen lg:h-screen py-2 px-1 md:max-md:w-[70%] lg:w-[70%] flex justify-center' >
          {profile && (
            <div className={`relative aspect-[3/2] `} style={dynamicStyle}>
              <GalleryIndex
                mode={'view'}
                selectTem={profile.galleryTemplate}
                selectedImages={profile?.ImageData?.map(image => image.src)}
                updateSelectedImages={setSelectedImages}
                updateImageCount={updateImageCount}
              />
              < div className={` absolute top-full w-full`} style={{ top: "calc(100% + 0.5rem)" }}>
                <BoxText data={profile} />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col w-full z-50 lg:w-[40%] py-2 px-1 rounded-lg p-4 mt-[100px] md:mt-[160px] lg:mt-0 ">
          <div className="md:max-md:w-[95%] md:flex-grow bg-white rounded-lg p-4 flex flex-col">
            <span className="block text-2xl font-medium text-slate-700 ">สรุปรายการ Post</span>
            <div className="flex text-2xl font-medium text-slate-700 ">ราคา<span className='ms-auto me-2 text-green-500'>29</span>บาท</div>
            <div className='my-auto py-2 text-center'>
              <span className="block text-2xl font-medium text-slate-700 mb-2">ชำระ</span>
              <img src='/images/qrcode.png' alt="" className="rounded-md p-2 border-solid border-2 border-sky-500 mx-auto w-[90%] " />
            </div>
            <button className='bg-red-500 hover:bg-red-800  p-2 rounded-md text-white mt-auto'>ยกเลิกรายการ</button>
          </div>
        </div>
      </div>
    </Layout >
  );
}
export default Payment;

// Pending
// Processing
// Completed
// Failed
// Cancelled
// Refunded
// Charged Back
// Authorized
// Voidedกร
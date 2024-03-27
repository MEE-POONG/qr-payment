import React, { useEffect, useState } from "react";
import GalleryIndex from "@/components/Gallery";
import Layout from "@/components/layout";
import Image from "next/image";
import { GalleryTemData } from "@/data/gallery";
import BoxText from "@/components/Gallery/BoxText";

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
  const [galleryTemplate, setGalleryTemplate] = useState(0);
  const [imageCount, setImageCount] = useState(0); 
  const [selectedImages, setSelectedImages] = useState<string[]>(Array(GalleryTemData[0].imglist.length).fill(""));
  const [profiles, setProfiles] = useState<Profile[]>([]);


  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch('/api/profiledata/poststory');
      const data = await response.json();
      setProfiles(data);
    };

    fetchProfiles();
  }, []);

  const updateImageCount = (count: number) => {
    setImageCount(count);
  };


 
  return (
    <Layout>
      <div className='container m-auto flex h-full flex-wrap'>
        {profiles.map((profile) => (
          <div key={profile.id} className="h-[60%] flex flex-col w-full md:h-[100%] lg:w-[60%] py-2 px-1">
            <GalleryIndex
              mode={'view'}
              selectTem={profile.galleryTemplate}
              selectedImages={profile.ImageData.map(image => image.src)}
              updateSelectedImages={setSelectedImages}
              updateImageCount={updateImageCount}
            />
            <BoxText data={profile} />
          </div>
        ))}
        <div className="flex flex-col w-full z-50 lg:w-[40%] py-2 px-1 rounded-lg p-4 ">
          <div className="w-full flex-grow bg-white rounded-lg p-4">
            <span className="block text-lg font-medium text-slate-700 ">เลือกเทมเพลต</span>

            <div className='hidden md:block '>
            </div>
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
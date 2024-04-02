import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GalleryIndex from "@/components/Gallery";
import { GalleryTemData } from '@/data/gallery';
import BoxText from '@/components/Gallery/BoxText';
import Layout from '@/components/layout';
import UserInfoForm from '@/components/Gallery/UserInfoForm';
import axios from 'axios';

const SelectTem: React.FC = () => {
  const router = useRouter();
  const [galleryTemplate, setGalleryTemplate] = useState(0);
  const [imageCount, setImageCount] = useState(0); // State สำหรับจำนวนรูปภาพ

  const [userInfo, setUserInfo] = useState({
    caption: '',
    name: '',
    facebook: '',
    instagram: '',
    line: '',
  });
  const [selectedImages, setSelectedImages] = useState<string[]>(Array().fill(""));
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const [dynamicStyle, setDynamicStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    // This function checks if window is defined and then updates state accordingly
    const checkScreenOrientation = () => {
      if (typeof window !== 'undefined') {
        setIsLargeScreen(window.innerWidth > 1024);
        setIsLandscape(window.innerHeight < window.innerWidth);
      }
    };

    // Call checkScreenOrientation on mount to set the initial state based on the current window size
    checkScreenOrientation();

    // Setup event listener for resizing the window
    window.addEventListener('resize', checkScreenOrientation);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', checkScreenOrientation);
  }, []);

  useEffect(() => {
    if (isLargeScreen && isLandscape) {
      setDynamicStyle({ height: 'calc(100vh - 180px - 0.25rem)' });
    } else {
      setDynamicStyle({ width: '100%' });
    }
  }, [isLargeScreen, isLandscape]);


  const updateImageCount = (count: number) => {
    setImageCount(count);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserInfo(prevInfo => ({ ...prevInfo, [id]: value }));
  };

  const navigateTemplate = (direction: 'next' | 'prev') => {
    setGalleryTemplate(prevIndex => {
      const newIndex = direction === 'next' ? prevIndex + 1 : prevIndex - 1;
      return (newIndex + GalleryTemData.length) % GalleryTemData.length;
    });
  };

  const uploadImage = async (imageBlob: Blob): Promise<string | null> => {
    const uploadFormData = new FormData();
    uploadFormData.append("file", imageBlob);
    try {
      const uploadResponse = await axios.post(
        "https://upload-image.me-prompt-technology.com/",
        uploadFormData,
      );

      if (uploadResponse?.status === 200) {
        return uploadResponse?.data?.result?.id;
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
    return null;
  };

  const isUserInfoPopulated = () => {
    return Object.values(userInfo).some(value => value.trim() !== '');
  };

  const handleSubmit = async () => {

    if (selectedImages.length > 0) {
      const imageUploadPromises = selectedImages.slice(0, imageCount).map(async (imageSrc) => {
        const response = await fetch(imageSrc);
        const blob = await response.blob();
        return uploadImage(blob); // สมมติว่าฟังก์ชันนี้อัพโหลดรูปภาพและส่งคืน ID หรือ URL
      });

      try {
        const imageIDs = await Promise.all(imageUploadPromises);
        console.log('Uploaded Image IDs:', imageIDs);

        // Now, construct your complete request body with the image IDs and other info
        const requestBody = {
          name: userInfo.name,
          caption: userInfo.caption,
          facebook: userInfo.facebook,
          instagram: userInfo.instagram,
          line: userInfo.line,
          galleryTemplate: galleryTemplate,
          selectedImages: imageIDs.map((id, index) => ({ number: index + 1, src: id })),
          // Assume your payment info is static or gathered from elsewhere
          payment: { amount: 29, status: 'Pending' },
        };

        // Submit the complete form to your API
        const response = await fetch('/api/profiledata/poststory', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        localStorage.setItem('profileId', data.id); // บันทึก ID ลงใน localStorage
        router.push('/payment'); // นำทางไปยังหน้า /payment

      } catch (error) {
        console.error('Error uploading images or submitting form:', error);
      }
    } else {
      console.log('No images selected for upload.');
    }
  };

  return (
    <Layout>
      <div className='m-auto flex h-full flex-wrap lg:flex-nowrap'>
        <div className="flex flex-col w-full md:max-md:w-[30%] lg:w-[30%]  z-50 py-2 px-1 rounded-lg p-4 ">
          <div className="w-full flex-grow bg-white rounded-lg p-4">
            <span className="block text-lg font-medium text-slate-700 ">เลือกเทมเพลต</span>
            <div id="select_gallery" className='flex w-full h-max justify-center text-3xl'>
              <button onClick={() => navigateTemplate('prev')} className="py-2">
                <FaChevronLeft />
              </button>
              <div className="text-center py-2">
                Tem {galleryTemplate + 1}
              </div>
              <button onClick={() => navigateTemplate('next')} className="py-2">
                <FaChevronRight />
              </button>
            </div>
            <div className='block'>
              <UserInfoForm userInfo={userInfo} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
        <div className='w-full md:max-md:h-screen lg:h-screen  py-2 px-1 md:max-md:w-[70%] lg:w-[70%]' >
          <div className={`relative aspect-[3/2] `} style={dynamicStyle}>
            <GalleryIndex
              mode={'edit'}
              selectTem={galleryTemplate}
              selectedImages={selectedImages}
              updateSelectedImages={setSelectedImages}
              updateImageCount={updateImageCount}
            />
            <div className={` absolute top-full w-full`} style={{ top: "calc(100% + 0.5rem)" }}>
              <BoxText data={userInfo} />
            </div>
          </div>
        </div>
      </div>
    </Layout >
  );
}
export default SelectTem;
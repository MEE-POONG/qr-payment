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
  const [galleryTemplate, setGalleryTemplate] = useState({
    tem: GalleryTemData[0].tem,
    imgListCount: GalleryTemData[0].imglist.length,
  });

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
    const profileId = localStorage.getItem('profileId');
    if (profileId) {
      router.push('/payment');
      return;
    }
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
    setGalleryTemplate(prevState => {
      // Calculate the new template index based on the direction
      const newIndex = direction === 'next'
        ? (prevState.tem + 1) % GalleryTemData.length
        : (prevState.tem - 1 + GalleryTemData.length) % GalleryTemData.length;

      // Fetch the new template from the GalleryTemData array
      const newTemplate = GalleryTemData[newIndex];

      // Return the new state with updated tem and imgListCount
      return {
        tem: newIndex,
        imgListCount: newTemplate.imglist.length
      };
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

  const handleSubmit = async () => {
    console.log(galleryTemplate);
    const isUserInfoValid = Object.values(userInfo).some(value => value.trim().length > 4);

    // Check if the number of selected images matches the required number of images for the template
    const isImageCountValid = selectedImages.length === galleryTemplate.imgListCount;

    if (!isUserInfoValid) {
      alert(`กรุณากรอกข้อมูลในช่องข้อมูลผู้ใช้อย่างน้อยหนึ่งช่องที่มีอักขระมากกว่า 4 ตัว`);
      return;
    }

    if (!isImageCountValid) {
      alert(`โปรดเลือกรูปภาพ ${galleryTemplate.imgListCount} รูป สำหรับเทมเพลตนี้`);
      return;
    }
    if (selectedImages.length > 0) {
      const imageUploadPromises = selectedImages.slice(0, imageCount).map(async (imageSrc) => {
        const response = await fetch(imageSrc);
        const blob = await response.blob();
        return uploadImage(blob); // สมมติว่าฟังก์ชันนี้อัพโหลดรูปภาพและส่งคืน ID หรือ URL
      });

      let imageIDs = await Promise.all(imageUploadPromises);
      try {
        // Now, construct your complete request body with the image IDs and other info
        imageIDs = await Promise.all(imageUploadPromises);

        const requestBody = {
          name: userInfo.name,
          caption: userInfo.caption,
          facebook: userInfo.facebook,
          instagram: userInfo.instagram,
          line: userInfo.line,
          galleryTemplate: galleryTemplate?.tem,
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
        console.error('Error during form submission or image upload:', error);
        // Attempt to delete uploaded images
        const validImageIDs = imageIDs.filter((id): id is string => id !== null);
        await Promise.all(validImageIDs.map(deleteImage));
        // Handle failure (e.g., show an error message)
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
                Tem {galleryTemplate?.tem + 1}
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
        <div className='w-full h-max md:max-md:h-screen lg:h-screen  py-2 px-1 md:max-md:w-[70%] lg:w-[70%] ' >
          <div className={`relative aspect-[3/2] `} style={dynamicStyle}>
            <GalleryIndex
              mode={'edit'}
              selectTem={galleryTemplate?.tem}
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
async function deleteImage(imageId: string): Promise<void> {
  try {
    // Replace the URL and method as per your backend API's requirement
    await fetch(`https://your-backend-api.com/images/${imageId}`, { method: 'DELETE' });
  } catch (error) {
    console.error("Failed to delete uploaded image:", error);
  }
}

async function uploadImage(blob: Blob): Promise<string> {
  // Implementation of your uploadImage function that returns an image ID
  return "";
}
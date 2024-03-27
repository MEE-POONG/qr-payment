import Layout from "@/components/layout";
import Image from "next/image";
import React from "react";

const Payment: React.FC = () => {

  return (
    <Layout>
      <div className='container m-auto flex h-full flex-wrap'>
        <div className="flex flex-col w-full z-50 lg:w-[40%] py-2 px-1 rounded-lg p-4 ">
          <div className="w-full flex-grow bg-white rounded-lg p-4">
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
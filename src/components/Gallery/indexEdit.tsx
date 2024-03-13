import React from 'react';
import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';


const GalleryIndexEdit: React.FC = () => {
    return (
        <>
            <div className="container mx-auto px-2 py-2 lg:px-32 lg:pt-2 h-full flex flex-col w-[100%]">
                <div className="w-full flex-grow flex bg-white rounded-lg p-4 h-[100px] mb-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full h-[60%] p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block w-full h-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                        </div>
                        <div className="w-full h-[40%] p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block w-full h-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp" />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full h-[40%] p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block w-full h-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                        </div>
                        <div className="w-ful h-[60%] p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                        </div>
                    </div>
                </div>

                {/* Main content that needs to fill the rest of the height */}
                <div className="w-full  flex bg-white rounded-lg p-4 items-center justify-center">
                    <div className='font-extrabold text-4xl w-full break-words leading-normal overflow-hidden text-center' style={{ maxHeight: '120px' }}>
                        "กอดหน่อย" {/* Your dynamic content here */}
                    </div>
                    <div className="block flex-wrap ml-3">
                        <div className='font-extrabold text-4xl w-full break-words'>
                            {/* {dataList?.name} */}ห
                        </div>
                        <div className='font-black leading-relaxed text-3xl flex items-center text-blue-600'>
                            <FaFacebook className='mr-1' /> :
                            {/* {dataList?.facebook} */}
                        </div>
                        <div className='font-black leading-relaxed text-3xl flex items-center text-pink-600'>
                            <FaInstagram className='mr-1' /> :
                            {/* {dataList?.instagram} */}
                        </div>
                        <div className='font-black leading-relaxed text-3xl flex items-center text-green-600'>
                            <FaLine className='mr-1' /> :
                            {/* {dataList?.instagram} */}
                        </div>
                    </div>
                </div>
                <div className='bg-white'>
                    aaa
                </div>
            </div>

        </>

    )
}
export default GalleryIndexEdit;


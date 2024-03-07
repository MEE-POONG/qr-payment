import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const GalleryIndex: React.FC = () => {

    return (
        <div className="container mx-auto px-2 py-2 lg:px-32 lg:pt-2 h-full">
            <div className="-m-1 flex flex-wrap md:-m-2 h-full">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(71).webp" />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full h-[500px] p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                    </div>
                </div>
                <div className=" w-full h-auto flex bg-white rounded-lg p-4">
                    <div className="w-3/5 flex items-center justify-center">
                        {/* 18 */}
                        <div className='font-extrabold text-4xl w-full break-words leading-normal overflow-hidden' style={{ maxHeight: '120px' }}>
                            ABABABABABABABABABBABABABAB
                        </div>
                    </div>
                    <div className="block w-2/5 flex-wrap ml-3">
                        <div className='font-extrabold text-4xl w-full break-words'>
                            หมวย ซี่ ปี้แน่นอน
                        </div>
                        <div className='font-black leading-relaxed text-3xl flex items-center text-blue-600'>
                            <FaFacebook className='mr-1' /> : sss
                        </div>
                        <div className='font-black leading-relaxed text-3xl flex items-center text-pink-600'>
                            <FaInstagram className='mr-1' /> : sss
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GalleryIndex;
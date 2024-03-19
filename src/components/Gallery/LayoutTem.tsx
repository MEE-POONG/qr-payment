import React, { useState } from 'react';
import DarkImageBackground from "@/components/BG";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BoxText from './BoxText';
import GalleryIndex from "@/components/Gallery";
import { GalleryTemData } from '@/data/gallery';
const GallerySelect: React.FC = () => {
    const [currentTemIndex, setCurrentTemIndex] = useState(0);

    const [userInfo, setUserInfo] = useState({
        caption: '',
        name: '',
        facebook: '',
        instagram: '',
        line: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setUserInfo(prevInfo => ({ ...prevInfo, [id]: value }));
    };

    const nextTemplate = () => {
        setCurrentTemIndex(prevIndex => (prevIndex + 1) % GalleryTemData.length);
    };

    const prevTemplate = () => {
        setCurrentTemIndex(prevIndex => (prevIndex - 1 + GalleryTemData.length) % GalleryTemData.length);
    };

    return (
        <>
            <DarkImageBackground />
            <div className='container m-auto flex h-full flex-wrap'>
                <div className="flex flex-col w-full z-50 lg:w-[40%] py-2 px-1 rounded-lg p-4 ">
                    <div className="w-full flex-grow bg-white rounded-lg p-4">
                        <span className="block text-lg font-medium text-slate-700 ">เลือกเทมเพลต</span>
                        <div id="select_gallery" className='flex w-full h-max justify-center text-3xl'>
                            <button onClick={prevTemplate} className="py-2">
                                <FaChevronLeft />
                            </button>
                            <div className="flex-grow text-center py-2">
                                Tem {currentTemIndex + 1}
                            </div>
                            <button onClick={nextTemplate} className="py-2">
                                <FaChevronRight />
                            </button>
                        </div>
                        <div className='hidden md:block '>
                            {Object.keys(userInfo).map((key) => {
                                const safeKey = key as keyof typeof userInfo; // Correctly type 'key' as a key of 'userInfo'
                                return (
                                    <div className='mb-2' key={key}>
                                        <span className="block text-lg font-medium text-slate-700">{key}</span>
                                        <input type="text" id={key} value={userInfo[safeKey]} onChange={handleInputChange}
                                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                                            placeholder={`Enter value ${key}`} required />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="h-[60%] flex flex-col w-full md:h-[100%] lg:w-[60%] py-2 px-1">
                    <GalleryIndex mode={'edit'} selectTem={currentTemIndex} />
                    <BoxText data={userInfo} />
                </div>
                <div className="h-auto flex flex-col w-full z-50 lg:w-[40%] py-2 px-1 rounded-lg p-4 md:hidden">
                    <div className="w-full flex-grow bg-white rounded-lg p-4 h-max ">
                        {Object.keys(userInfo).map((key) => {
                            const safeKey = key as keyof typeof userInfo; // Correctly type 'key' as a key of 'userInfo'
                            return (
                                <div className='mb-2' key={key}>
                                    <span className="block text-lg font-medium text-slate-700">{key}</span>
                                    <input type="text" id={key} value={userInfo[safeKey]} onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                                        placeholder={`Enter value ${key}`} required />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default GallerySelect;
import React, { useEffect, useState } from 'react';
import { imgslide } from '../../data/datatest';
import Image from 'next/image';
import DEscription from '../Description';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import GalleryIndex from '../Gallery';
import GalleryTwo from '../Gallery/two';
import DarkImageBackground from '../BG';

const SliderClothSquare: React.FC = () => {

    const [activeImage, setActiveImage] = useState(0);

    const clickNext = () => {
        activeImage === imgslide.length - 1
            ? setActiveImage(0)
            : setActiveImage(activeImage + 1)
    };
    const clickPrev = () => {
        activeImage === 0
            ? setActiveImage(imgslide.length - 1)
            : setActiveImage(activeImage - 1)
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         clickNext();
    //     }, 5000);
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [activeImage]);

    return (
        <div className='w-screen h-screen'>
            <div className="h-[100vh] m-auto aspect-[1/1]">
                {imgslide.map((pic, idx) => (
                    <div className={` ${idx === activeImage
                        ? `block w-full h-screen object-cover transition-all duration-500 ease-in-out`
                        : `hidden`
                        }`}
                        key={idx}>
                        <GalleryIndex />
                        {/* <GalleryTwo /> */}
                    </div>
                ))}
                <button onClick={clickNext} className='flex text-black items-center absolute top-0 left-0 w-max h-screen cursor-pointer text-4xl opacity-50 hover:opacity-100 drop-shadow'>
                    <FaChevronLeft className='' />
                </button>
                <button onClick={clickPrev} className='flex text-black items-center absolute top-0 right-0 w-max h-screen cursor-pointer text-4xl opacity-50 hover:opacity-100 drop-shadow'>
                    <FaChevronRight />
                </button>
            </div>
            {/* <DEscription
                activeImgIndex={activeImage}
                clickNext={clickNext}
                clickPrev={clickPrev}
            /> */}
            {/* pev next */}
        </div>
    )
}
export default SliderClothSquare;
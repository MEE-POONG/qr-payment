import React, { useEffect, useState } from 'react';
import { imgslide } from '../../data/datatest';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import GalleryIndex from '../Gallery';
import GalleryTwo from '../Gallery/two';
import { ImageData, postProfile } from '@/data/postProfile';

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

    useEffect(() => {
        const timer = setTimeout(() => {
            clickNext();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeImage]);
    // https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/0fb05fae-8f4f-4edd-6c20-c188867ec900/750

    return (
        <div className='w-screen h-screen'>
            <div className="h-[100vh] m-auto aspect-[1/1]">
                {postProfile.map((list, idx) => {
                    let GalleryComponent = null;

                    switch (list.GalleryTemplate) {
                        case "1":
                            GalleryComponent = <GalleryIndex dataList={{
                                ...list,
                                images: ImageData
                            }} />;
                            break;
                        case "2":
                            GalleryComponent = <GalleryTwo dataList={{
                                ...list,
                                images: ImageData
                            }} />;
                            break;
                        default:
                            GalleryComponent = <div>No Gallery Found</div>;
                    }

                    return (
                        <div key={idx} className={`${idx === activeImage ? `block w-full h-screen object-cover transition-all duration-500 ease-in-out` : `hidden`}`}>
                            {GalleryComponent}
                        </div>
                    );
                })}

                {/* {imgslide.map((pic, idx) => (
                    <div className={` ${idx === activeImage
                        ? `block w-full h-screen object-cover transition-all duration-500 ease-in-out`
                        : `hidden`
                        }`}
                        key={idx}>
                        <GalleryIndex />
                    </div>
                ))} */}
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
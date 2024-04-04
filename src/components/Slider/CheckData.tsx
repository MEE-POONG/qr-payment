import React, { useEffect, useState, ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SliderCheckDataProps {
    children: ReactNode | ReactNode[]; // Accepts single or multiple children
    onLastSlide?: () => void | Promise<void>;
}

const SliderCheckData: React.FC<SliderCheckDataProps> = ({ children, onLastSlide }) => {
    const childrenArray = React.Children.toArray(children); // Ensure children are an array
    const [activeImage, setActiveImage] = useState(0);

    // const clickNext = () => {
    //     setActiveImage(prev => (prev + 1) % childrenArray.length); // Cycle to the next child
    // };

    const clickNext = () => {
        const nextIndex = (activeImage + 1) % childrenArray.length;
        setActiveImage(nextIndex);

        // ตรวจสอบว่าเป็นสไลด์สุดท้ายหรือไม่
        if (nextIndex === childrenArray.length - 1 && onLastSlide) {
            onLastSlide();
        }
    };

    const clickPrev = () => {
        setActiveImage(prev => (prev - 1 + childrenArray.length) % childrenArray.length); // Cycle to the previous child
    };

    useEffect(() => {
        const timer = setTimeout(clickNext, 5000); // Adjust the timeout as needed
        return () => clearTimeout(timer);
    }, [activeImage, onLastSlide]);

    return (
        <div className='w-full h-full transition-transform ease-in-out duration-500 flex justify-center'>
            {childrenArray[activeImage]}
            <button onClick={clickPrev} className='absolute top-0 left-0 h-full text-white text-4xl opacity-50 hover:opacity-100'>
                <FaChevronLeft />
            </button>
            <button onClick={clickNext} className='absolute top-0 right-0 h-full text-white text-4xl opacity-50 hover:opacity-100'>
                <FaChevronRight />
            </button>
        </div>
    );
};

export default SliderCheckData;
// components/DarkImageBackground.tsx or in any of your page .tsx files

import React from 'react';
import Image from 'next/image';

const DarkImageBackground = () => {
    return (
        <div className="w-screen h-screen absolute z-[-1] ">
            <Image 
                src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/1ceeaa24-0a52-4288-a124-bcfd8f35ef00/w2xl"
                layout="fill"
                objectFit="cover"
                alt="" />
            {/* The dark image background */}
            {/* <img
                src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/1ceeaa24-0a52-4288-a124-bcfd8f35ef00/w2xl"} // The path to your dark image
                layout="fill"
                objectFit="cover"
                className="dark-image transition-opacity duration-500 ease-in-out group-hover:opacity-60"
                alt="Background"
            /> */}
            {/* The hover effect layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent group-hover:from-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent group-hover:from-transparent"></div>

            {/* Your content goes here */}
        </div>
    );
};

export default DarkImageBackground;
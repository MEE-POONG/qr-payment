import React from 'react';
import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';

interface BoxTextProps {
    data: {
        name: string;
        facebook: string;
        instagram: string;
        line: string;
        caption: string;
    };
}

const BoxText: React.FC<BoxTextProps> = ({ data }) => {
    const isOtherInfoEmpty = !data.facebook && !data.instagram && !data.line;
    const captionWidth = isOtherInfoEmpty ? "100%" : "60%";

    return (
        <div className="w-full flex bg-blue-100 rounded-lg p-4 items-center justify-center mt-2"  style={{ maxHeight: '220px' }}>
            <div className={`font-extrabold text-4xl break-words leading-normal overflow-hidden text-center w-[${captionWidth}]`}>
                {data.caption}
            </div>
            <div className="block flex-wrap ml-3">
                <div id='show_name' className='font-extrabold text-4xl w-full break-words'>
                    {data.name}
                </div>
                <div id='show_facebook' className='font-black leading-relaxed text-3xl flex items-center text-blue-600'>
                    <FaFacebook className='mr-1' /> : {data.facebook}
                </div>
                <div id='show_instagram' className='font-black leading-relaxed text-3xl flex items-center text-pink-600'>
                    <FaInstagram className='mr-1' /> : {data.instagram}
                </div>
                <div id='show_line' className='font-black leading-relaxed text-3xl flex items-center text-green-600'>
                    <FaLine className='mr-1' /> : {data.line}
                </div>
            </div>
        </div>
    )
}
export default BoxText;
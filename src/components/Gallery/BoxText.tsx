import React from 'react';
import { FaFacebook, FaInstagram, FaLine } from 'react-icons/fa';

const BoxText: React.FC = () => {
    return (
        <div className="w-full flex bg-blue-100 rounded-lg p-4 items-center justify-center mt-2">
            <div className='font-extrabold text-4xl w-full break-words leading-normal overflow-hidden text-center' style={{ maxHeight: '120px' }}>
                "กอดหน่อย" {/* Your dynamic content here */}
            </div>
            <div className="block flex-wrap ml-3">
                <div id='show_name' className='font-extrabold text-4xl w-full break-words'>
                    {/* {dataList?.name} */}ห
                </div>
                <div id='show_facebook' className='font-black leading-relaxed text-3xl flex items-center text-blue-600'>
                    <FaFacebook className='mr-1' /> :
                    {/* {dataList?.facebook} */}
                </div>
                <div id='show_instagram' className='font-black leading-relaxed text-3xl flex items-center text-pink-600'>
                    <FaInstagram className='mr-1' /> :
                    {/* {dataList?.instagram} */}
                </div>
                <div id='show_line' className='font-black leading-relaxed text-3xl flex items-center text-green-600'>
                    <FaLine className='mr-1' /> :
                    {/* {dataList?.line} */}
                </div>
            </div>
        </div>
    )
}
export default BoxText;
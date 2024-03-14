import React from 'react';
import LayoutTem from './LayoutTem';
import BoxText from './BoxText';

const GalleryIndex: React.FC = () => {
    
    return (
            <div className="w-full flex-grow flex bg-blue-100 rounded-lg p-4 h-[100px] ">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full h-[60%] p-1 md:p-2 border-1 border relative">
                        <span className='absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] font-bold'>เลือกรูป</span>
                        <img
                            alt="gallery"
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                            src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"} />
                    </div>
                    <div className="w-full h-[40%] p-1 md:p-2 relative">
                        <span className='absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] font-bold'>เลือกรูป</span>
                        <img
                            alt="gallery"
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                            src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"} />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full h-[40%] p-1 md:p-2 relative">
                        <span className='absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] font-bold'>เลือกรูป</span>
                        <img
                            alt="gallery"
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                            src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"} />
                    </div>
                    <div className="w-full h-[60%] p-1 md:p-2 border-1 border relative">
                        <span className='absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] font-bold'>เลือกรูป</span>
                        <img
                            alt="gallery"
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                            src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"} />
                    </div>
                </div>
            </div>

    )
}
export default GalleryIndex;
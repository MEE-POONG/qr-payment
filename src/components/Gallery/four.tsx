import React from 'react';

const GalleryFour: React.FC = () => {
    return (
        <div className="w-full flex-grow flex rounded-lg h-[100px] bg-white">
            <div className="flex w-full flex-wrap">
                <div className="w-full h-[75%] p-1 md:p-2  relative">
                    <span className='absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] font-bold'>เลือกรูป</span>
                    <img
                        alt="gallery"
                        className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                        src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"} />
                </div>
                <div className="w-[25%] h-[25%] p-1 md:p-2 relative">
                    <span className='absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] font-bold'>เลือกรูป</span>
                    <img
                        alt="gallery"
                        className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                        src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"} />
                </div>
                <div className="w-[25%] h-[25%] p-1 md:p-2 relative">
                    <span className='absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] font-bold'>เลือกรูป</span>
                    <img
                        alt="gallery"
                        className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                        src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"} />
                </div>
                <div className="w-[25%] h-[25%] p-1 md:p-2 relative">
                    <span className='absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] font-bold'>เลือกรูป</span>
                    <img
                        alt="gallery"
                        className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                        src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"} />
                </div>
                <div className="w-[25%] h-[25%] p-1 md:p-2 relative">
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
export default GalleryFour;
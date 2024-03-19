import { GalleryTemData } from '@/data/gallery';
import React, { useEffect, useState } from 'react';

interface GalleryProps {
    mode: 'edit' | 'view'; // Mode can be 'edit' or 'view'
}

const GalleryIndex: React.FC<GalleryProps> = ({ mode }) => {
    const [selectedImages, setSelectedImages] = useState<string[]>(Array(4).fill(""));

    useEffect(() => {
        console.log(selectedImages);
    }, [selectedImages]);

    // Handler for file input change
    const handleFileChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const fileURL = URL.createObjectURL(e.target.files[0]);
            // Update the specific image by index
            const newImages = [...selectedImages];
            newImages[index] = fileURL;
            setSelectedImages(newImages);
        }
    };

    const selectedTemplate = GalleryTemData.find(template => template.tem === "4");

    return (
        <div className="w-full flex-grow flex rounded-lg h-[100px] bg-white">
            {/* <div className="w-full flex flex-wrap flex-col rounded-lg h-full bg-white"> */}
            <div className={`w-full flex flex-wrap ${selectedTemplate?.classBox} rounded-lg h-full bg-white`}>
                {selectedTemplate?.imglist.map((img, imgIndex) => (
                    <div key={img.id} className="p-1 md:p-2 relative" style={{ width: img.w, height: img.h }}>
                        {mode === 'edit' && (
                            <input id={`photo-${selectedTemplate.tem}-${imgIndex}`} accept="image/*" type="file" onChange={handleFileChange(imgIndex)} style={{ display: 'none' }} />
                        )}
                        <label htmlFor={`photo-${selectedTemplate.tem}-${imgIndex}`} className="block w-full h-full cursor-pointer">
                            <span className={`absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 font-bold z-10 ${selectedImages[imgIndex] !== '' ? 'hidden' : ''}`}>เลือกรูป</span>
                            <img
                                alt="gallery"
                                className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                                src={selectedImages[imgIndex] || "https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"}
                            />
                        </label>
                    </div>
                ))}
                {/* <div className="w-[50%] h-[60%] p-1 md:p-2 relative">
                    {mode === 'edit' && (
                        <input id="photo" accept="image/*" type="file" onChange={handleFileChange(1)} style={{ display: 'none' }} />
                    )}
                    <label htmlFor="photo" className="block w-full h-full cursor-pointer">
                        <span className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 font-bold z-10'>เลือกรูป</span>
                        <img
                            alt="gallery"
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                            src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"}
                        />
                    </label>
                </div>
                <div className="w-[50%] h-[40%] p-1 md:p-2 relative">
                    {mode === 'edit' && (
                        <input id="photo" accept="image/*" type="file" onChange={handleFileChange(1)} style={{ display: 'none' }} />
                    )}
                    <label htmlFor="photo" className="block w-full h-full cursor-pointer">
                        <span className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 font-bold z-10'>เลือกรูป</span>
                        <img
                            alt="gallery"
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                            src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"}
                        />
                    </label>
                </div>
                <div className="w-[50%] h-[40%] p-1 md:p-2 relative">
                    {mode === 'edit' && (
                        <input id="photo" accept="image/*" type="file" onChange={handleFileChange(1)} style={{ display: 'none' }} />
                    )}
                    <label htmlFor="photo" className="block w-full h-full cursor-pointer">
                        <span className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 font-bold z-10'>เลือกรูป</span>
                        <img
                            alt="gallery"
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                            src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"}
                        />
                    </label>
                </div>
                <div className="w-[50%] h-[60%] p-1 md:p-2 relative">
                    {mode === 'edit' && (
                        <input id="photo" accept="image/*" type="file" onChange={handleFileChange(1)} style={{ display: 'none' }} />
                    )}
                    <label htmlFor="photo" className="block w-full h-full cursor-pointer">
                        <span className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 font-bold z-10'>เลือกรูป</span>
                        <img
                            alt="gallery"
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                            src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"}
                        />
                    </label>
                </div> */}
            </div>

            {/* {selectedImages.map((imageSrc, index) => (
                <div key={index} className="w-1/2 h-[50%] p-1 md:p-2 relative">
                    {mode === 'edit' && (
                        <>
                            <input
                                id={`photo-${index}`}
                                accept="image/*"
                                type="file"
                                onChange={handleFileChange(index)}
                                style={{ display: 'none' }}
                            />
                            <label htmlFor={`photo-${index}`} className="block w-full h-full cursor-pointer">
                                <span className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 font-bold z-10'>
                                    {imageSrc ? "เลือกรูปใหม่" : "เลือกรูป"}
                                </span>
                                <img
                                    alt={`gallery-${index}`}
                                    className={`block w-full h-full rounded-lg object-cover object-center border-2 ${imageSrc ? "border-indigo-500 hover:border-yellow-700" : "border-gray-200"}`}
                                    src={imageSrc || "https://via.placeholder.com/150"} // Placeholder image if none selected
                                />
                            </label>
                        </>
                    )}
                    {mode === 'view' && imageSrc && (
                        <img
                            alt={`gallery-${index}`}
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-gray-200"
                            src={imageSrc}
                        />
                    )}
                </div>
            ))} */}
            {/* <div className="flex w-1/2 flex-wrap">
                <div className="w-full h-[60%] p-1 md:p-2 relative">
                    <>
                        {mode === 'edit' && (
                            <input id="photo" accept="image/*" type="file" onChange={handleFileChange(1)} style={{ display: 'none' }} />
                        )}
                        <label htmlFor="photo" className="block w-full h-full cursor-pointer">
                            <span className='absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 font-bold z-10'>เลือกรูป</span>
                            <img
                                alt="gallery"
                                className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                                src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"}
                            />
                        </label>
                    </>
                </div>
                <div className="w-full h-[40%] p-1 md:p-2 relative">
                    {mode === 'edit' && (
                        <input id="photo" accept="image/*" type="file" onChange={handleFileChange(2)} style={{ display: 'none' }} />
                    )}
                    <label htmlFor="photo" className="block w-full h-full cursor-pointer">
                        <span className='absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] font-bold'>เลือกรูป</span>
                        <img
                            alt="gallery"
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                            src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"} />
                    </label>
                </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
                <div className="w-full h-[40%] p-1 md:p-2 relative">
                    {mode === 'edit' && (
                        <input id="photo" accept="image/*" type="file" onChange={handleFileChange(3)} style={{ display: 'none' }} />
                    )}
                    <label htmlFor="photo" className="block w-full h-full cursor-pointer">
                        <span className='absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] font-bold'>เลือกรูป</span>
                        <img
                            alt="gallery"
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                            src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"} />
                    </label>

                </div>
                <div className="w-full h-[60%] p-1 md:p-2  relative">
                    {mode === 'edit' && (
                        <input id="photo" accept="image/*" type="file" onChange={handleFileChange(4)} style={{ display: 'none' }} />
                    )}
                    <label htmlFor="photo" className="block w-full h-full cursor-pointer">
                        <span className='absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] font-bold'>เลือกรูป</span>
                        <img
                            alt="gallery"
                            className="block w-full h-full rounded-lg object-cover object-center border-2 border-indigo-500 hover:border-yellow-700"
                            src={"https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/f701ce08-7ebe-4af2-c4ec-2b3967392900/350"} />
                    </label>

                </div>
            </div> */}
        </div>

    )
}
export default GalleryIndex;
import React, { useState } from 'react';

interface GalleryProps {
    mode: 'edit' | 'view'; // Mode can be 'edit' or 'view'
}

const GalleryThree: React.FC<GalleryProps> = ({ mode }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Handler for file input change
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            // Create a URL for the selected file
            const fileURL = URL.createObjectURL(e.target.files[0]);
            setSelectedImage(fileURL);
        }
    };

    return (
        <div className="w-full flex-grow flex rounded-lg h-[100px] bg-white">
            <div className="flex w-full flex-wrap">
                <div className="w-full h-[100%] p-1 md:p-2  relative">
                    {mode === 'edit' && (
                        <input id="photo" accept="image/*" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
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
        </div>
    )
}
export default GalleryThree;
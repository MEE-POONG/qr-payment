import React from 'react';

interface SlideProps {
  imageUrl: string;
  text: string;
  isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ imageUrl, text, isActive }) => {
  return (
    <div className={`absolute w-full h-full transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <img src={imageUrl} alt="Slide" className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 p-4 bg-black text-white">
        <p>{text}</p>
      </div>
      <div className="absolute bottom-0 right-0 m-4">
        <img src="/images/qrcode.png" alt="QR Code" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Slide;

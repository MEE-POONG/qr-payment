import React, { useState, useEffect } from 'react';
import Slide from '../components/Slide';

const slidesData = [
  { imageUrl: '/slide1.jpg', text: 'Slide 1' },
  { imageUrl: '/slide2.jpg', text: 'Slide 2' },
  { imageUrl: '/slide3.jpg', text: 'Slide 3' },
];

const SlidesPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // เปลี่ยนสไลด์ทุก 5 วินาที

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Slides</h1>
      <div className="w-full max-w-lg relative">
        {slidesData.map((slide, index) => (
          <Slide key={index} imageUrl={slide.imageUrl} text={slide.text} isActive={index === currentSlide} />
        ))}
        <button onClick={goToNextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default SlidesPage;

import React, { useState, useEffect } from 'react';
import Slider from '@/components/Slider/Slider';



const SlidesPage: React.FC = () => {


  return (
    <div className="w-full min-h-screen mx-auto grid place-items-center ">
      <div className='bg-slate-50'>
        <Slider />
      </div>
    </div>
  );
};

export default SlidesPage;

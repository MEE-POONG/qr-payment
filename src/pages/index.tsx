import Slide from "@/components/Slide";
import Image from "next/image";
// import Slide from '../components/Slide';

const Home: React.FC = () => {
  const slidesData = [
    { imageUrl: '/slide1.jpg', text: 'Slide 1' },
    { imageUrl: '/slide2.jpg', text: 'Slide 2' },
    { imageUrl: '/slide3.jpg', text: 'Slide 3' },
  ];
  return (
    <div className="w-[100vw] h-[100vh] relative">
      {/* <div className="m-auto bg-white p-5 w-full md:w-96 rounded-lg shadow-lg text-center">
        <p className="text-2xl font-bold text-pink-600 drop-shadow-lg">Scan Me</p>
        <Image src='/images/qrcode.png' width={100} height={100} alt=""
          className="mx-auto w-44 my-10"
        />
      </div> */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-8">Slides</h1>
        {/* <div className="w-full max-w-lg relative">
          {slidesData.map((slide, index) => (
            <Slide key={index} imageUrl={slide.imageUrl} text={slide.text} isActive={index === currentSlide} />
          ))}
          <button onClick={goToNextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-lg">Next</button>
        </div> */}
      </div>
      <div className="absolute bg-white p-2 bottom-0 m-5 text-center">
        <p className="text-2xl font-bold text-pink-600 drop-shadow-lg">Scan Me</p>
        <Image src='/images/qrcode.png' width={150} height={150} alt="" className="mx-auto w-44" />
      </div>

    </div>
  );
}
export default Home;
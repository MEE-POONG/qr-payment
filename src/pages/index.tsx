import SliderIndex from "@/components/Slider";
import Slide from "@/components/Slider";
import SliderClothSquare from "@/components/Slider/ClothSquare";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// import Slide from '../components/Slide';

const Home: React.FC = () => {
  const slidesData = [
    { imageUrl: '/slide1.jpg', text: 'Slide 1' },
    { imageUrl: '/slide2.jpg', text: 'Slide 2' },
    { imageUrl: '/slide3.jpg', text: 'Slide 3' },
  ];
  return (
    <div className="relative w-screen h-screen ">
      {/* <div className="m-auto bg-white p-5 w-full md:w-96 rounded-lg shadow-lg text-center">
        <p className="text-2xl font-bold text-pink-600 drop-shadow-lg">Scan Me</p>
        <Image src='/images/qrcode.png' width={100} height={100} alt=""
          className="mx-auto w-44 my-10"
        />
      </div> */}
      {/* <SliderIndex /> */}
      <SliderClothSquare />
      <div className="absolute bg-white p-2 bottom-0 m-4 text-center">
        <p className="text-2xl font-bold text-pink-600 drop-shadow-lg">Scan Me</p>
        <Image src='/images/qrcode.png' width={100} height={100} alt="" className="mx-auto w-44" />
      </div>
    </div>
  );
}
export default Home;
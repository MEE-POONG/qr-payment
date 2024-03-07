import DarkImageBackground from "@/components/BG";
import SliderIndex from "@/components/Slider";
import Slide from "@/components/Slider";
import SliderClothSquare from "@/components/Slider/ClothSquare";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// import Slide from '../components/Slide';

const Home: React.FC = () => {

  return (
    <div className="relative w-screen h-screen ">
      <DarkImageBackground />
      {/* GalleryTemplate 1 */}
      {/* <SliderIndex /> */}
      {/* GalleryTemplate 2 */}
      <SliderClothSquare />
      <div className="absolute bg-white p-2 bottom-0 m-4 text-center">
        <p className="text-2xl font-bold text-pink-600 drop-shadow-lg">Scan Me</p>
        <Image src='/images/qrcode.png' width={100} height={100} alt="" className="mx-auto w-44" />
      </div>
    </div>
  );
}
export default Home;
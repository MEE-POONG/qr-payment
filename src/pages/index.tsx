import Image from "next/image";

const Home: React.FC = () => {

  return (
    <div className="min-h-screen px-5 py-14 md:p-24">
      <div className="m-auto bg-white p-5 w-full md:w-96 rounded-lg shadow-lg text-center">
        <p className="text-2xl font-bold text-pink-600 drop-shadow-lg">Scan Me</p>
        <Image src='/images/qrcode.png' width={100} height={100} alt=""
          className="mx-auto w-44 my-10"
        />
      </div>
    </div>
  );
}
export default Home;
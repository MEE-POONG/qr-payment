import Image from "next/image";
import React from "react";

const Payment: React.FC = () => {

  return (
    <div className="min-h-screen px-5 py-14 md:p-24">
        <div className="m-auto bg-white p-5 w-full md:w-96 rounded-lg shadow-lg text-center">
             <p className="my-5">QR Code สำหรับชำระเงิน</p>
            <Image src='/images/qrcode.png' width={100} height={100} alt="" 
                className="mx-auto w-44"
            />  
            <p className="mt-5 text-sm">ชื่อบัญชี</p>
            <p className="text-lg text-pink-500">Account Name</p>
            <p className="mt-5 text-sm">จำนวน &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-xl text-pink-500">555</span> บาท</p>
        </div>
    </div>
  );
}
export default Payment;
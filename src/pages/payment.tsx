import Image from "next/image";
import React from "react";

const Payment: React.FC = () => {

  return (
    <div className="min-h-screen px-5 py-14 md:p-24">
        <div className="m-auto bg-white p-5 :w-96 rounded-lg shadow-lg text-center">
             <p>QR Code สำหรับชำระเงิน</p>
            <Image src='/images/qrcode.png' width={100} height={100} alt="" 
                className="mx-auto w-48"
            />
        </div>
    </div>
  );
}
export default Payment;
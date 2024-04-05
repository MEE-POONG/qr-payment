import React from "react";
import TabsMenu from "@/components/TabsMenu";
import PaymentList from "@/components/management/PaymentList";
import TableCustomerList from "@/components/management/TableCustomerList";
import LayoutAdmin from "@/components/aLayoutAdmin";


const Dashboard: React.FC = () => {
  const tabs = [
    {
      label: 'รายการชำระเงิน', content: <div>
        <PaymentList />
      </div>
    },
    {
      label: 'ลูกค้า', content: <div>
        <TableCustomerList />
      </div>
    },
    // { label: 'สร้าง QR Code', content: <div><CreateQRCode/></div> },
  ];


  return (
    <LayoutAdmin>
      <div className="container mx-auto pt-2">
        <TabsMenu tabs={tabs} />
      </div>

    </LayoutAdmin>
  );
}
export default Dashboard;
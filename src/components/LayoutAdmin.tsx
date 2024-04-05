import React, { ReactNode } from 'react';
import DarkImageBackground from './BG';

interface LayoutAdminProps {
  children: ReactNode;
}

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ children }) => {


  return (
    <section>
      {/* <LogoutButton /> */}
      <main className={`relative w-screen h-screen`}>
        <DarkImageBackground />
        {children}
      </main>
    </section>
  )
}
export default LayoutAdmin;
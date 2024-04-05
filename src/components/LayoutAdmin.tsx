import React, { ReactNode, useEffect } from 'react';
import Router from 'next/router';
// Assuming you're storing login state in local storage or cookies
import DarkImageBackground from './BG';
import { isUserLoggedIn } from '@/context/utils/auth';

interface LayoutAdminProps {
  children: ReactNode;
}

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ children }) => {
  
  useEffect(() => {
    // Redirect if not logged in
    if (!isUserLoggedIn()) {
      Router.push('/login'); // Adjust the path as necessary
    }
  }, []);

  return (
    <section>
      {/* <LogoutButton /> */}
      <main className={`relative w-screen h-screen`}>
        <DarkImageBackground />
        {children}
      </main>
    </section>
  );
}

export default LayoutAdmin;
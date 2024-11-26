import React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
      <>
       <Header />
        <main className="min-h-screen bg-gray-100 p-6 mt-16">
          <div className="max-w-10xl mx-auto p-4">{children}</div>
        </main>
       <Footer />
       </>
    );
  };
  
export default Layout;
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#90EE90' }} className="pt-4 pb-4">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-12 gap-4">
        {/* Logo and name section */}
        <div className="row-span-2 sm:col-span-4 col-span-1 flex flex-col items-start">
          <div className="flex items-center">
            <img src="/assets/logo.png" className="h-12 w-auto" alt="AgriBazar Logo" />
            <div style={{ fontFamily: 'Caveat Brush, cursive', fontSize: '35px' }} className="ml-3">
              AgriBazaar
            </div>
          </div>
          <p className="font-bold text-black mt-2">
            ©{new Date().getFullYear()} - Team SUST_UNKNOWNS
          </p>
        </div>
        
        {/* Contact section */}
        <div className="row-span-2 sm:col-span-4 sm:col-start-9 col-span-1 flex flex-col items-start sm:items-end sm:text-right text-left">
          <p className="font-bold text-black">Contact</p>
          <p className="text-black">Md Abdullah al Mahadi Apurbo</p>
          <p className="text-black">Nobel Ahmad Badhon</p>
          <p className="text-black">01603252292</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

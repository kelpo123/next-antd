'use client';
import Image from 'next/image';
import React from 'react';

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <div className=''>
        <div className='text-center text-gray-600'>Terms &amp; Conditions </div>
        <div className='text-center text-gray-600'>• </div>
        <div className='text-center text-gray-600'>Privacy Policy </div>
        <div className='text-center text-gray-600'>• </div>
        <div className='text-center text-gray-600'>About Logoisum </div>
      </div>
      <Image src='/logo.png' alt='logo' width={136} height={40} />
      <p>@ {getCurrentYear()} Project Zomboid</p>
    </div>
  );
}

export default Footer;

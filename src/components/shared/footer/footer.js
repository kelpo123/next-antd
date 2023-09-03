"use client";
import Image from "next/image";
import React from "react";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="absolute flex flex-col items-center justify-start gap-6 text-xs -translate-x-1/2 left-1/2 min-w-[330px] bottom-8">
      <div className="relative flex flex-row items-start justify-start gap-2 shrink-0">
        <div className="relative text-center text-gray-600">
          Terms &amp; Conditions{" "}
        </div>
        <div className="relative text-center text-gray-600">• </div>
        <div className="relative text-center text-gray-600">
          Privacy Policy{" "}
        </div>
        <div className="relative text-center text-gray-600">• </div>
        <div className="relative text-center text-gray-600">
          About Logoisum{" "}
        </div>
      </div>
      <Image src="/logo.png" alt="logo" width={136} height={40} />
      <p>@ {getCurrentYear()} Bintang Digital Asia</p>
    </div>
  );
}

export default Footer;

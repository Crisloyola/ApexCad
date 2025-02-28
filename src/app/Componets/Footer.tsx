"use client";
import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#0C0C0C] text-white py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Logo */}
        <div className="mb-6 md:mb-0 md:mr-6">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex justify-center items-center shadow-lg">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="object-contain" />
          </div>
        </div>

        {/* Texto */}
        <p className="text-sm max-w-lg leading-relaxed text-gray-600 text-center md:text-left">
          Impulsamos la transformación digital en AEC con soluciones BIM personalizadas. 
          Optimiza procesos, mejora la colaboración y alcanza mayor eficiencia.
        </p>
      </div>
    </footer>
  );
};

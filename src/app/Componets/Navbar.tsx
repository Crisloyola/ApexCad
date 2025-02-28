"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-[#0C0C0C] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo más grande */}
            <div className="flex items-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex justify-center items-center shadow-lg">
                <Image src="/logo.png" alt="Logo" width={80} height={80} className="object-contain" />
              </div>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:block">
              <div className="ml-6 flex items-center space-x-6">
                {["Inicio", "Nosotros", "Servicios", "Proyectos", "Artículos", "Contacto"].map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="text-white text-[16px] font-medium transition duration-300 ease-in-out hover:text-[#FFDF00]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Botón Menú Móvil */}
            <div className="md:hidden">
              <button onClick={toggleNavbar} className="p-2">
                {isClick ? (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil */}
        <AnimatePresence>
          {isClick && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0C0C0C] shadow-md"
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                {["Inicio", "Nosotros", "Servicios", "Proyectos", "Artículos", "Contacto"].map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                    <Link
                      href="/"
                      className="block text-white text-center p-2 transition duration-300 ease-in-out hover:text-[#FFDF00]"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">Logo</a>
              </div>
            </div>

            {/* Menú desktop */}
            <div className="hidden md:block font-Inter">
              <div className="ml-4 flex items-center space-x-4">
                {["Inicio", "Nosotros", "Servicios", "Proyectos", "Artículos", "Contacto"].map((item, index) => (
                  <a
                    key={index}
                    href="/"
                    className="text-white transition duration-300 ease-in-out hover:text-[#FFDF00]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Botón menú móvil */}
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

        <AnimatePresence>
          {isClick && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0C0C0C] shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {["Inicio", "Nosotros", "Servicios", "Proyectos", "Artículos", "Contacto"].map((item, index) => (
                  <motion.a
                    key={index}
                    href="/"
                    className="block text-white text-center p-2 transition duration-300 ease-in-out hover:text-[#FFDF00]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

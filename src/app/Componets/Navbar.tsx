"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => setIsClick(!isClick);

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Servicios", path: "/servicios" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Artículos", path: "/articulos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="bg-[#0C0C0C] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex justify-center items-center shadow-lg">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="object-contain" />
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.path} className="text-white text-[16px] font-medium transition hover:text-[#FFDF00]">
                {item.name}
              </Link>
            ))}
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
              {menuItems.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  <Link href={item.path} className="block text-white text-center p-2 transition hover:text-[#FFDF00]">
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

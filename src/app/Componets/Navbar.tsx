"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const toggleNavbar = () => setIsClick(!isClick);
  const toggleProjects = () => setIsProjectsOpen(!isProjectsOpen);

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Servicios", path: "/servicios" },
    {
      name: "Proyectos",
      path: "#",
      subItems: [
        { name: "UNMSM - EPIC", path: "/smp" },
        { name: "FOTOGRAMETRÍA DIGITAL EN RPAS Y SU USO EN INGENIERÍA CIVIL", path: "/foto" }
      ]
    },
    { name: "Artículos", path: "/articulos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="bg-[#0C0C0C] shadow-lg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex justify-center items-center shadow-lg">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="object-contain" />
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.subItems ? (
                  <>
                    <button
                      onClick={toggleProjects}
                      className="flex items-center text-white text-[16px] font-medium transition hover:text-[#FFDF00]"
                    >
                      {item.name}
                      <motion.svg
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ rotate: isProjectsOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M9 18l6-6-6-6"></path>
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {isProjectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute left-0 mt-2 w-72 bg-[#1A1A1A] shadow-lg rounded-lg z-50"
                        >
                          <div className="py-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.path}
                                className="block px-4 py-2 text-white transition hover:text-[#FFDF00]"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link href={item.path} className="text-white text-[16px] font-medium transition hover:text-[#FFDF00]">
                    {item.name}
                  </Link>
                )}
              </div>
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
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={toggleProjects}
                        className="flex items-center justify-between w-full px-4 py-2 text-white text-left transition hover:text-[#FFDF00]"
                      >
                        {item.name}
                        <motion.svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          animate={{ rotate: isProjectsOpen ? 90 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path d="M9 18l6-6-6-6"></path>
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {isProjectsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4"
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.path}
                                className="block text-white text-sm p-2 transition hover:text-[#FFDF00]"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.path} className="block text-white text-center p-2 transition hover:text-[#FFDF00]">
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imagesDesktop = [
  "https://i.ibb.co/8LFKfD09/banner-1-1.png",
  "https://i.ibb.co/8LFKfD09/banner-1-1.png",
  "https://i.ibb.co/8LFKfD09/banner-1-1.png",
];

const imagesMobile = [
  "https://i.ibb.co/YTcQ1kyd/banner-2-WEB.png",
  "https://i.ibb.co/YTcQ1kyd/banner-2-WEB.png",
  "https://i.ibb.co/YTcQ1kyd/banner-2-WEB.png",
];

export default function Carrousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isMobile ? imagesMobile : imagesDesktop;

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full  flex flex-col justify-center items-center overflow-hidden">
      {/* Contenedor de la imagen */}
      <div className="relative w-full  flex items-center">
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-black/50 p-3 rounded-full text-white hover:bg-black/70"
        >
          <ChevronLeft size={20} />
        </button>
        <AnimatePresence>
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-black/50 p-3 rounded-full text-white hover:bg-black/70"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Texto en movimiento debajo del carrusel */}
      <div className="w-full bg-[#006393] py-4 overflow-hidden">
        <motion.div
          className="flex items-center text-white font-bold text-2xl whitespace-nowrap"
          animate={{ x: [0, "-70%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {Array(20).fill("ESPECIALÍZATE").map((text, index) => (
            <span key={index} className="mx-4">{text}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imagesDesktop = [
  "https://i.ibb.co/21r6bQdm/banner-Original3.png",
  "https://i.ibb.co/YTZVB9cj/banner5.png",
  "https://i.ibb.co/GQhgv2qw/banner4.png",
  "https://i.ibb.co/jXsPx0J/banner-1.png",
  "https://i.ibb.co/Rp87PqMR/banner-2.png",
];

const imagesMobile = [
  "https://i.ibb.co/6cwhTZH6/BANNER-3-WEB.png",
  "https://i.ibb.co/fdf5scQt/banner-5-WEB.png",
  "https://i.ibb.co/B53NDDCb/banne-4.png",
  "https://i.ibb.co/yc10KQWL/BANNER-1-WEB.png",
  "https://i.ibb.co/DHxgq816/banne-3-WEB.png"
];

export default function Carrousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const images = isMobile ? imagesMobile : imagesDesktop;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768); 
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [current, isPaused, images.length]);

  const nextSlide = () => {
    setIsPaused(true);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsPaused(false), 5000);
  };

  const prevSlide = () => {
    setIsPaused(true);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsPaused(false), 9000);
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Contenedor de la imagen */}
      <div className="relative w-full flex items-center">
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
    </div>
  );
}
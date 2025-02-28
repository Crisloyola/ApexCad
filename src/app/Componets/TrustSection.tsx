"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto p-6 m-8 flex flex-col lg:flex-row items-center gap-6 bg-white"
    >
      {/* Sección de texto con animación */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-2/3"
      >
        <h2 className="text-[24px] font-bold text-[#0C0C0C] md:text-left text-center">
          Confianza que <span className="text-[#006393]">inspira</span>
        </h2>
        <p className="text-gray-600 text-[16px] md:text-[16px] text-center md:text-left mt-2 w-[100%] md:w-[80%]">
          Nuestros clientes avalan nuestra dedicación y calidad. Cada proyecto y capacitación está diseñado para
          superar expectativas y generar valor real.
        </p>

        {/* Botones con animación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-4 flex gap-3 justify-center md:justify-start"
        >
          <button className="bg-yellow-400 text-[16px] hover:bg-yellow-500 text-[#0C0C0C] font-semibold px-4 py-2 rounded-lg shadow-md">
            VER MÁS
          </button>
          <button className="bg-[#006393] hover:bg-[#004b73] text-[16px] text-white font-semibold px-4 py-2 rounded-lg shadow-md">
            ¡CONTÁCTANOS!
          </button>
        </motion.div>
      </motion.div>

      {/* Imagen con animación */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-1/3 flex justify-center"
      >
        <Image
          src="/uni.jpg"
          alt="Confianza que inspira"
          width={280}
          height={300}
          className="rounded-xl object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

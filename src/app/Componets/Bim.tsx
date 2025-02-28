'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Bim() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto p-6 m-8 flex flex-col lg:flex-row items-center gap-6"
    >
      {/* Columna izquierda - Texto */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-1/2"
      >
        <h2 className="text-[24px] md:text-[32px] text-center md:text-left font-bold text-[#0C0C0C] leading-tight">
          Soluciones Tecnológicas Integrales para tus Proyectos{' '}
          <span itemProp="aea" className="text-bold text-[#006393]">
            AEC, ECD, CAD, BIM y GIS
          </span>
        </h2>
        <p className="text-[#535353] text-[16px] md:text-left font-medium text-center mt-4">
          Ofrecemos soluciones integrales para todas tus necesidades en tecnología y servicios AEC, ECD, CAD, BIM y GIS,
          con un alto nivel de confiabilidad. Nuestro equipo, altamente competente y experimentado, está comprometido
          con la calidad y el éxito de cada proyecto.
        </p>
      </motion.div>

      {/* Columna derecha - Contenedor con imagen y texto */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4"
      >
        {/* Imagen */}
        <div className="flex justify-center">
          <Image
            src="/bim-niveles.png" // Cambia por la ruta correcta
            alt="Niveles de BIM"
            width={400}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const data = [
  {
    title: "Reducción de Costos y Mayor Control Presupuestario",
    content: [
      "Minimiza los errores y retrabajos mediante la detección temprana de interferencias.",
      "Permite realizar estimaciones precisas de materiales y costos desde las primeras fases.",
      "Optimiza el uso de recursos, evitando desperdicios y sobrecostos innecesarios.",
    ],
  },
  {
    title: "Mayor Eficiencia y Productividad",
    content: [
      "Facilita la coordinación entre disciplinas, reduciendo conflictos en obra.",
      "Mejora la planificación y la gestión del tiempo en cada fase del proyecto.",
      "Automatiza la generación de documentos y reportes, evitando errores manuales.",
    ],
  },
  {
    title: "Transparencia y Mejor Toma de Decisiones",
    content: [
      "Proporciona modelos detallados que facilitan la comprensión del proyecto.",
      "Permite la visualización en 3D y simulaciones para evaluar distintas alternativas antes de la ejecución.",
      "Centraliza la información en un entorno accesible para todos los involucrados.",
    ],
  },
  {
    title: "Gestión Integral del Proyecto y Mantenimiento",
    content: [
      "Abarca desde la concepción del diseño hasta la operación y mantenimiento de la infraestructura.",
      "Facilita la gestión de activos con información precisa y actualizada.",
      "Permite un mejor control del ciclo de vida de los proyectos, asegurando su sostenibilidad.",
    ],
  },
  {
    title: "Cumplimiento de Normativas y Mayor Seguridad",
    content: [
      "Asegura que el proyecto cumpla con estándares y regulaciones vigentes.",
      "Mejora la trazabilidad y facilita auditorías en procesos de construcción y gestión.",
      "Contribuye a una mejor seguridad en obra al prever riesgos y optimizar la planificación.",
    ],
  },
];

export default function BimConsulting() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row items-center"
    >
      {/* Imagen con animación de entrada */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-2/5 flex justify-center lg:justify-start"
      >
        <img
          src="/ban2.png"
          alt="Consultoría BIM"
          className="w-full max-w-sm lg:max-w-full h-auto object-cover rounded-lg"
        />
      </motion.div>

      {/* Contenido con animación de fade-in */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-3/5 lg:pl-8"
      >
        <h2 className="md:text-[24px] text-[27px] text-[#0C0C0C] font-bold mb-4 text-center md:text-left">
          ¿Cómo aporta la consultoría BIM a nuestros clientes?
        </h2>
        <p className="mb-6 text-gray-600 text-[16px] md:text-[18px] text-center md:text-left">
          El BIM (Building Information Modeling) aporta múltiples beneficios a los clientes en diversas áreas, 
          mejorando la eficiencia y la calidad en todas las etapas del proyecto.
        </p>

        {/* Lista numerada con animaciones */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-l-4 border-[#006393] pl-4"
            >
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-[14px] md:text-[16px] text-[#006393] py-2"
                onClick={() => toggleSection(index)}
              >
                <span>
                  {index + 1}. {item.title}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#006393]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#006393]" />
                )}
              </button>

              {/* Animación de apertura */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="mt-2 text-[#535353] md:text-[14px] text-[14px] list-disc pl-5">
                  {item.content.map((point, i) => (
                    <li key={i} className="py-1">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

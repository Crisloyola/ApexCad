"use client";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Section() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const services = [
    {
      title: "Gestión Integral de Proyectos BIM",
      description:
        "Optimizamos cada fase del ciclo de vida de un proyecto aplicando la metodología BIM. Desde el diseño estructural hasta la coordinación interdisciplinaria, utilizamos software especializado para modelar, gestionar y supervisar proyectos con precisión y eficiencia, garantizando la calidad y la coherencia en todas las etapas del desarrollo.",
      icon: "/edificio.png"
    },
    {
      title: "Diseño Computacional y Generativo",
      description:
        "Implementamos técnicas avanzadas de programación con lenguajes como Python y herramientas de modelado paramétrico como Dynamo y Grasshopper. Además, integramos algoritmos de inteligencia artificial y machine learning para optimizar el diseño y la eficiencia en proyectos, reduciendo costos y mejorando la toma de decisiones.",
      icon: "/pc.png"
    },
    {
      title: "Implementación Estratégica de BIM",
      description:
        "Guiamos a empresas y organizaciones en la adopción de BIM dentro de sus flujos de trabajo. Evaluamos sus procesos actuales, diseñamos planes de transición personalizados e impulsamos una cultura de trabajo colaborativo. Asimismo, capacitamos al personal en el uso de herramientas y software BIM, asegurando una integración exitosa y sostenible de la metodología.",
      icon: "/all.png"
    }
  ];

  return (
    <motion.section 
      className="py-7 bg-white text-gray-900 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-[24px] md:text-[36px] font-extrabold text-[#0C0C0C]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ¿Cómo ayudan las consultorías BIM a nuestros clientes?
        </motion.h2>

        <motion.p 
          className="mt-5 text-[12px] md:text-[20px] font-semibold text-[#0C0C0C]"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          ÁREA DE ACCIÓN Y SERVICIOS COMO CONSULTORÍA <span className="font-bold">BIM</span>
        </motion.p>

        {/* Desktop grid */}
        <div className="mt-8 hidden md:grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <motion.div 
              key={index} 
              className="p-6 border rounded-[27px] shadow-md text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4 w-16 h-16 bg-[#006393] rounded-full">
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  width={40} 
                  height={40} 
                  className="w-9 h-8" 
                  unoptimized 
                />
              </div>
              <h3 className="ml-2 text-[16px] font-bold">📌{item.title}</h3>
              <p className="text-[#535353] text-[14px]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="mt-8 md:hidden">
          <Slider {...settings}>
            {services.map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 border rounded-[27px] shadow-md text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center mb-4 w-16 h-16 bg-[#006393] rounded-full">
                  <Image 
                    src={item.icon} 
                    alt={item.title} 
                    width={40} 
                    height={40} 
                    className="w-9 h-8" 
                  />
                </div>
                <h3 className="ml-2 text-[16px] font-bold">📌{item.title}</h3>
                <p className="text-[#535353] text-[14px]">{item.description}</p>
              </motion.div>
            ))}
          </Slider>
        </div>

        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-[#006393] text-white font-semibold py-3 px-6 rounded-[12px] hover:bg-[#005277] transition">
            ¡Descubre más sobre Nosotros!
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

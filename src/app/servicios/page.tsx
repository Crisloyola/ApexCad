import Image from 'next/image'
import React from 'react'
import { Navbar } from '../Componets/Navbar'
import { FaBuilding, FaNetworkWired, FaCogs, FaLaptopCode, FaChalkboardTeacher, FaProjectDiagram } from "react-icons/fa";
import { Footer } from '../Componets/Footer';


export default function Servicios() {
  const servicios = [
    {
      icono: <FaBuilding className="text-[#006393] text-3xl" />,
      titulo: "Implementación BIM para Empresas e Instituciones",
      items: [
        "Diagnóstico BIM de la empresa o institución",
        "Definición de objetivos y roadmap de implementación",
        "Desarrollo de estándares y protocolos BIM",
      ],
    },
    {
      icono: <FaNetworkWired className="text-[#006393]  text-3xl" />,
      titulo: "Adopción de entornos colaborativos",
      items: [
        "Implementación de Autodesk Construction Cloud (ACC) y entornos CDE",
        "Integración de software BIM en flujos de trabajo",
        "Gestión y control de modelos BIM",
      ],
    },
    {
      icono: <FaCogs className="text-[#006393]  text-3xl" />,
      titulo: "Optimización de procesos con BIM",
      items: [
        "Coordinación multidisciplinaria y detección de interferencias (clash detection)",
        "Automatización de tareas repetitivas con Dynamo y programación visual",
        "Implementación de BIM para gestión de activos (BIM-FM)",
      ],
    },
    {
      icono: <FaLaptopCode className="text-[#006393]  text-3xl" />,
      titulo: "Licenciamiento de Software BIM",
      items: [
        "Asesoría en la selección de software (Autodesk AEC Collection, Tekla, Presto, Primavera P6)",
        "Gestión de licencias académicas y profesionales",
        "Optimización de costos en software",
      ],
    },
    {
      icono: <FaChalkboardTeacher className="text-[#006393]  text-3xl" />,
      titulo: "Capacitación y Formación",
      items: [
        "Capacitación a empresas e instituciones educativas en BIM",
        "Certificación en software BIM",
        "Capacitación en gestión de proyectos BIM",
      ],
    },
    {
      icono: <FaProjectDiagram className="text-[#006393]  text-3xl" />,
      titulo: "Consultoría en Proyectos BIM",
      items: [
        "Modelado y documentación BIM",
        "Coordinación y auditoría BIM",
        "BIM para gestión de infraestructura y mantenimiento",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <section className="relative bg-white text-[#0C0C0C]">
        {/* Imagen de fondo con superposición */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/servicio.jpg" // Reemplaza con tu imagen
            alt="Nosotros"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />

          {/* Capa superpuesta con sombra negra */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Contenido encima de la imagen */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-5xl font-extrabold">APEX CAD BIM</h2>
            <p className="text-[#FFDF00] text-lg font-semibold mt-2">
              SOLUCIONES BIM PARA INSTITUCIONES EDUCATIVAS, PRIVADAS Y DE GOBIERNO
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Texto */}
            <div>
              <h3 className="text-4xl font-extrabold text-[#006393]">
                <span className="text-[#0C0C0C]">Servicios</span>
              </h3>

              {/* Lista de Servicios */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-2l font-bold text-[#006393]">Implementación BIM</h4>
                  <p className="text-2l text-[#535353]">
                    Diseñamos estrategias de adopción BIM para empresas y organizaciones, asegurando una transición eficiente.
                  </p>
                </div>
                <div>
                  <h4 className="text-2l font-bold text-[#006393]">Licenciamiento de Software</h4>
                  <p className="text-2l text-[#535353]">
                    Gestión y suministro de licencias de software BIM como Autodesk AEC Collection, TEKLA, Presto y más.
                  </p>
                </div>
                <div>
                  <h4 className="text-2l font-bold text-[#006393]">Capacitación y Formación</h4>
                  <p className="text-2l text-[#535353]">
                    Cursos y talleres personalizados para equipos de trabajo, docentes y estudiantes en software BIM.
                  </p>
                </div>
                <div>
                  <h4 className="text-2l font-bold text-[#006393]">Consultoría en Proyectos BIM</h4>
                  <p className="text-2l text-[#535353]">
                    Asesoramiento en la ejecución de proyectos bajo metodología BIM, optimizando tiempos y costos.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative h-[400px] w-full">
              <Image
                src="/servicio2.jpg" // Reemplaza con tu imagen
                alt="Nosotros"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Servicios */}
          <div className="max-w-6xl mx-auto  py-16">
            <h3 className="text-[24px] md:text-[36px] font-extrabold text-center text-[#0C0C0C] mb-8">
              Servicios de APEX CAD BIM
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicios.map((servicio, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-3 mb-3 text-[#0C0C0C]">
                    {servicio.icono}
                    <h4 className="text-2l font-bold text-[#006393]">{servicio.titulo}</h4>
                  </div>
                  <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                    {servicio.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center md:items-stretch justify-center text-center md:text-left bg-[#006393] text-white p-6 rounded-lg shadow-lg gap-6">
              <div className="w-full md:w-1/3 flex">
                <Image
                  src="/servicio3.jpg"
                  width={350}
                  height={200}
                  alt="APEX CAD BIM"
                  className="rounded-lg shadow-md object-cover w-full md:h-full"
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col justify-center px-4 md:px-8">
                <p className="font-semibold text-[24px] md:text-[28px] leading-tight">APEX CAD <span className='text-[#FFDF00]'>BIM</span>: Impulsando la transformación digital en la industria de la construcción.</p>
                <p className="mt-4 text-base md:text-lg">🔹 Consultoría especializada en implementación BIM</p>
                <p className="text-base md:text-lg">🔹 Gestión de licencias y capacitación de alto nivel</p>
                <p className="text-base md:text-lg">🔹 Optimización de procesos con tecnología BIM</p>
                <a href="https://wa.link/0lmi4t" target='_blank'>
                  <button className="mt-6 px-6 py-3 bg-white text-[#006393] font-bold rounded-lg hover:bg-[#FFDF00] transition">
                    Contáctanos para más información
                  </button>
                </a>
              </div>
            </div>



          </div>
        </div>

      </section>

      <Footer />
    </>

  )
}

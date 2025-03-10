import Image from 'next/image'
import React from 'react'
import { Navbar } from '../Componets/Navbar'
import { Footer } from '../Componets/Footer';
import { CheckCircle } from "lucide-react";
import Smp from './smp';

export default function Servicios() {
  const servicios = [
    {
      titulo: "Licenciamiento de Software BIM",
      imagen: "/BIM.jpg", // Reemplaza con la imagen correcta
      descripcion:
        "APEX CAD BIM gestionó el licenciamiento educativo de software BIM especializado para la EPIC-UNMSM, asegurando herramientas con estándares internacionales.",
      items: [
        "Autodesk AEC Collection (Revit, Navisworks, Civil 3D, Infraworks, AutoCAD).",
        "Presto para presupuestación y control de costos.",
        "Primavera P6 para planificación y gestión de proyectos.",
        "Tekla Structures para modelado y detallado de estructuras en acero y concreto.",
      ],
      bene:[
        "Beneficio: Con este licenciamiento, los estudiantes y docentes tienen acceso a software de vanguardia, alineado con las exigencias del mercado laboral."
      ]
    },
    {
      titulo: "Capacitación en Adopción BIM para Docentes",
      imagen: "/bim2.jpg", // Reemplaza con la imagen correcta
      descripcion:
        "Capacitamos a docentes en el uso de herramientas BIM para la enseñanza, asegurando una formación alineada con los estándares actuales.",
      items: [
        "Implementación de Autodesk Construction Cloud (ACC) y entornos CDE.",
        "Integración de software BIM en flujos de trabajo.",
        "Gestión y control de modelos BIM.",
      ],
      bene:[
        "Beneficio: Docentes capacitados para guiar a los estudiantes en la aplicación de BIM, fortaleciendo el aprendizaje basado en proyectos reales."
      ]
    },
    {
      titulo: "Aplicación del Software en Proyectos Académicos",
      imagen: "/bim3.jpg", // Reemplaza con la imagen correcta
      descripcion:
        "Facilitamos la aplicación de BIM en proyectos académicos para mejorar la coordinación, automatización y gestión de activos.",
      items: [
        "Coordinación multidisciplinaria y detección de interferencias (clash detection).",
        "Automatización de tareas repetitivas con Dynamo y programación visual.",
        "Implementación de BIM para gestión de activos (BIM-FM).",
      ],
      bene:[
        "Beneficio: Se logró una enseñanza más dinámica y alineada con el sector de la construcción, mejorando la empleabilidad de los egresados."
      ]
    },
  ];

  return (
    <>
      <Navbar />
      <section className="relative bg-white text-[#0C0C0C]">
        {/* Imagen de fondo con superposición */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/ban01.jpg"
            alt="Nosotros"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-2xl md:text-5xl font-extrabold">CASO DE ÉXITO – UNMSM - EPIC</h2>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Texto */}
            <div>
              <h3 className="text-4xl font-extrabold text-[#006393]">
                <span className="text-[#0C0C0C]">Implementación BIM en la Escuela de Ingeniería Civil - UNMSM</span>
              </h3>
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-[20px] font-bold text-[#006393]">Cliente:</h4>
                  <p className="text-2l text-[#535353]">📌 Universidad Nacional Mayor de San Marcos (UNMSM)</p>
                  <p className="text-2l text-[#535353]">📌 Escuela Profesional de Ingeniería Civil (EPIC-UNMSM)</p>
                </div>
                <div>
                  <h4 className="text-[20px] font-bold text-[#006393]">Desafío:</h4>
                  <p className="text-2l text-[#535353]">
                    La EPIC-UNMSM tenía el objetivo de modernizar su infraestructura tecnológica para mejorar la enseñanza y aplicación de la
                    metodología BIM (Building Information Modeling) en la formación de futuros ingenieros civiles. Para ello, requería:
                  </p>
                  <div className='mt-2'>
                    <ul className="text-[#535353] space-y-2">
                      <li className="flex">
                        <CheckCircle className="text-green-500 mr-2" size={38} />
                        Licenciamiento de software BIM para su laboratorio académico, con herramientas utilizadas en la industria de la construcción.
                      </li>
                      <li className="flex">
                        <CheckCircle className="text-green-500 mr-2" size={28} />
                        Capacitación docente para la adopción de BIM en la enseñanza y aplicación en proyectos reales.
                      </li>
                      <li className="flex">
                        <CheckCircle className="text-green-500 mr-2" size={25} />
                        Implementación de metodologías BIM en proyectos académicos y de investigación
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative h-[520px] w-full">
              <Image
                src="/smp.jpeg"
                alt="Nosotros"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Servicios */}
          <div className="max-w-6xl mx-auto py-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-center text-[#0C0C0C] mb-8">
              Solución Brindada por APEX CAD BIM
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.map((servicio, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <Image
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    layout="intrinsic" // Mantiene la proporción original de la imagen
                    width={400} // Ajusta según el tamaño necesario
                    height={150} // Ajusta según el tamaño necesario
                    objectFit="contain" // Asegura que la imagen se vea completamente sin recortes
                    className="rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-[#0C0C0C]">
                      <h4 className="text-xl font-bold text-[#006393]">{servicio.titulo}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
                    <ul className="mt-4 space-y-2">
                      {servicio.items.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span className='text-green-500'>✔</span>
                          <span className="text-sm ml-2">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className='mt-4 space-y-2'>
                      {servicio.bene.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <span>➡️</span>
                          <span className="text-sm ml-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <Smp /> 
            <div className="mt-5 flex flex-col md:flex-row items-center md:items-stretch justify-center text-center md:text-left bg-[#006393] text-white p-6 rounded-lg shadow-lg gap-6">
              <div className="w-full md:w-1/3">
                <Image
                  src="/unsm.png"
                  width={350}
                  height={200}
                  alt="APEX CAD BIM"
                  className="rounded-lg shadow-md object-cover w-full"
                />
              </div>
              <div className="w-full md:w-2/3 px-4">
                <p className="text-2xl font-semibold">Conclusión</p>
                <p>Gracias a la implementación liderada por <span className='text-[#FFDF00]'>APEX CAD BIM</span>, la Escuela Profesional de Ingeniería Civil de la UNMSM ha dado un paso firme en la 
                  adopción de BIM como estándar educativo, posicionándose como una institución innovadora y alineada con las exigencias del mercado de la construcción.</p>
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
  );
}

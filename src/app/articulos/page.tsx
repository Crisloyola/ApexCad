"use client";

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../Componets/Navbar'
import { Footer } from '../Componets/Footer';
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { title } from 'process';

const sections = [
  {
    title: "ADOPCIÓN BIM Y DOCUMENTACIÓN",
    links: [
      { title: "Reglamento Nacional de Edificaciones (RNE)", url: "https://www.gob.pe/institucion/vivienda/informes-publicaciones/2309793-reglamento-nacional-de-edificaciones-rne" },
      { title: "Plan BIM Perú", url: "https://mef.gob.pe/planbimperu/" },
      { title: "Guía Técnica BIM", url: "https://www.investinperu.pe/RepositorioAPS/0/0/JER/GUIAS_INVERSION/Guia-tecnica-BIM-para-edificaciones-e-infraestructura.pdf" },
      { title: "Plan de Implementación BIM", url: "https://cdn.www.gob.pe/uploads/document/file/7426946/6313561-plan-de-implementacion-bim-2025-de-la-anin.pdf?v=1735325452" }
    ]
  },
  {
    title: "FOTOGRAMETRÍA Y CIVIL 3D",
    links: [
      { title: "Manual de Autodesk – CIVIL 3D", url: "https://help.autodesk.com/view/CIV3D/2022/ESP/?guid=GUID-B6CF98F9-FF6F-4FF5-8022-60EB21A611A7" },
      { title: "Guía Avanzada Autodesk CIVIL 3D", url: "https://help.autodesk.com/view/CIV3D/2023/ESP/" },
      { title: "Aprendizajes de autodesk CIVIL 3D", url: "https://help.autodesk.com/view/CIV3D/2022/ESP/?guid=GUID-B6CF98F9-FF6F-4FF5-8022-60EB21A611A7" },
      { title: "Normativas tecnicas peruanas e informacion Geografica y Geomática.", url: "https://app.ign.gob.pe/ortoimagenes/wp-content/uploads/2022/10/MT-N-3-01-1.pdf" },
      { title: "Especificaciones tecnicas para la produccion de mapas Topograficos a escala", url: "https://www.gob.pe/institucion/ign/informes-publicaciones/543938-normas-tecnicas-especificaciones-tecnicas-para-la-produccion-de-mapas-topograficos-a-escala-de-1-1-000"},
      {title: "Contenidos técnicos para estudios Topograficos.", url: "https://www.gob.pe/institucion/pronied/informes-publicaciones/1322788-contenidos-tecnicos-minimos-para-estudios-topograficos "},
      {title: "Manual técnico para generaciòn de Ortoimagenes", url: "https://app.ign.gob.pe/ortoimagenes/wp-content/uploads/2022/10/MT-N-3-01-1.pdf"},
    ]
  },
  {
    title: "ROBOT ESTRUCTURAL",
    links: [
      { title: "Manual de usuario de Autodesk Robot Estructural Analysis Profesional 2024.", url: "https://help.autodesk.com/view/RSAPRO/2025/ESP/" },
      { title: "Guia de introducción Mètrica", url: "https://download.autodesk.com/us/support/files/robot_getting_started_guide_eng_2011_metric_2.pdf/" },
      { title: "Manual de Verificación para eurocodigos.", url: "https://download.autodesk.com/us/support/files/robot_structural_analysis_pro_2015_verification_manuals/Verification_Manual_Eurocodes.pdf" },
      { title: "Norma E.030 Diseño sismoresistente.", url: "https://museos.cultura.pe/sites/default/files/item/archivo/Norma%20técnica%20E.030%20Diseño%20sismorresistente.pdf" },
      { title: "Norma E.070 Albañileria.", url: "https://www.cip.org.pe/publicaciones/2021/enero/portal/e.070-alba-ileria-sencico.pdf"}
    ]
  },
  {
    title: "REVIT ESTRUCTURAS",
    links: [
      { title: "REGLAMENTO NACIONAL DE EDIFICACIONES (RNE)", url: "https://www.gob.pe/institucion/vivienda/informes-publicaciones/2309793-reglamento-nacional-de-edificaciones-rne" },
      { title: "Norma E.060 Concreto Armado.", url: "https://www.cip.org.pe/publicaciones/2021/enero/portal/e.060-concreto-armado-sencico.pdf" },
      { title: "Norma E.020 Cargas.", url: "https://cdn.www.gob.pe/uploads/document/file/2366640/50%20E.020%20CARGAS.pdf" },
    ]
  },
  {
    title: "TEKLA ESTRUCTURAS",
    links: [
      { title: "REGLAMENTO NACIONAL DE EDIFICACIONES (RNE)", url: "https://www.gob.pe/institucion/vivienda/informes-publicaciones/2309793-reglamento-nacional-de-edificaciones-rne" },
      { title: "Norma E.090 Estructuras metalicas.", url: "https://cdn.www.gob.pe/uploads/document/file/2366673/58%20E.090%20ESTRUCTURAS%20METALICAS.pdf" },
      { title: "NNorma E.020 CARGAS.", url: "https://cdn.www.gob.pe/uploads/document/file/2366640/50%20E.020%20CARGAS.pdf" },
    ]
  },
  {
    title: "REVIT MEP.",
    links: [
      { title: "Manual de ususario de REVIT MEP.", url: "https://images.autodesk.com/adsk/files/revit_architecture_2011_user_guide_esp.pdf" },
      { title: "Autodesk Revit 2025", url: "https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-03565843-BB48-4707-B54C-39D6E8E51880" },
      { title: "Autodesk Revit 2024", url: "https://static.sdcpublications.com/pdfsample/978-1-63057-599-1-2-3jbraz8jxj.pdf" },
      { title: "Codigo Nacional de Electricidad – Utilización.", url: "https://waltervillavicencio.com/wp-content/uploads/2019/01/EM.010-2019.pdf" },
      {title: "Norma técnica I.S.010 Instalaciones Sanitarias para edificaciones.", url: "https://www.saludarequipa.gob.pe/desa/archivos/Normas_Legales/saneamiento/IS.010.pdf" },
    ]
  },
  {
    title: "NAVISWORKS MANAGE",
    links: [
      { title: "Manual de usuario Autodesk Navisworks Manage", url: "https://help.autodesk.com/view/NAV/2020/ESP/" },
      { title: "Plan BIM Perú.", url: "https://mef.gob.pe/planbimperu/" },
      { title: "Autodesk Revit 2024", url: "https://static.sdcpublications.com/pdfsample/978-1-63057-599-1-2-3jbraz8jxj.pdf" },
      { title: "Decreto supremo N. 289-2019- EF.", url: "https://aspaih.com/wp-content/uploads/decreto-supremo-n-289-2019-ef.pdf" },
    ]
  },
  {
    title: "AUTODESK CONSTRUCTION CLOUD.",
    links: [
      { title: "Documentacion Autodesk Construction Cloud.", url: "https://aps.autodesk.com/en/docs/acc/v1/overview/" },
      { title: "Guia nacional BIM.", url: "https://www.gob.pe/institucion/mef/normas-legales/4035069-0003-2023-ef-63-01" },
      { title: "Guia tecnica BIM.", url: "https://www.investinperu.pe/RepositorioAPS/0/0/JER/GUIAS_INVERSION/Guia-tecnica-BIM-para-edificaciones-e-infraestructura.pdf" },
    ]
  },
  {
    title: "PRESTO / PRIMAVERA P6. ",
    links: [
      { title: "Manual de Presto 2025.", url: "https://www.rib-software.es/pdf/Usar-Presto/Manual-de-Presto-completo.pdf" },
      { title: "Manual de Primavera P6", url: "https://docs.oracle.com/cd/F51301_01/English/User_Guides/p6_eppm_user/p6_eppm_user.pdf" },
      { title: "Plan de implementacion BIM", url: "https://cdn.www.gob.pe/uploads/document/file/7426946/6313561-plan-de-implementacion-bim-2025-de-la-anin.pdf?v=1735325452" },
    ]
  },
  {
    title: "INTEROPERATIBILIDAD IFC Y GESTIÓN DE ACTIVOS.",
    links: [
      { title: "Manual de IFC Para Revit 2.0", url: "https://www.autodesk.com/blogs/aec/wp-content/uploads/sites/36/2022/02/09/revit-ifc-open-bim-manual-es.pdf" },
      { title: "Guia para la implementacion BIM.", url: "https://www.autodesk.com/blogs/aec/wp-content/uploads/sites/36/2022/02/09/revit-ifc-open-bim-manual-es.pdf" },
    ]
  },
];

export default function Servicios() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>
      <Navbar />
      <section className="relative bg-white text-[#0C0C0C]">

        {/* Imagen de fondo con superposición */}
        <div className="relative h-[400px] w-full">
          <Image
            src="/banne1.png" // Reemplaza con tu imagen
            alt="Nosotros"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />

          {/* Capa superpuesta con sombra negra */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Contenido encima de la imagen */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-5xl font-extrabold">APEX CAD BIM - <span className="text-[#FFDF00]">CATALOGO</span></h2>

          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mt-[1px] flex flex-col md:flex-row items-center md:items-stretch justify-center text-center md:text-left bg-[#006393] text-white p-6 rounded-lg shadow-lg gap-6">
            <div className="w-full md:w-1/3 flex">
              <Image
                src="/curso1.jpg"
                width={350}
                height={200}
                alt="APEX CAD BIM"
                className="rounded-lg shadow-md object-cover w-full md:h-full"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center px-4 md:px-8">
              <p className="font-semibold text-[24px] md:text-[28px] leading-tight">APEX CAD <span className='text-[#FFDF00]'>BIM</span>: Todo lo que necesitas para la transformación digital en construcción</p>
              <a href="https://wa.link/0lmi4t" target='_blank'>
                <button className="mt-6 px-6 py-3 bg-white text-[#006393] font-bold rounded-lg hover:bg-[#FFDF00] transition">
                  Contáctanos para más información
                </button>
              </a>
            </div>
          </div>



          <div className="grid md:grid-cols-2 gap-10 items-center mt-9">
            {/* Texto */}
            <div>
              <h3 className="text-4xl font-extrabold text-[#006393]">
                <span className="text-[#0C0C0C]">Licencias de Software BIM</span>
              </h3>

              {/* Lista de Servicios */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-[18px] font-bold text-[#006393]">📌 Software de Autodesk AEC</h4>
                  <p className="mt-2 text-base  md:text-[14px]">🔹Autodesk AEC Collection (Revit, Navisworks, Civil 3D, Infraworks, AutoCAD)</p>
                  <p className="text-base md:text-[14px]">🔹 Autodesk Construction Cloud (ACC) – BIM Collaborate Pro</p>
                  <p className="text-base md:text-[14px]">🔹 Autodesk Revit LT Suite (Revit LT + AutoCAD LT)</p>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#006393]">📌 Software de Modelado y Gestión de Proyectos</h4>
                  <p className="mt-2 text-base md:text-[14px]">🔹 Tekla Structures – Licencias Educativas y Profesionales</p>
                  <p className="text-base md:text-[14px]">🔹 Presto – Presupuesto y Control de Costos</p>
                  <p className="text-base md:text-[14px]">🔹 Primavera P6 – Planificación y Gestión de Proyectos</p>
                  <p className="text-base md:text-[14px]">🔹 Synchro Pro – Simulación y planificación 4D</p>
                  <p className="text-base mmd:text-[14px]">🔹 Vico Office – Gestión de costos y planificación BIM</p>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#006393]">📌 Otras Herramientas BIM</h4>
                  <p className="mt-2 text-base md:text-[14px]">🔹 Trimble Connect – Gestión de Modelos BIM en la nube</p>
                  <p className="text-base md:text-[14px]">🔹 Solibri Model Checker – Validación de Modelos BIMl</p>
                  <p className="text-base md:text-[14px]">🔹 Fuzor – Simulación BIM en tiempo real</p>
                  <p className="text-base md:text-[14px]">🔹 BIMcollab – Gestión de incidencias BIM</p>
                  <p className="text-base md:text-[14px]">🔹 Lumion / Enscape – Renderizado en tiempo real</p>
                </div>
              </div>
            </div>
            {/* Imagen */}
            <div className="relative h-[600px] w-full">
              <Image
                src="/1.jpg" // Reemplaza con tu imagen
                alt="Nosotros"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

        </div>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Imagen */}
            <div className="relative h-[400px] w-full">
              <Image
                src="/3.jpeg" // Reemplaza con tu imagen
                alt="Nosotros"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Texto */}
            <div>
              <h3 className="text-4xl font-extrabold text-[#006393]">
                <span className="text-[#0C0C0C]">Equipos para Implementación BIM</span>
              </h3>

              {/* Lista de Servicios */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-[18px] font-bold text-[#006393]">📌 Workstations y Hardware Especializado</h4>
                  <p className="mt-2 text-base  md:text-[14px]">🔹Laptops y PCs para BIM (HP, Dell, Lenovo, MSI) con tarjetas gráficas NVIDIA RTX</p>
                  <p className="text-base md:text-[14px]">🔹 Servidores y estaciones de trabajo para modelado y renderizado</p>
                  <p className="text-base md:text-[14px]">🔹 Tablets y dispositivos móviles para trabajo en campo (Microsoft Surface, iPad Pro)</p>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#006393]">📌 Equipos de Realidad Virtual y Aumentada</h4>
                  <p className="mt-2 text-base md:text-[14px]">🔹 Gafas VR (Oculus, HTC Vive, Varjo) para visualización BIM</p>
                  <p className="text-base md:text-[14px]">🔹 Hololens 2 – Implementación de BIM en obra con realidad aumentada</p>
                  <p className="text-base md:text-[14px]">🔹 Escáneres láser 3D (Leica, Trimble, Faro) para captura de realidad</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">


            {/* Texto */}
            <div>
              <h3 className="text-4xl font-extrabold text-[#006393]">
                <span className="text-[#0C0C0C]">Bibliotecas y Contenidos BIM</span>
              </h3>

              {/* Lista de Servicios */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-[18px] font-bold text-[#006393]">📌 Bibliotecas de Objetos y Familias BIM</h4>
                  <p className="mt-2 text-base  md:text-[14px]">🔹Familias paramétricas para Autodesk Revit y Tekla</p>
                  <p className="text-base md:text-[14px]">🔹 Plantillas y estándares BIM para empresas e instituciones</p>
                  <p className="text-base md:text-[14px]">🔹 Bases de datos de precios y presupuestos para Presto</p>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#006393]">📌 Plugins y Extensiones BIM</h4>
                  <p className="mt-2 text-base md:text-[14px]">🔹 Dynamo Scripts personalizados para automatización en Revit</p>
                  <p className="text-base md:text-[14px]">🔹 Plugins para Navisworks y ACC (gestión de incidencias, validación)</p>
                  <p className="text-base md:text-[14px]">🔹 Extensiones para Tekla (detallado de estructuras, automatización de modelos)</p>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative h-[400px] w-full">
              <Image
                src="/2.jpeg" // Reemplaza con tu imagen
                alt="Nosotros"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>


        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Imagen */}
            <div className="relative h-[400px] w-full">
              <Image
                src="/4.webp" // Reemplaza con tu imagen
                alt="Nosotros"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Texto */}
            <div>

              <h3 className="text-4xl font-extrabold text-[#006393]">
                <span className="text-[#0C0C0C]">Material Didáctico y Capacitación BIM</span>
              </h3>

              {/* Lista de Servicios */}
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-[18px] font-bold text-[#006393]">📌 Libros y Manuales Especializados</h4>
                  <p className="mt-2 text-base  md:text-[14px]">🔹Guías oficiales de Autodesk Revit, Navisworks y ACC</p>
                  <p className="text-base md:text-[14px]">🔹 Manuales de gestión BIM (ISO 19650, BEP, CDE)</p>
                  <p className="text-base md:text-[14px]">🔹 Cursos y certificaciones BIM con material digitalo</p>
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-[#006393]">📌 Cursos Online y Presenciales</h4>
                  <p className="mt-2 text-base md:text-[14px]">🔹Capacitación en software BIM con certificación</p>
                  <p className="text-base md:text-[14px]">🔹 Formación en estándares internacionales BIM</p>
                  <p className="text-base md:text-[14px]">🔹 Formación en estándares internacionales BIM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row items-center"
    >
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

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-3/5 lg:pl-8"
      >
        <h2 className="md:text-[24px] text-[27px] text-[#0C0C0C] font-bold mb-4 text-center md:text-left">
          Recursos y Documentación BIM
        </h2>
        <p className="mb-6 text-gray-600 text-[16px] md:text-[18px] text-center md:text-left">
          Encuentra información clave sobre BIM, reglamentaciones y herramientas esenciales para el desarrollo y gestión de proyectos.
        </p>
        <div className="space-y-4">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-l-4 border-[#006393] pl-4"
            >
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-[14px] md:text-[16px] text-[#006393] py-2"
                onClick={() => toggleItem(sectionIndex)}
              >
                <span>{section.title}</span>
                {openIndex === sectionIndex ? (
                  <ChevronUp className="w-5 h-5 text-[#006393]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#006393]" />
                )}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === sectionIndex ? "auto" : 0, opacity: openIndex === sectionIndex ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <ul className="mt-2 text-[#535353] md:text-[14px] text-[14px] list-disc pl-5">
                  {section.links.map((link, index) => (
                    <li key={index} className="py-1">
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#535353] underline">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>



      </section>

      <Footer />
    </>

  )
}

import React from 'react'
import { Navbar } from '../Componets/Navbar'
import Image from 'next/image'
import { FaCheck, FaAngleRight } from "react-icons/fa";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Footer } from '../Componets/Footer';



export default function Nosotros() {
  return (
    <>
    <Navbar />
    <section className="relative bg-white text-[#0C0C0C]">
      {/* Imagen de fondo con superposición */}
      <div className="relative h-[400px] w-full">
      <Image
        src="/font.jpeg" // Reemplaza con tu imagen
        alt="Nosotros"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />

      {/* Capa superpuesta con sombra negra */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Contenido encima de la imagen */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-5xl font-extrabold">NOSOTROS</h2>
        <p className="text-[#FFDF00] text-lg font-semibold mt-2">
          ESPECIALIZANDO AL PROFESIONAL DEL FUTURO
        </p>
      </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h3 className="text-4xl font-extrabold text-[#006393]">
              <span className="text-[#006393]">APEX</span> CAD
            </h3>
            <p className="text-lg mt-4 leading-relaxed text-[#535353]">
            APEX CAD es una empresa especializada en la implementación y adopción de 
            la metodología BIM (Building Information Modeling) en distintos sectores. Su enfoque principal es optimizar el diseño, 
            construcción y gestión de proyectos mediante tecnologías y estándares BIM.
            </p>
          </div>

          {/* Imagen */}
          <div className="relative h-[300px] w-full">
            <Image
              src="/quien.jpeg" // Reemplaza con tu imagen
              alt="Nosotros"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-6xl mx-auto py-12 px-6">
      {/* Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Misión */}
        <div>
          <h2 className="text-2xl font-bold text-[#006393] flex items-center">
            <FaAngleRight className="text-[#006393]  mr-2" /> Nuestra Misión
          </h2>
          <p className="mt-3 text-[#535353]">
            Proveer soluciones integrales en consultoría BIM, capacitación y gestión de proyectos, 
            impulsando la innovación tecnológica y la transformación digital en la industria de la construcción. 
            Nos enfocamos en optimizar procesos, fomentar la colaboración interdisciplinaria y garantizar la excelencia 
            en los resultados de nuestros clientes, contribuyendo al desarrollo sostenible y eficiente del sector AEC.
          </p>
        </div>

        {/* Visión */}
        <div>
          <h2 className="text-2xl font-bold text-[#006393] flex items-center">
            <FaAngleRight className="ttext-[#006393]  mr-2" /> Nuestra Visión
          </h2>
          <p className="mt-3 text-gray-600">
            Ser líderes reconocidos en la implementación y consultoría BIM a nivel nacional e internacional, 
            destacándose por nuestra excelencia técnica, compromiso con la innovación y capacidad de transformar 
            desafíos en oportunidades. Aspiramos a ser una referencia en el sector, promoviendo el uso de tecnologías 
            avanzadas y metodologías colaborativas que impulsen el futuro de la construcción.
          </p>
        </div>
      </div>

      {/* Valores */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#006393] flex items-center">
          <FaAngleRight className="text-[#006393] mr-2" /> Valores de APEX CAD
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {[
            { title: "Innovación", text: "Apostamos por la constante actualización y adopción de tecnologías avanzadas para ofrecer soluciones vanguardistas que impulsen la transformación digital en el sector AEC." },
            { title: "Excelencia", text: "Nos comprometemos a entregar servicios de la más alta calidad, garantizando precisión, eficiencia y cumplimiento de los estándares internacionales en cada proyecto." },
            { title: "Colaboración", text: "Fomentamos el trabajo en equipo y la comunicación efectiva, tanto dentro de nuestra organización como con nuestros clientes, para alcanzar objetivos comunes de manera óptima." },
            { title: "Sostenibilidad", text: "Promovemos prácticas responsables y soluciones que contribuyan al desarrollo sostenible del entorno construido, minimizando impactos negativos en el medio ambiente." },
            { title: "Compromiso", text: "Nos dedicamos a satisfacer las necesidades de nuestros clientes con integridad, responsabilidad y enfoque en sus objetivos y expectativas." },
            { title: "Crecimiento continuo", text: "Valoramos la capacitación y el aprendizaje continuo de nuestro equipo, asegurando que nuestros conocimientos y habilidades estén siempre alineados con las demandas del mercado." },
            { title: "Adaptabilidad", text: "Nos ajustamos a las necesidades específicas de cada cliente y proyecto, ofreciendo soluciones flexibles y personalizadas para maximizar su valor." },
          ].map((valor, index) => (
            <div key={index} className="flex items-start">
              <FaCheck className="text-green-500  mr-2" size={33} />
              <div>
                <h3 className="text-lg font-semibold text-[#535353]">{valor.title}</h3>
                <p className="text-gray-600 text-sm">{valor.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <div className="relative w-full max-w-6xl mx-auto text-center">
      {/* Imagen de fondo */}
      <div className="relative w-full h-[400px]">
      <Image
       src="/fondo1.jpeg"
       alt="Especialistas en Tecnología"
       layout="fill"
       objectFit="cover"
       className="grayscale"
       quality={100}
       priority
      />

        
        {/* Texto superpuesto */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">
            ESPECIALISTAS <span className="text-[#006393]">EN </span> 
             <span className="text-[#FFDF00]">TECNOLOGÍA</span> <span className='font-extrabold'>BIM</span>
          </h1>
        </div>
      </div>
           {/* Ubicación */}
      <div className="flex flex-col md:flex-row mt-12 px-0 md:px-10 m-8">
        <div className="text-left md:w-1/2">
        <h2 className="text-2xl font-bold text-[#006393] flex items-center">
          <FaAngleRight className="text-[#006393] mr-2" />Ubicanos
        </h2>
          <div className="flex items-center mb-4 ">
            <FaPhone className="text-[#006393] text-2xl mr-3" />
            <div>
              <p className="font-semibold">Central Telefónica</p>
              <p>(+01) 739 7588</p>
              <p>Calle Elias Aguirre 180 – Miraflores</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-purple-600 text-2xl mr-3" />
            <p>apexcadperu@gmail.com</p>
          </div>
          <div className="flex items-center">
            <FaWhatsapp className="text-green-600 text-2xl mr-3" />
            <div>
              <p className="font-semibold">Whatsapp</p>
              <p>(511) 903 404 491</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <iframe
            className="w-full h-64 md:h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5378902097978!2d-77.04150292405035!3d-12.075283642434208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f203138923%3A0x61329f2a014117b2!2sJir%C3%B3n%20Gral.%20Cordova%201021%2C%20Jes%C3%BAs%20Mar%C3%ADa%2015072!5e0!3m2!1ses-419!2spe!4v1740973123501!5m2!1ses-419!2spe"
          ></iframe>
        </div>
      </div>  
    </div>
    <Footer />  
</>
  )
}

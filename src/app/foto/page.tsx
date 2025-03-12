import Image from 'next/image'
import React from 'react'
import { Navbar } from '../Componets/Navbar'
import { Footer } from '../Componets/Footer';
import Foto from './foto';

export default function Fotogrametria() {
    const servicios = [
        {
            titulo: "Introducción a la Fotogrametría Digital y RPAS",
            imagen: "/foto1.jpg", // Reemplaza con la imagen correcta
            items: [
                "Concepto de fotogrametría y su evolución.",
                "Diferencias entre fotogrametría clásica y digital.",
                "Tipos de drones y sensores utilizados en fotogrametría.",
                "Regulación y normativas para el uso de drones en ingeniería.",
            ],
        },
        {
            titulo: "Principios de Captura de Datos con RPAS",
            imagen: "/foto2.png", // Reemplaza con la imagen correcta
            items: [
                "Planificación de vuelos fotogramétricos.",
                "Parámetros clave: altura, solape, resolución GSD.",
                "GTipos de cámaras y sensores: RGB, multiespectrales, térmicas y LiDAR.",
            ]
        },
        {
            titulo: "Procesamiento de Imágenes y Generación de Modelos 3D",
            imagen: "/bim3.jpg", // Reemplaza con la imagen correcta
            items: [
                "Software de procesamiento fotogramétrico (Pix4D, Agisoft Metashape, RealityCapture).",
                "Generación de ortomosaicos y modelos digitales de elevación (MDE, MDT).",
                "Nube de puntos y mallas 3D.",

            ]
        },
        {
            titulo: "Aplicaciones en Ingeniería Civil",
            imagen: "/foto3.jpg", // Reemplaza con la imagen correcta
            items: [
                "Levantamientos topográficos y generación de planos.",
                "Monitoreo y control de obras.",
                "Modelado de terrenos y análisis de volúmenes de movimiento de tierra.",
                "Inspección de infraestructuras (puentes, carreteras, presas)",
                "Integración con BIM y SIG."
            ]
        },
        {
            titulo: "Casos de Estudio y Tendencias Futuras",
            imagen: "/foto4.jpeg", // Reemplaza con la imagen correcta
            items: [
                "Casos de Estudio y Tendencias Futuras.",
                "Avances tecnológicos: LiDAR en drones, inteligencia artificial en fotogrametría.",
                "Retos y oportunidades en la implementación de RPAS en la industria.",
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
                        src="/fotogre1.jpg"
                        alt="Nosotros"
                        layout="fill"
                        objectFit="cover"
                        className="absolute"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                        <h2 className="text-3xl md:text-5xl font-extrabold">FOTOGRAMETRÍA DIGITAL EN RPAS Y SU USO EN INGENIERÍA CIVIL</h2>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Texto */}
                        <div>
                            <h3 className="text-4xl font-extrabold text-[#006393]">
                                <span className="text-[#0C0C0C] text-[30px] md:text-[36px]">CLASE MAGISTRAL: FOTOGRAMETRÍA DIGITAL EN <span className='text-[#006393]'>RPAS</span> Y SU USO EN INGENIERÍA CIVIL</span>
                            </h3>
                            <div className="mt-6 space-y-4">
                                <div>
                                    <p className="text-2l text-[#535353] flex">📍 Duración: 2 - 3 horas</p>
                                    <p className="text-2l text-[#535353] flex">📍 Dirigido a: Ingenieros civiles, topógrafos, arquitectos, estudiantes y profesionales interesados en tecnología RPAS.</p>
                                    <p className='text-2l text-[#535353] flex'>📍 Objetivo: Entender los principios de la fotogrametría digital con drones, su flujo de trabajo y aplicaciones en proyectos de ingeniería civil.</p>
                                </div>
                            </div>
                        </div>

                        {/* Imagen */}
                        <div className="relative h-[520px] w-full">
                            <Image
                                src="/fotogre2.jpg"
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
                            Fotogrametría con Drones para Ingeniería Civil: Captura, Procesamiento y Aplicaciones
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
                                        <ul className="mt-4 space-y-2">
                                            {servicio.items.map((item, i) => (
                                                <li key={i} className="flex items-start text-gray-700">
                                                    <span className='text-green-500'>✔</span>
                                                    <span className="text-sm ml-2">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Foto />
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
                                <p>En <span className='text-[#FFDF00]'>APEX CAD BIM</span>, estamos comprometidos con la innovación y el uso de tecnologías avanzadas para optimizar procesos en ingeniería civil. La fotogrametría digital con drones (RPAS) ha revolucionado la captura y procesamiento de datos espaciales, permitiendo obtener información precisa y detallada de terrenos, estructuras e infraestructuras con rapidez y eficiencia.</p>
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

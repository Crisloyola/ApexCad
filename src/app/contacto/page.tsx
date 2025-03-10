"use client";
import React, { useState } from "react";
import { Navbar } from "../Componets/Navbar";
import { Footer } from "../Componets/Footer";

export default function Contacto() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center px-6 py-12 mt-12">
        <h2 className="text-4xl font-bold text-[#006393]">Contáctanos</h2>
        <p className="text-gray-600 text-lg mb-8">Estamos aquí para ayudarte</p>
        
        <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8">
          {/* Información de contacto */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 text-lg">
              <span className="text-cyan-600">📞</span>
              <p className="text-gray-800 font-medium">(+01) 739 7588</p>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-cyan-600">📧</span>
              <p className="text-gray-800 font-medium">apexcadperu@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <span className="text-cyan-600">📍</span>
              <p className="text-gray-800 font-medium">Calle Elias Aguirre 180 – Miraflores</p>
            </div>
            <iframe
              className="w-full h-60 rounded-lg shadow-lg"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5378902097978!2d-77.04150292405035!3d-12.075283642434208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f203138923%3A0x61329f2a014117b2!2sJir%C3%B3n%20Gral.%20Cordova%201021%2C%20Jes%C3%BAs%20Mar%C3%ADa%2015072!5e0!3m2!1ses-419!2spe!4v1740973123501!5m2!1ses-419!2spe"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          
          {/* Formulario */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h3 className="text-xl font-semibold text-[#006393]">¡Ponte en contacto con nosotros!</h3>
            <p className="text-gray-600 text-sm mb-4">Somos el centro de enseñanzas mejor valorado en Perú y queremos hablar contigo.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-3">
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} className="w-1/2 p-3 border rounded" required />
                <input type="text" name="phone" placeholder="Celular" onChange={handleChange} className="w-1/2 p-3 border rounded" required />
              </div>
              <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} className="w-full p-3 border rounded" required />
              <textarea name="message" placeholder="Mensaje" onChange={handleChange} className="w-full p-3 border rounded h-24" required></textarea>
              <button type="submit" className="w-full bg-[#0C0C0C] text-white py-3 rounded font-bold hover:bg-gray-800 transition">Enviar</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

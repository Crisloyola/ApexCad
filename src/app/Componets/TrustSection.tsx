'use client';

import Image from 'next/image';

export default function TrustSection() {
  return (
    <div className="max-w-6xl mx-auto p-6  m-8 flex flex-col lg:flex-row items-center gap-6 bg-white">
      <div className="w-full lg:w-2/3">
        <h2 className="text-[24px] font-bold text-[#0C0C0C] md:text-left text-center">
          Confianza que <span className="text-[#006393]">inspira</span>
        </h2>
        <p className="text-gray-600 text-[16px] md:text-[16px] text-center md:text-left mt-2 w-[100%] md:w-[80%]">
          Nuestros clientes avalan nuestra dedicación y calidad. Cada proyecto y capacitación está diseñado para 
          superar expectativas y generar valor real.
        </p>

        {/* Botones */}
        <div className=" mt-4 flex gap-3 justify-center md:justify-start">
          <button className="bg-yellow-400 text-[16px] hover:bg-yellow-500 text-[#0C0C0C] font-semibold px-4 py-2 rounded-lg shadow-md">
            VER MÁS
          </button>
          <button className="bg-[#006393] hover:bg-[#004b73] text-[16px] text-white font-semibold px-4 py-2 rounded-lg shadow-md">
            ¡CONTÁCTANOS!
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex justify-center">
        <Image 
          src="/uni.jpg" 
          alt="Confianza que inspira"
          width={280}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
    </div>
  );
}

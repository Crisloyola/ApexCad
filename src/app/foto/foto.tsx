"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Foto() {
  const imagenes = [
    "/fotogre1.jpg",
    "/fotogre2.jpg",
    "/fotogre3.jpg",
    "/fotogre4.jpg",
    "/fotogre5.jpg",
    "/fotogre6.jpg",
    "/fotogre7.jpg",
  ];

  return (
    <div className="center text-center text-white p-6 rounded-lg gap-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg"
      >
        {imagenes.map((imagen, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src={imagen}
                alt={`Imagen ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

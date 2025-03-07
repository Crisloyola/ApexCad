"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Smp() {
  const imagenes = [
    "/s2.jpg",
    "/s3.jpg",
    "/s4.jpeg",
    "/s5.jpeg",
    "/s6.jpg",
    "/s7.jpeg",
    "/s8.jpg",
    "/s9.jpeg",
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

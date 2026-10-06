"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Everything You Need,",
    highlight: "All in One Place.",
    description:
      "Discover amazing products at the best prices. Shop smarter with ShopEase.",
    image: '/Assests/hero-section/carouselimage/headphone.jpeg',
    button: "Shop Now",
  },
  {
    id: 2,
    title: "Upgrade Your",
    highlight: "Everyday Lifestyle.",
    description:
      "Explore trending electronics, fashion and more with exclusive deals.",
   image: '/Assests/hero-section/carouselimage/images-2.jpeg',
    button: "Explore Products",
  },
  {
    id: 3,
    title: "Big Deals.",
    highlight: "Bigger Savings.",
    description:
      "Don't miss our latest offers and limited-time discounts.",
    image: '/Assests/hero-section/carouselimage/images-3.jpg',
    button: "View Deals",
  },
  {
    id: 3,
    title: "Big Deals.",
    highlight: "Bigger Savings.",
    description:
      "Don't miss our latest offers and limited-time discounts.",
    image:'/Assests/hero-section/carouselimage/image-5.jpg',
    button: "View Deals",
  },
];

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
     
      pagination={{ clickable: false }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      loop={true}
    >
      {slides.map((slide) => (
  <SwiperSlide key={slide.id}>
    <div className=" flex items-center h-[400px] mt-9  justify-center overflow-hidden ">
      <Image
        src={slide.image}
        alt={slide.title}
  width={1200}
  height={600}
     
      />
      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 max-w-7xl mx-auto w-full px-8 flex flex-col justify-center">
        {/* Text content */}
      </div>
    </div>
  </SwiperSlide>
))}
  
    </Swiper>
  );
}



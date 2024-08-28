"use client";
import RectangleIcon from "@/assets/icons/decoration/about-rectangle.svg";
import { slides } from "@/constans/reviews";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function ReviewsSection() {
  return (
    <section className="pb-[60px]">
      <div className="my-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            renderBullet: (_, className) => {
              return `
                <span class="${className} "></span>
              `;
            },
          }}
          modules={[Pagination]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 relative">
                <RectangleIcon className="absolute top-0 right-0 " />
                <RectangleIcon className="absolute bottom-0 right-0 rotate-90" />
                <div className="flex mb-3 gap-2">
                  <Image
                    src={slide.photo}
                    alt={slide.name}
                    width={56}
                    height={56}
                  />
                  <div className="flex flex-col">
                    <h3 className="text-base font-exo2">{slide.name}</h3>
                    <p className="text-sm">{slide.job}</p>
                  </div>
                </div>
                <p className="text-sm">{slide.text}</p>
                <RectangleIcon className="absolute top-0 left-0 rotate-[270deg]" />
                <RectangleIcon className="absolute bottom-0 left-0 rotate-180" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination  flex justify-center mt-[60px]"></div>
      </div>
    </section>
  );
}

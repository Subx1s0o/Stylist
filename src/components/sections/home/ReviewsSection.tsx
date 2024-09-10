"use client";
import Icon from "@/components/features/Icon";
import { slides } from "@/constans/reviews";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ReviewsSection() {
  const t = useTranslations("Reviews");

  return (
    <section className="pb-section">
      <div className="my-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            renderBullet: (_, className) => `
                <span class="${className}"></span>
              `,
          }}
          modules={[Pagination]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 relative h-full min-h-[263px] flex flex-col">
                <Icon
                  id="icon-about-rectangle"
                  width={15}
                  height={15}
                  className="absolute top-0 right-0"
                />
                <Icon
                  id="icon-about-rectangle"
                  width={15}
                  height={15}
                  className="absolute bottom-0 right-0 rotate-90"
                />
                <div className="flex mb-3 gap-2">
                  <Image
                    src={slide.photo}
                    alt={t(`${slide.translateCode}.name`)}
                    width={56}
                    height={56}
                  />
                  <div className="flex flex-col">
                    <h3 className="text-base font-exo2">
                      {t(`${slide.translateCode}.name`)}
                    </h3>
                    <p className="text-sm">
                      {t(`${slide.translateCode}.employment`)}
                    </p>
                  </div>
                </div>
                <p className="text-sm">{t(`${slide.translateCode}.review`)}</p>
                <Icon
                  id="icon-about-rectangle"
                  width={15}
                  height={15}
                  className="absolute top-0 left-0 rotate-[270deg]"
                />
                <Icon
                  id="icon-about-rectangle"
                  width={15}
                  height={15}
                  className="absolute bottom-0 left-0 rotate-180"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination flex justify-center mt-section"></div>
      </div>
    </section>
  );
}

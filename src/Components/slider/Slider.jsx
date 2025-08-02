import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { SliderProducts } from "../../data/products";
import {
  FreeMode,
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

export default function App() {
  return (
    <div className="text-center mb-20 w-full slider_container">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: -30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerGroup={1}
        loop={true}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Autoplay, Pagination, Navigation, EffectCoverflow]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1.5, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="mySwiper w-11/12 md:w-10/12 lg:w-9/12"
      >
        {SliderProducts.map((slide, index) => (
          <SwiperSlide key={index} className="SlideBox rounded-lg">
            <div className="bg--white flex flex-col sm:flex-row w-full py-5 px-3 h-auto sm:h-48 rounded-lg">
              <div className="LeftSlide flex flex-col items-start justify-between mb-4 sm:mb-0 sm:mr-4">
                <div className="flex flex-col items-start">
                  <span className="name poppins-semibold text-xl sm:text-2xl text--black">
                    {slide.name}
                  </span>
                  <span className="detail text-xs poppins-light mt-1 text--black">
                    {slide.detail}
                  </span>
                </div>
                <span className="price text-2xl sm:text-3xl text--black poppins-bold">
                  <b>{slide.price} $</b>
                </span>
                <span className="ShopBtn text-xs text--black border--black-1 px-2 py-0.5 rounded-xl">
                  Shop Now
                </span>
              </div>
              <div className="RightSlide flex justify-center sm:justify-end items-center w-full sm:w-auto">
                <img src={slide.img} alt="" className="SlideImg max-h-32 sm:max-h-40" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

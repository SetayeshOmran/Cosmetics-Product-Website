import React from "react";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TestSlider = () => {
  return (
    <div className="px-4">
      <Swiper
        spaceBetween={20}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {TestimonialsData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="SlideReview bg-white rounded-xl shadow-lg p-4 h-full flex flex-col justify-between">
              <div className="slideComment text-sm text-gray-700">
                {data.comment}
              </div>
              <div className="NameSec border-t border-gray-300 mt-5 pt-3 flex items-center">
                <img
                  className="w-10 h-10 object-cover rounded-full shadow-md me-4"
                  src={data.image}
                  alt={data.name}
                />
                <div className="slideName font-medium text-gray-800">{data.name}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestSlider;

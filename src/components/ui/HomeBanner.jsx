// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper modules
import { Navigation, Autoplay } from "swiper/modules";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function HomeBanner() {
  return (
    <div className="relative">
      {/* Custom navigation buttons */}
      <button className="swiper-button-prev-custom absolute left-0 z-10">
        <MdKeyboardArrowLeft />
      </button>
      <button className="swiper-button-next-custom absolute right-0 z-10">
        <MdKeyboardArrowRight />
      </button>

      <Swiper
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <img className="w-full object-cover" src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const images = [
  "/images/banner1.webp",
  "/images/banner2.webp",
  "/images/banner3.webp",
  "/images/banner4.webp",
];

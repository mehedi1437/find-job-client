// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import carouselImg1 from "../assets/images/carousel-1.jpg";
import carouselImg2 from "../assets/images/carousel-2.jpg";
import carouselImg3 from "../assets/images/carousel-3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";


export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper " 
      >
        <SwiperSlide >
          <Slide
            image={carouselImg2}
            text={"Get Your Web Development Project in minutes"}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={carouselImg1}
            text={"Get Your Graphic Design Project in minutes"}
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={carouselImg3}
            text={"Start Your Digital MArketing Campaigns Up n Running"}
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

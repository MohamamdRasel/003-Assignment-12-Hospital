import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/Images/slide1.jpg";
import slide2 from "../../../assets/Images/slide2.jpg";
import slide3 from "../../../assets/Images/slide3.jpg";
import slide4 from "../../../assets/Images/slide4.jpg";
import slide5 from "../../../assets/Images/slide5.jpg";
import slide6 from "../../../assets/Images/slide6.jpg";
import slide7 from "../../../assets/Images/slide7.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 24/7"}
        heading={"Online Serial"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl uppercase -mt-16 text-white">Modern Beds</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl uppercase -mt-16 text-white">Modern Beds</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl uppercase -mt-16 text-white">Modern Beds</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl uppercase -mt-16 text-white">Modern Beds</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase -mt-16 text-white">Modern Beds</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="" />
          <h3 className="text-4xl uppercase -mt-16 text-white">Modern Beds</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} alt="" />
          <h3 className="text-4xl uppercase -mt-16 text-white">Modern Beds</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

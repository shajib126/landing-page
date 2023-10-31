import "./Slider.css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";
const tags = [
  {
    title: "Where Innovation Meets Execution",
    image:
      "https://img.freepik.com/free-photo/business-colleagues-discussing-together-office-night-teamwork-partnership_482257-32811.jpg",
  },
  {
    title: "Code Crafters, Dream Weavers",
    image:
      "https://img.freepik.com/premium-photo/mixed-team-software-engineers-brainstorming-ideas-new-code-library-front-computer-screens-compiling-algorithms-diverse-app-developers-collaborating-group-project-it-agency-office_482257-33536.jpg",
  },
  {
    title: "Unlocking Digital Possibilities",
    image:
      "https://img.freepik.com/premium-photo/office-routine-back-view-young-employees-working-computers-while-sitting-desk_386167-2154.jpg",
  },
  {
    title: "Solutions Powered by Code",
    image:
      "https://www.pixelcrayons.com/blog/wp-content/uploads/2023/01/30-Top-Software-Ideas-for-Startups-SMEs-for-the-Year-2023.png",
  },
  {
    title: "Software Excellence, Beyond Imagination",
    image:
      "https://t3.ftcdn.net/jpg/03/34/92/46/360_F_334924600_Qtl5awh2cniAh0J1ofm6t37kcAl0JSjZ.jpg",
  },
];

const Slider = () => {
  return (
    <div id="home" className="slider">
      <Swiper
        loop={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
      >
        {tags.map((tag, i) => (
          <SwiperSlide key={i}>
            <motion.div
                initial={{y:-400}}
              animate={{y:20}}
              transition={{ type: "spring", stiffness: 100 }}
              className="slider-card"
            >
              <motion.h1 >{tag.title}</motion.h1>
              <img src={tag.image} alt="" />
            </motion.div>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="swiper-button-next slider-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

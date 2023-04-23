import React from "react";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={0}
      autoplay={{ delay: 4000 }}
    >
      <SwiperSlide>
        <div className="relative h-screen bg-black">
          <img
            src="https://images.pexels.com/photos/7245333/pexels-photo-7245333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Slide 1"
            className="w-full h-full object-cover inset-0 opacity-50"
          />
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-left">
            <div className=" ml-10  mb-5">
              <motion.h1
                animate={{ x: 0 }}
                initial={{ x: "100vw" }}
                transition={{ duration: 2 }}
                exit={{ x: "-100vw" }}
                key="myMotion"
                className="text-3xl md:text-6xl ml-3 whitespace-nowrap font-bold text-white p-2 md:p-6"
              >
                Tạo nền móng <br />
                cho tương lai
              </motion.h1>
              <motion.h3
                animate={{ x: 0 }}
                initial={{ x: "100vw" }}
                transition={{ duration: 3 }}
                exit={{ x: "-100vw" }}
                key="myMotion"
                className="text-xl md:text-4xl ml-6 md:ml-10 underline text-white"
              >
                Đối tác đáng tin cậy từ năm 1998{" "}
              </motion.h3>
            </div>
            <div className="flex flex-col md:flex-row ml-20  md:flex mb-20 whitespace-nowrap pb-10 items-center md:items-start ">
              <motion.button
                animate={{ x: 0 }}
                initial={{ x: "100vw" }}
                transition={{ duration: 4 }}
                exit={{ x: "-100vw" }}
                key="myMotion"
                title="product"
                className="text-primary md:mr-4 mb-2 md:mb-0 p-1 md:p-2 border border-black rounded-lg bg-orange-600 hover:text-black"
              >
                Xem sản phẩm
              </motion.button>
              <motion.button
                animate={{ x: 0 }}
                initial={{ x: "100vw" }}
                transition={{ duration: 5 }}
                exit={{ x: "-100vw" }}
                key="myMotion"
                title="contact"
                className="text-white p-1 md:p-2 active:scale-90 border border-white rounded-lg bg-transparent bg-opacity-80 hover:bg-orange-600 md:ml-4"
              >
                Liên hệ
              </motion.button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-screen bg-black">
          <img
            src="https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-full object-cover inset-0 opacity-50"
          />
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-left">
            <div className=" ml-10  mb-5">
              <motion.h1
                animate={{ x: 0 }}
                initial={{ x: "100vw" }}
                transition={{ duration: 2 }}
                exit={{ x: "-100vw" }}
                key="myMotion"
                className="text-3xl md:text-6xl ml-3 whitespace-normal font-bold text-white p-2 md:p-6"
              >
                Mang đến tương lai chắc chắn <br /> với chất lượng thép hoàn hảo
              </motion.h1>
              <motion.h3
                animate={{ x: 0 }}
                initial={{ x: "100vw" }}
                transition={{ duration: 3 }}
                exit={{ x: "-100vw" }}
                key="myMotion"
                className="text-xl md:text-4xl ml-6 md:ml-10 underline text-white"
              >
                Đối tác đáng tin cậy từ năm 1998{" "}
              </motion.h3>
            </div>
            <div className="flex flex-col md:flex-row ml-20  md:flex mb-20 whitespace-nowrap pb-10 items-center md:items-start ">
              <motion.button
                animate={{ x: 0 }}
                initial={{ x: "100vw" }}
                transition={{ duration: 4 }}
                exit={{ x: "-100vw" }}
                key="myMotion"
                title="product"
                className="text-primary md:mr-4 mb-2 md:mb-0 p-1 md:p-2 border border-black rounded-lg bg-orange-600 hover:text-black"
              >
                Xem sản phẩm
              </motion.button>
              <motion.button
                animate={{ x: 0 }}
                initial={{ x: "100vw" }}
                transition={{ duration: 5 }}
                exit={{ x: "-100vw" }}
                key="myMotion"
                title="contact"
                className="text-white p-1 md:p-2 active:scale-90 border border-white rounded-lg bg-transparent bg-opacity-80 hover:bg-orange-600 md:ml-4"
              >
                Liên hệ
              </motion.button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

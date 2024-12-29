import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../../../../public/home/slide1.jpg"
import slide2 from "../../../../public/home/slide2.jpg"
import slide3 from "../../../../public/home/slide3.jpg"
import slide4 from "../../../../public/home/slide4.jpg"
import slide5 from "../../../../public/home/slide5.jpg"

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const CategorySwiper = () => {

  

  return (
   <div className='min-h-[400px] w-full md:w-10/12 lg:w-8/12 mx-auto  my-8'>
    <div className='my-8 flex flex-col items-center justify-center gap-4'>
      <p className='text-[#D99904]'>---From 11:00am to 10:00pm---</p>
      <h1 className='text-3xl border-t-2 border-b-2 py-2 border-[#E8E8E8]'>ORDER ONLINE</h1>
    </div>
     <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Link to="/category/1" className="relative block  ">
            <img src={slide1} alt="Category 1" className="" />
            <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black bg-opacity-20 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
              <p className='text-xl text-[#FFFFFF] navbar_logo_text'>SALADS</p>
            </div>
          </Link>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Link to="/category/2" className="relative block  ">
            <img src={slide2} alt="Category 2" className="" />
            <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black bg-opacity-20 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className='text-xl text-[#FFFFFF] navbar_logo_text'>SALADS</p>
             
            </div>
          </Link>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Link to="/category/3" className="relative block  ">
            <img src={slide3} alt="Category 3" className="" />
            <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black bg-opacity-20 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className='text-xl text-[#FFFFFF] navbar_logo_text'>Soups</p>
            </div>
          </Link>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <Link to="/category/4" className="relative block  ">
            <img src={slide4} alt="Category 4" className="" />
            <div className="absolute bottom-0 left-0 right-0 inset-0 flex justify-center items-end bg-black bg-opacity-20 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className='text-xl text-[#FFFFFF] navbar_logo_text'>pizzas</p>
            </div>
          </Link>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <Link to="/category/5" className="relative block  ">
            <img src={slide5} alt="Category 5" className="" />
            <div className="absolute bottom-0 left-0 inset-0 flex justify-center items-end right-0  bg-black bg-opacity-20 text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className='text-xl text-[#FFFFFF] navbar_logo_text'>desserts</p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
   </div>
  );
};

export default CategorySwiper;

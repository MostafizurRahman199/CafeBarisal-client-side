import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeading from "../../SectionHeading/SectionHeading";
import quoteLeft from "../../../../public/home/quote-left.png";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";


const testimonials = [
  {
    text: "The service here is absolutely amazing! Highly recommend it to everyone who loves great food and warm ambiance.",
    name: "Jane Doe",
    rating: 4,
  },
  {
    text: "A wonderful dining experience. The staff was friendly, and the dishes were exceptional. Will visit again!",
    name: "John Smith",
    rating: 5,
  },
  {
    text: "Delicious meals and cozy vibes. The desserts were the highlight of my evening!",
    name: "Emily Davis",
    rating: 4.5,
  },
];

const TestimonialSlider = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex justify-center mt-4">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-800 text-4xl"><FaStar /></span>
          ))}
        {halfStars === 1 && <span className="text-yellow-800 text-4xl"><FaRegStarHalfStroke /></span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-gray-300 text-4xl"><FaRegStar /></span>
          ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <SectionHeading
        title1={"--- What Our Clients Say ---"}
        title2={"Testimonials"}
      ></SectionHeading>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Keeps autoplay running after user interaction
        }}
        className="mt-8"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center p-6 h-[400px]  gap-4">
              <span>{renderStars(testimonial.rating)}</span>
              <img src={quoteLeft} className="w-16 h-16" alt="Quote" />
              <p className="text-gray-600 italic">{`"${testimonial.text}"`}</p>
              <h4 className="text-4xl new_heading_font font-semibold text-yellow-600 mt-4">
                {testimonial.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;

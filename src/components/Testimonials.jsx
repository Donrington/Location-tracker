import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css'; // Ensure you import Swiper styles
import { testimonials } from "../assets/data";

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters for your testimonials slider
    const params = {
      slidesPerView: 1, // Default view
      spaceBetween: 30, // Space between slides
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
      // Example of adding breakpoints for responsive design
      breakpoints: {
        640: {
          slidesPerView: 2, // Show 2 slides per view when the viewport is 640 pixels or larger
        },
        768: {
          slidesPerView: 3, // Show 3 slides per view when the viewport is 768 pixels or larger
        },
      },
    };

    // Assign parameters to swiper element
    Object.assign(swiperRef.current, params);

    // Initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <section className="testimonial-section py-5" id="clients">
      <div className="container">
        <div className="mb-5 mt-5">
          <h2 className="section-title text-center mb-5">
            What Our Clients Say
          </h2>
          <p className="text-center txt pb-4">
            Hear from our satisfied clients who have experienced the reliability
            and efficiency of our GPS tracking solutions firsthand.
          </p>
        </div>
        <swiper-container className="swiper mySwiper" init="false" ref={swiperRef}>
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <swiper-slide className="swiper-slide" key={index}>
                <div className="testimonial">
                  <div className="client-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                  <h3 className="client-name">{testimonial.name}</h3>
                </div>
              </swiper-slide>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </swiper-container>
      </div>
    </section>
  );
};

export default Testimonials;

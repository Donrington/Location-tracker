import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import { testimonials } from "../assets/data";

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperRef.current, params);

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
        <swiper-container
          className="swiper mySwiper"
          init="false"
          ref={swiperRef}
        >
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

import { testimonials } from "../assets/data";

const Testimonials = () => {
  return (
    <section className="testimonial-section py-5" id="clients">
      <div className="container">
        <div className="mb-5 mt-5">
          <h2 className="section-title text-center mb-5">
            What Our Clients Say
          </h2>
          <p className="text-center txt pb-4">
            Hear from our satisfied clients who have experienced the reliability
            and efficiency of our GPS tracking solutions firsthand
          </p>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div className="swiper-slide" key={index}>
                <div className="testimonial">
                  <div className="client-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                  <h3 className="client-name">{testimonial.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-5 pt-5"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

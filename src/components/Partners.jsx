import { partners } from "../assets/data";

const Partners = () => {
  return (
    <section className="partner-logos mb-5 pb-5" id="partners">
      <div className="container pl-5 pr-5">
        <div className="mb-5 mt-5">
          <h2 className="text-center section-title">Partners</h2>
        </div>

        <div className="swiper-container">
          <div className="swiper-wrapper">
            {partners.map((partner, index) => (
              <div className="swiper-slide" key={index}>
                <img src={partner.logo} alt={partner.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

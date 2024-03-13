import React from 'react';
import { partners } from "../assets/data";

const Partners = () => {
  return (
    <section className="partner-logos mb-5 pb-5" id="partners">
      <div className="container">
        <div className="mb-5 mt-5">
          <h2 className="text-center section-title">Partners</h2>
        </div>

        <div className="partners-wrapper d-flex flex-wrap justify-content-center align-items-center">
          {partners.map((partner, index) => (
            <div className="partner-item m-2" key={index}>
              <img src={partner.logo} alt={partner.alt} style={{ maxWidth: "150px", height: "auto" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

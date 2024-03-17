import React, { useEffect } from "react";
// import { animateValue } from "../assets/scripts/benefit.js";
import { benefits } from "../assets/data.js";

const Benefits = () => {
  useEffect(() => {
    benefits.forEach((benefit) => {
      animateValue(benefit.id, 0, parseInt(benefit.percentage, 10), 2000);
    });
  }, [benefits]);

  if (!benefits) return <div>Loading...</div>;

  return (
    <section className="benefits-section" id="benefit">
      <div className="container">
        <h2 className="section-title text-center">
          Benefits of GPS Fleet Tracking
        </h2>
        <div className="row">
          {benefits &&
            benefits.map((benefit, index) => (
              <div className="col-md-3 text-center" key={index}>
                <div className="benefit">
                  <div className="percentage" id={benefit.id}>
                    {/* Initial rendering, might be replaced by animation */}
                    {benefit.percentage}
                  </div>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

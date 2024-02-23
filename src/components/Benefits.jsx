import { benefits } from "../assets/data";

const Benefits = () => {
  return (
    <section className="benefits-section" id="benefit">
      <div className="container">
        <h2 className="section-title text-center">
          Benefits of GPS Fleet Tracking
        </h2>
        <div className="row">
          {benefits.map((benefit, index) => (
            <div className="col-md-3 text-center" key={index}>
              <div className="benefit">
                <div className="percentage" id={benefit.id}>
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

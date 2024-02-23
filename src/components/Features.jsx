import { features } from "../assets/data";

const Features = () => {
  return (
    <section className="features-section py-5 text-center" id="features">
      <div className="container">
        <div className="mb-5 mt-5">
          <h2 className="section-title">FEATURES</h2>
          <p className="txt">
            Explore the wide range of capabilities our GPS tracking services
            offer to ensure your peace of mind.
          </p>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <i
                className={`fas ${feature.icon} feature-icon feature-item`}
              ></i>
              <h3 className="feature-item-title">{feature.title}</h3>
              <p className="feature-item-description">{feature.description}</p>
              <button className="btn btn-outline-danger feature-read-more">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

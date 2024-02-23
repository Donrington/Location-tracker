import { products } from "../assets/data";

const Products = () => {
  return (
    <section className="testimonial-section pt-5 pb-5" id="products">
      <div>
        <div className="mb-5 mt-5">
          <h2 className="section-title text-center">OUR PRODUCTS</h2>
          <p className="text-center txt pb-4">
            Our innovative products are designed to provide comprehensive
            tracking solutions for individuals and businesses alike.
          </p>
        </div>

        <div className="features-container my-5 mx-5">
          {products.map((product, index) => (
            <div className="feature-box" key={index}>
              <div className="icon-container">
                <i className={`fas ${product.icon} feature-icon`}></i>
                <h5 className="feature-title">{product.title}</h5>
              </div>
              <div className="content-container">
                <p className="feature-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

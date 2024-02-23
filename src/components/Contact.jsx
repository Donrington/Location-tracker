const Contact = () => {
  return (
    <section className="contact-section py-4" id="contact">
      <div className="container">
        <div className="mb-5 mt-5">
          <h2 className="text-center mb-5 section-title">Contact</h2>
        </div>
        <div className="row">
          <div className="contact-info col-md-4 mb-4">
            <p>
              <i className="fas fa-phone-alt me-2"></i>
              <strong>Phone:</strong> +234090480229
            </p>
          </div>
          <div className="contact-info col-md-4 mb-4">
            <p>
              <i className="fas fa-envelope me-2"></i>
              <strong>Email:</strong> info@mail.com
            </p>
          </div>
          <div className="contact-info col-md-4 mb-4">
            <p>
              <i className="fas fa-map-marker-alt me-2"></i>
              <strong>Address:</strong> Lekki Phase One, Lagos, Nigeria
            </p>
          </div>
          <div className="col-12 mb-4">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.498246616276!2d3.4504166557681026!3d6.45019813662744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da3bd44b%3A0x47331fb41adc9d28!2sLekki%20Phase%201%2C%20Lekki%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1708218232094!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-12">
            <form id="contactForm" noValidate>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name*"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name*"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Phone No*"
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <select className="form-select" id="country" required>
                    <option value="">Country*</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="australia">Australia</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <select className="form-select" id="subject" required>
                    <option value="">Select Subject*</option>
                    <option value="general_inquiry">General Inquiry</option>
                    <option value="technical_support">Technical Support</option>
                    <option value="sales_inquiry">Sales Inquiry</option>
                    <option value="product_feedback">Product Feedback</option>
                    <option value="partnership_opportunity">
                      Partnership Opportunity
                    </option>
                  </select>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

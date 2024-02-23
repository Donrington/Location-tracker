const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center text-md-left">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p>
              <a href="your-privacy-policy-link" className="footer-link">
                Privacy Policy
              </a>
              |
              <a href="your-social-media-policy-link" className="footer-link">
                Social Media Policy
              </a>
              |
              <a href="your-terms-and-conditions-link" className="footer-link">
                Terms & Conditions
              </a>
            </p>

            <p>
              Copyright &copy; 2024
              <img
                src="assets/img/logo/circle2.png"
                alt="cybersage logo"
                id="iconfooter"
              />
              <b>Cybersage.</b> <span>All Rights Reserved With GPS</span>
            </p>
          </div>
          <div className="social-icons">
            <a href="" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="social-icon">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

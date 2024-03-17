import "../login.css";

const Socials = () => {
  return (
    <div className="text-center mb-3">
      <ul className="social-network social-circle">
        <li>
          <a href="#" className="icoFacebook" title="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#" className="icoTwitter" title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" className="icoGoogle" title="Google +">
            <i className="fab fa-google-plus"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

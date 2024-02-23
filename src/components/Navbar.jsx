const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          GPS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#features">
              Features
            </a>
            <a className="nav-link" href="#products">
              Products
            </a>
            <a className="nav-link" href="#benefit">
              Benefits
            </a>
            <a className="nav-link" href="#download">
              Download
            </a>
            <a className="nav-link" href="#clients">
              Clients
            </a>
            <a className="nav-link" href="#partners">
              Partners
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>

            <a className="nav-link login-link" href="#login">
              Login
            </a>
            <a className="nav-link signup-link" href="#signup">
              Signup
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

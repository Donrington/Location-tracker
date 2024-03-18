import "../nav.css";

const DashboardNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          GPS Tracker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/dashboard"
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/location-history">
                Location History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user-profile">
                User Profile
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-dark" id="theme-toggle">
              <i className="fas fa-moon"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;

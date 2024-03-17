import "../nav.css";
import DashboardNav from "./DashboardNav";

const Dashboard = () => {
  return (
    <div>
      <DashboardNav />
      <div className="container-fluid">
        <h2 className="mt-4 mb-4">
          Welcome, <span id="username">Username</span>
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-secondary text-white mb-3">
              <div className="card-header">Total Locations Tracked</div>
              <div className="card-body the">
                <h5 className="card-title">123</h5>
                <p className="card-text">
                  Tracking locations across the globe.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-danger mb-3">
              <div className="card-header">Active Tracking</div>
              <div className="card-body">
                <h5 className="card-title">Yes</h5>
                <p className="card-text">
                  Your tracking is currently active and monitoring.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-dark mb-3">
              <div className="card-header">Last Location</div>
              <div className="card-body">
                <h5 className="card-title">New York, USA</h5>
                <p className="card-text">
                  The most recent location tracked by your device.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="map-container my-4">
          <h2 className="pb-4">Current Location</h2>
          <div
            className="map-placeholder bg-secondary"
            id="liveMap"
            style={{ height: "300px" }}
          >
            Map API Integration Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

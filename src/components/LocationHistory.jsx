import DashboardNav from "./DashboardNav";

const LocationHistory = () => {
  return (
    <div>
      <DashboardNav />
      <div className="container mt-5">
        <h2 className="mb-4">Location History</h2>
        <div className="table-responsive">
          <table
            className="table location-history display dt-datetime"
            id="myTable"
          >
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Location</th>
                <th scope="col">Device</th>
                <th scope="col">Time</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-03-12</td>
                <td>New York, USA</td>
                <td>iPhone 12</td>
                <td>14:35</td>
                <td>
                  <button className="btn btn-sm btn-outline-dark">View</button>
                  <button className="btn btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>2024-04-12</td>
                <td>Texas, USA</td>
                <td>iPhone 12</td>
                <td>09:55</td>
                <td>
                  <button className="btn btn-sm btn-outline-dark">View</button>
                  <button className="btn btn-sm btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LocationHistory;

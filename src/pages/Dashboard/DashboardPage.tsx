import "./dashboard.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard Overview</h1>

      <div className="dashboard-grid">
        <div className="card">
          <h2>Total Parcels Today</h2>
          <p className="metric">128</p>
        </div>

        <div className="card">
          <h2>Active Deliveries</h2>
          <p className="metric">42</p>
        </div>

        <div className="card">
          <h2>System Health</h2>
          <p className="metric status-ok">Healthy</p>
        </div>

        <div className="card">
          <h2>Live Events</h2>
          <p className="metric">312</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Daily Parcel Volume</h2>
        <div className="chart-placeholder">Chart goes here</div>
      </div>

      <div className="dashboard-section">
        <h2>Delivery Success Rate</h2>
        <div className="chart-placeholder">Chart goes here</div>
      </div>
    </div>
  );
};

export default DashboardPage;
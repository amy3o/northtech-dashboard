import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{
      width: "220px",
      background: "#1e1e2f",
      color: "white",
      padding: "20px"
    }}>
      <h2>NorthTech</h2>

      <nav style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <Link to="/" style={{ color: "white" }}>Dashboard</Link>
        <Link to="/parcels" style={{ color: "white" }}>Parcels</Link>
        <Link to="/delivery" style={{ color: "white" }}>Delivery</Link>
        <Link to="/notifications" style={{ color: "white" }}>Notifications</Link>
        <Link to="/metrics" style={{ color: "white" }}>Metrics</Link>
        <Link to="/system-health" style={{ color: "white" }}>System Health</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
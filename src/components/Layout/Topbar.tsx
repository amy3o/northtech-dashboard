const Topbar = () => {
  return (
    <div style={{
      height: "60px",
      background: "#fff",
      borderBottom: "1px solid #ddd",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px"
    }}>
      <h3>Dashboard</h3>
      <div>
        {/* Notification bell will go here */}
      </div>
    </div>
  );
};

export default Topbar;
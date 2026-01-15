import { Outlet } from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar";
import Topbar from "../components/Layout/Topbar";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <div style={{ padding: "20px", overflowY: "auto" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
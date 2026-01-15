import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSocket } from "./hooks/useSocket";

import MainLayout from "./layout/MainLayout";

import DashboardPage from "./pages/Dashboard/DashboardPage";
import ParcelsPage from "./pages/Parcels/ParcelsPage";
import ParcelDetailsPage from "./pages/Parcels/ParcelDetailsPage";
import DeliveryPage from "./pages/Delivery/DeliveryPage";
import NotificationsPage from "./pages/Notifications/NotificationsPage";
import MetricsPage from "./pages/Metrics/MetricsPage";
import SystemHealthPage from "./pages/SystemHealth/SystemHealthPage";

function App() {
  useSocket();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="parcels" element={<ParcelsPage />} />
          <Route path="parcels/:id" element={<ParcelDetailsPage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="metrics" element={<MetricsPage />} />
          <Route path="system-health" element={<SystemHealthPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
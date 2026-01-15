import { useEffect, useState } from "react";
import { getSocket } from "../api/socket";

export const useDeliveryUpdates = () => {
  const [updates, setUpdates] = useState<any[]>([]);

  useEffect(() => {
    const socket = getSocket();

    socket.on("parcel-status-updated", (data) => {
      setUpdates((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("parcel-status-updated");
    };
  }, []);

  return { updates };
};
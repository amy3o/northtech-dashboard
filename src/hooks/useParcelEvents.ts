import { useEffect, useState } from "react";
import { getSocket } from "../api/socket";

export const useParcelEvents = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const socket = getSocket();

    socket.on("delivery-updated", (data) => {
      setEvents((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("delivery-updated");
    };
  }, []);

  return { events };
};
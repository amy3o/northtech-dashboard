import { useEffect, useState } from "react";
import { getSocket } from "../api/socket";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const socket = getSocket();

    socket.on("notification", (data) => {
      setNotifications((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("notification");
    };
  }, []);

  return { notifications };
};
import { useEffect } from "react";
import { getSocket } from "../api/socket";

export const useSocket = () => {
  useEffect(() => {
    const socket = getSocket();

    socket.on("connect", () => {
      console.log("🔌 Connected to Socket.io");
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected from Socket.io");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);
};
import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:6060";

let socket: Socket | null = null;

export const getSocket = () => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 10,
    });
  }
  return socket;
};
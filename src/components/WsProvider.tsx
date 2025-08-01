"use client";

import { useEffect, useState } from "react";
import { createContext } from "react";

export const MessageContext = createContext<boolean>(false);

export const socket = new WebSocket(`ws://${process.env.WSS_HOSTNAME}:3001`);
socket.addEventListener("open", () => {
  socket.send("Connected to server");
});

export default function WsProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [message, setMessage] = useState<boolean>(false);

  useEffect(() => {
    function handleMessage() {
      setMessage(!message);
    }
    socket.addEventListener("message", handleMessage);
    return function () {
      socket.removeEventListener("message", handleMessage);
    };
  });

  return (
    <html lang="en">
      <body className="bg-accent">
        <MessageContext.Provider value={message}>
          {children}
        </MessageContext.Provider>
      </body>
    </html>
  );
}

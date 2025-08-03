import * as http from "http";
import { WebSocketServer } from "ws";
import "../env-config";

const server = http.createServer(function (
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  const url = req.url;

  res.setHeader(
    "Access-Control-Allow-Origin",
    `http://${process.env.MAIN_HOSTNAME}`
  );
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (url === "/message") {
    for (const client of wss.clients) {
      if (client.readyState === client.OPEN) {
        client.send("Database change happend");
      }
    }
    res.writeHead(200);
    res.end();
  }
});

export const wss = new WebSocketServer({ server });

wss.on("connection", function conection(ws) {
  ws.send("Connection established");
});

server.listen({ hostname: process.env.WSS_HOSTNAME, port: 3001 }, function () {
  console.log(
    `Server is running on port 3001 and hostname is ${process.env.WSS_HOSTNAME}`
  );
});

import * as http from "http";
import { WebSocketServer } from "ws";

const server = http.createServer(function (
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  const url = req.url;

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
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

server.listen(3001, function () {
  console.log("Server is running in port 3001");
});

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 7071 });

// 클라이언트에게 보내주는 메시지
wss.on("connection", (ws) => {
  ws.send("connected");

  // client에서 보내는 메시지 확인가능
  ws.on("message", (messageFromClient) => {
    const message = JSON.parse(messageFromClient);
    console.log(message);
  });
});

const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

// socket 연결
io.on("connection", (socket) => {
  console.log("a user connected");

  // client에서 오는 걸 on으로 받아준다.
  socket.on("message1", (message) => {
    // 누가 보냈는지는 socket.id에 있다.
    // client로 emit으로 보낸다.
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});

http.listen("3000", () => {
  console.log("3000 오픈");
});

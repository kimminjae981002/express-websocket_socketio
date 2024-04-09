const socket = io("ws://localhost:3000");

// 서버에서 데이터 받는 걸 on으로 받는다.
socket.on("message", (text) => {
  const el = document.createElement("li");
  el.innerHTML = text;

  document.querySelector("ul").appendChild(el);
});

document.querySelector("button").onclick = () => {
  const text = document.querySelector("input").value;

  // 클라이언트에서 데이터 보내는 걸 emit으로 보낸다.
  socket.emit("message1", text);
};

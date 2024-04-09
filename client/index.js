const ws = new WebSocket("ws://localhost:7071/ws");

// server index.js에서 보내는 메시지와 객체 확인가능
ws.onmessage = (webSocketMessage) => {
  console.log(webSocketMessage);
  console.log(webSocketMessage.data);
};

// 마우스가 이동할 때마다  실시간으로 데이터를 서버에게 보내준다.
document.body.onmousemove = (event) => {
  console.log(event);
  const messageBody = {
    x: event.clientX,
    y: event.clientY,
  };
  ws.send(JSON.stringify(messageBody), console.log(event));
};

const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const options = {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
};
const io = require("socket.io")(httpServer, options);

const port = 5000;

httpServer.listen(port, function () {
  console.log("Listening on port " + port);
});

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Socket connection made " + socket.id);
  socket.on("chat", function (data) {
    console.log(data);
    io.sockets.emit("chat", data);
  });
});

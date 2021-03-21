var express = require("express");
var app = express();
var socket = require("socket.io");

const port = 5000;

var server = app.listen(port, function () {
  console.log("Listening on port " + port);
});

app.use(express.static("public"));

var io = socket(server);

io.on("connection", function (socket) {
  console.log("Socket connection made " + socket.id);
  socket.on("chat", function (data) {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", function (data) {
    socket.broadcast.emit("typing", data);
  });
});

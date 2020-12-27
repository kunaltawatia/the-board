const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const port = parseInt(process.env.PORT || "3000");

app.get("/", function (req, res) {
  res.send("server running!");
});

http.listen(port);

io.on("connection", function (socket) {
  console.log("Connected!");
  socket.on("disconnect", () => {
    console.log("Disconnected!");
  });
});

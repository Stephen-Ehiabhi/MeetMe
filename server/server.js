const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { connect } = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

//module to hide sensitive data
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const convoRoutes = require("./routes/conversation");

app.use("/api/user", userRoutes);
app.use("/api/", postRoutes);
app.use("/api/convo", convoRoutes);

//conecting database and server
connect(
  process.env.URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(`Error listening on Port ${PORT}`);
    //intiating the listen method to enable server listen for requests
    server.listen(PORT, () => {
      console.log(`Server and DB connected on Port ${PORT}`);
    });
  }
);

//initializing the connection event on the socket server
io.on("connection", (socket) => {
  socket.broadcast.emit("user-connected", "Online");
  socket.on("message", (msg) => {
    socket.broadcast.emit("chat-message", { message: msg });
  });
  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected", "Offline");
  });
});

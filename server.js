const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer()
const {Server} = require("socket.io")
const io = new Server(server);

//module to hide sensitive data
const { PORT } = require("./config/config.js");

io.on("connection", (socket)=>{
    console.log("connection created!!");
})

//intiating the listen method to enable server listen for requests
server.listen(PORT, (err) => {
    if (err) console.log(`Error listening on Port ${PORT}`);
    console.log(`Server listening on Port ${PORT}`);
})
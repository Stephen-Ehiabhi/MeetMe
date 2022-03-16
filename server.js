const express = require("express");
const io = require("socket.io")

//module to hide sensitive data
const { PORT } = require("./config/config.js");

const app = express();

//intiating the listen method to enable server listen for requests
app.listen(PORT,(err)=>{
    if(err) console.log(`Error listening on Port ${PORT}`);
  console.log(`Server listening on Port ${PORT}`);
})
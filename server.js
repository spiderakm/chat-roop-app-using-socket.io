const express = require('express');
const http = require('http');
const { Server } = require('socket.io');


const app = express()

const server = http.createServer()
const io = new Server(server)


app.use(express.static('public'))

const username = {};
const rooms = [
    { name: "globalgroup", creater: "annonymous"},
    { name: "backend group", creater: "spider"},
    { name: "web development", creater: "ashok"},
];

io.on("connection", function(socket){
    socket.on()
})



server.listen(4000, function(){
    console.log("server running at 4000");
})


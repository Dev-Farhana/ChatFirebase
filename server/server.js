// ioServer.on('connection', (socket) => {   console.log('New client connected');   
// socket.on('message', (message) => {     console.log(`Received message from client: ${message}`);    
//  ioServer.emit('message', message);   });   
// socket.on('disconnect', () => {     console.log('Client disconnected');   }); });
  
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require("cors");

const app = express();
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
  
const server = http.createServer(app);
// const io = socketIo(server);
const io = socketIo(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"]
    }
  });
  
io.on('connection', (socket) => {
  console.log('User connected');
  // Listen for incoming messages
  socket.on('message', (message) => {
    console.log('Message:', message);
    // Broadcast the message to all connected clients
    io.emit('message', message);
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
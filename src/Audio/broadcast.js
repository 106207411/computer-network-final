const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (if needed)
// app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('audio', (data) => {
        // Broadcast the audio data to all connected clients
        socket.broadcast.emit('audio', data);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(3002, () => {
    console.log('Server running on http://localhost:3002');
});

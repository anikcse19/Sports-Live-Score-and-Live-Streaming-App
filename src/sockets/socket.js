import { io } from 'socket.io-client';

const socketUrl = 'https://api.1ten365.live/';
const socket = io(socketUrl, { transports: ['websocket'] });

// Listen for the connect event
socket.on('connect', () => {
  console.log('Socket connected:', socket.id); // Connection successful
});

// Handle connection errors
socket.on('connect_error', (error) => {
  console.error('Socket connection error:', error.message);
});

// Check for disconnection
socket.on('disconnect', (reason) => {
  console.log('Socket disconnected:', reason);
});

export default socket;

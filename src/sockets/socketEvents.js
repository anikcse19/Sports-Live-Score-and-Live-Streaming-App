import socket from "./socket";

// Emit socket events
export const emitEvent = (eventName, data) => {

  if (socket.connected) {
    socket.emit(eventName, data, (ack) => {
      console.log(`Acknowledgment for eventid-${eventName}:`, ack);
    });
  } else {
    console.error(
      "Socket not connected. Event not emitted eventId:",
      eventName
    );
  }
  
};

// Listen to socket events
export const listenToEvent = (eventName, callback) => {
  socket.on(eventName, callback);
};

// Disconnect the socket
export const disconnectSocket = () => {
  if (socket.connected) {
    socket.disconnect();
    console.log("Socket disconnected.");
  }
};

import { useEffect, useState } from "react";
import socket from "./socket";

const useSocketHandler = (payload) => {
  const { oddsName, eventId, sport } = payload;
  const data = { eventId, sport };
  const eventName = "odds:all";
  const stopEventName = "odds:all:end";
  // const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState(null);

  
  useEffect(() => {
    if (!data) {
      console.error("Missing or invalid parameters for SocketHandler");
      return;
    }

    // console.log(`Connecting to socket event: ${eventName}`, data);

    // Emit the event when the socket is connected
    const emitEvent = () => {
      if (socket.connected) {
        socket.emit(eventName, data, (ack) => {
          if (ack?.status) {
            console.log(`Acknowledgment for ${eventName}:`, ack);
          } else {
            console.error(`Acknowledgment error for ${eventName}:`, ack);
          }
        });
      } else {
        console.error(`Socket not connected. Unable to emit ${eventName}`);
      }
    };

    // Attach listener for incoming data
    const handleData = (response) => {
      // console.log(`Data received:`, response);
      setDatas(response);
    };

    // Emit the event and listen for data
    if (socket.connected) {
      emitEvent();
    } else {
      socket.on("connect", emitEvent);
    }

    socket.on(oddsName, handleData);

    // Cleanup on unmount
    return () => {
      // console.log(`Cleaning up socket event: ${eventName}`);
      socket.off("connect", emitEvent);
      socket.off(oddsName, handleData);

      if (stopEventName) {
        // console.log(`Emitting stop event: ${stopEventName}`);
        socket.emit(stopEventName, data);
      }
    };
  }, []);

  const receivedDatas = { datas };

  return receivedDatas;
};

export default useSocketHandler;

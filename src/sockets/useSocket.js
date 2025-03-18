import { useEffect } from "react";
import { emitEvent, listenToEvent, disconnectSocket } from "./socketEvents";
import socket from "./socket";

const useSocket = (eventName, callback) => {
  useEffect(() => {
    listenToEvent(eventName, callback);

    return () => socket.off(eventName);
  }, [eventName, callback]);

  return { emitEvent, disconnectSocket };
};

export default useSocket;

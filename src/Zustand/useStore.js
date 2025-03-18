// src/zustand/useModeStore.js
import { create } from "zustand";

const useStore = create((set) => ({
  isBackLayoutOpen: { status: false, elements: {} },
  isSidebarOpen: false,

  setIsBackLayoutOpen: (value) =>
    set((state) => ({
      isBackLayoutOpen: {
        ...state.isBackLayoutOpen, // Spread the current state
        status: value.status, // Update the status
        elements: value.elements, // Update the elements
      },
    })),

  setIsSidebarOpen: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen, // Toggle the current value
    })),
}));

export default useStore;

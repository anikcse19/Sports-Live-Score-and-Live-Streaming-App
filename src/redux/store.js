import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api/api";
import authSliceReducer from "./auth/authSlice";
import eventsSlice from "./features/events/eventsSlice";
import commonSlice from "./features/common/commonSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    eventSlice: eventsSlice,
    commonSlice: commonSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

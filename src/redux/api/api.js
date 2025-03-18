import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config/config";
import Cookies from "js-cookie";

const apiSlice = createApi({
  reducerPath: "bb_apis",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("bb_api_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("Accept", "*/*");
      headers.set("Content-Type", "application/json");
      headers.set("Origin", import.meta.env.VITE_ORIGIN);
      headers.set("Referer", import.meta.env.VITE_REFERRER);

      return headers;
    },
  }),
  tagTypes: ["users", "events", "balance"],
  endpoints: () => ({}),
});

export default apiSlice;

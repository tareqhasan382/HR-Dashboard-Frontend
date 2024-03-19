import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hr-dashboard-backend.vercel.app",
  // baseUrl: "http://localhost:5000",
    prepareHeaders: (headers) => {
      // Get the token from localStorage
      const auth = JSON.parse(localStorage.getItem("auth"));
      const token = auth ? auth.accessToken : null;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["auth", "Candidates", "Jobs", "admin"],
});

export default baseApi;

// http://localhost:5000/
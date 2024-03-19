import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hr-dashboard-backend.vercel.app",
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



// axiosApi
/*
baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
========================
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: ["auth", "product"],
});
*/
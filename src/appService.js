import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const infoApi = createApi({
  reducerPath: "infoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getInfo: build.mutation({
      query: ({ id }) => ({
        url: `posts/${id}`,
      }),
    }),
  }),
});

export const { useGetInfoMutation } = infoApi;

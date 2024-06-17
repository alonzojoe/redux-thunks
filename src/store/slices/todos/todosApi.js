import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    //get all todo,
    getAllTodo: builder.query({
      query: () => "/todos",
    }),
  }),
});

export const { useGetAllTodoQuery } = todosApi;

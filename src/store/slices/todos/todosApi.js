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
    getTodoById: builder.query({
      query: (id) => `/todos/${id}`,
    }),

    addNewTodo: builder.mutation({
      query: (newTodo) => ({
        url: "/todos/add",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newTodo,
      }),
    }),
  }),
});

export const { useGetAllTodoQuery, useGetTodoByIdQuery, useAddNewTodoMutation } = todosApi;

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

    updateTodo: builder.mutation({
      query: (id, todo) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: todo,
      }),
    }),

    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/todos/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllTodoQuery,
  useGetTodoByIdQuery,
  useAddNewTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation
} = todosApi;

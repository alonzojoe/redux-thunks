import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/posts/postSlice";
import todosSlice from "./slices/todos/todosSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { todosApi } from "./slices/todos/todosApi";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    todos: todosSlice,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export default store;

setupListeners(store.dispatch);

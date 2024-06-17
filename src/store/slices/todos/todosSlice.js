import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
});

export default todosSlice.reducer;

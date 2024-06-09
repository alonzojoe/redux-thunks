import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await api.get("/posts");
  return response.data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: null,
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default postSlice;

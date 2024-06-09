import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await api.get("/posts");
  return response.data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    items: null,
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default postSlice;

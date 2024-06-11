import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await api.get("/posts");
  return response.data.posts;
});

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const RANDOM_ID = crypto.randomUUID();
const LOGGED_USER_ID = 7;

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    resetPost(state) {
      state.items = initialState.items;
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
    },
    createPost(state, action) {
      const newPost = action.payload.post;

      state.items.push({
        id: RANDOM_ID,
        title: newPost.title,
        body: newPost.body,
        userId: LOGGED_USER_ID,
      });
    },
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

export const postActions = postSlice.actions;
export default postSlice;

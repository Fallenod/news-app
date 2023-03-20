import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  isLoading: true,
};

export const fetchTopic = createAsyncThunk(
  "topic/fetchTopic",
  async function (category, { rejectWithValue }) {
    try {
      category = "category=" + category;
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&${category}&pageSize=5&apiKey=9576b06dbba14f2f94f52fbe6a0140ce`
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
      state.status = "reset";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopic.pending, (state) => {
        state.status = "loading";
        state.isLoading = false;
      })
      .addCase(fetchTopic.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLoading = true;
        state.data = action.payload.articles;
      });
  },
});

export const { reset } = topicSlice.actions;

export const selectTopic = (state) => state.topic.data;
export const selectTopicStatus = (state) => state.topic.status;
export const selectTopicIsLoading = (state) => state.topic.isLoading;

export default topicSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
  isLoading: true,
  country: 'ru',
  category: 'sports',
};

export const fetchTopic = createAsyncThunk(
  'topic/fetchTopic',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { country } = state.card;
      const { category } = state.card;
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_109336035266e254f5353692d2989719a4dfc&category=${category}&country=${country}`,
      );

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
      state.status = 'reset';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopic.pending, (state) => {
        state.status = 'loading';
        state.isLoading = false;
      })
      .addCase(fetchTopic.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoading = true;
        state.data = action.payload.results;
      });
  },
});

export const { reset } = topicSlice.actions;

export const selectTopic = (state) => state.topic.data;
export const selectTopicStatus = (state) => state.topic.status;
export const selectTopicIsLoading = (state) => state.topic.isLoading;

export default topicSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
  isLoading: true,
  country: 'ru',
  category: 'sports',
};

export const fetchCard = createAsyncThunk(
  'card/fetchCard',
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
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
      state.status = 'reset';
    },
    changeCategory: (state, action) => {
      state.category = action.payload;
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.pending, (state) => {
        state.status = 'loading';
        state.isLoading = false;
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoading = true;
        state.data = action.payload.results;
      });
  },
});

export const { reset } = cardSlice.actions;
export const { changeCategory } = cardSlice.actions;

export const selectCard = (state) => state.card.data;
export const selectCardStatus = (state) => state.card.status;
export const selectCardIsLoading = (state) => state.card.isLoading;

export default cardSlice.reducer;

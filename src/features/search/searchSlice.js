import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  value: '',
  page: 1,
  pageSize: 18,
  total: 0,
  totalPage: 0,
  status: 'idle',
  isLoading: true,
};

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { value } = state.search;
      const { page } = state.search;
      const { pageSize } = state.search;
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${value}&page=${page}&pageSize=${pageSize}&apiKey=3aa3b50262034fe5b7ab7b8f4fea1a28`,
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
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
      state.status = 'reset';
    },
    changeValue: (state, action) => {
      state.value = action.payload;
      state.isLoading = true;
    },
    changePage: (state, action) => {
      state.page = +action.payload;
      state.isLoading = true;
    },
    changePageSize: (state, action) => {
      state.pageSize = action.payload;
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = 'loading';
        state.isLoading = false;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLoading = true;
        state.data = action.payload.articles;
        state.total = action.payload.totalResults;
        state.totalPage = Math.ceil(state.total / state.pageSize);
      });
  },
});

export const { reset } = searchSlice.actions;
export const { changeValue } = searchSlice.actions;
export const { changePage } = searchSlice.actions;
export const { changePageSize } = searchSlice.actions;

export const selectSearch = (state) => state.search.data;
export const selectSearchStatus = (state) => state.search.status;
export const selectSearchIsLoading = (state) => state.search.isLoading;
export const selectSearchValue = (state) => state.search.value;
export const selectSearchPage = (state) => state.search.page;
export const selectSearchPageSize = (state) => state.search.pageSize;
export const selectSearchTotal = (state) => state.search.total;
export const selectSearchTotalPage = (state) => state.search.totalPage;

export default searchSlice.reducer;

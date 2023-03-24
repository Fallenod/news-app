import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  count: 0,
  status: "idle",
  isLoading: true,
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
      state.status = "reset";
    },
    addBookmark: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.title == action.payload.title
      );
      if (!itemInCart) {
        state.data.push(action.payload);
        state.count++;
        state.isLoading = true;
      }
    },
    removeBookmark: (state, action) => {
        const newfilteredData = state.data.filter((item) => item.title !== action.payload.title);
        state.data = newfilteredData;
        state.count = newfilteredData.length;
    },
  },
});

export const { reset } = bookmarkSlice.actions;
export const { addBookmark } = bookmarkSlice.actions;
export const { removeBookmark } = bookmarkSlice.actions;

export const selectBookmark = (state) => state.bookmark.count;
export const selectBookmarkData = (state) => state.bookmark.data;
export const selectBookmarkIsLoading = (state) => state.bookmark.isLoading;



export default bookmarkSlice.reducer;

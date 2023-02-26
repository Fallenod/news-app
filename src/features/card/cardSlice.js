import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  isLoading: true,
};

export const fetchCard = createAsyncThunk(
  "card/fetchCard",
  async function (category, { rejectWithValue }) {
    try {
      category = category ?? '';
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=ru&${category}&apiKey=9576b06dbba14f2f94f52fbe6a0140ce`
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
// export const fetchFirstCardsByType = createAsyncThunk(
//   "card/fetchFirstCardsByType",
//   async function (category, { rejectWithValue }) {
//     try {
//       category = category ?? '';
//       const response = await fetch(
//         `https://newsapi.org/v2/top-headlines?country=ru&${category}apiKey=3aa3b50262034fe5b7ab7b8f4fea1a28`
//       );

//       if (!response.ok) {
//         throw new Error("Server Error!");
//       }

//       const data = await response.json();

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    reset: (state) => {
      state.data = [];
      state.status = "reset";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCard.pending, (state) => {
        state.status = "loading";
        state.isLoading = false;
      })
      .addCase(fetchCard.fulfilled, (state, action) => {
        state.status = "idle";
        state.isLoading = true;
        console.log(action.payload);
        state.data = action.payload.articles;
      });
  },
});

export const { reset } = cardSlice.actions;

export const selectCard = (state) => state.card.data;
export const selectCardStatus = (state) => state.card.status;
export const selectCardIsLoading = (state) => state.card.isLoading;

export default cardSlice.reducer;

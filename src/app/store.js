import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../features/card/cardSlice';
import topicReducer from '../features/topic/topicSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    topic: topicReducer,
    search: searchReducer
  },
});

import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../features/card/cardSlice';
import topicReducer from '../features/topic/topicSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    topic: topicReducer,
  },
});

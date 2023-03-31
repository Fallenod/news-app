import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cardReducer from '../features/card/cardSlice';
import topicReducer from '../features/topic/topicSlice';
import searchReducer from '../features/search/searchSlice';
import bookmarkReducer from '../features/bookmark/bookmarkSlice';
import userReducer from '../features/user/userSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  card: cardReducer,
  topic: topicReducer,
  search: searchReducer,
  bookmark: bookmarkReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

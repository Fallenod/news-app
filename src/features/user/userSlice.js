import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: null,
  email: null,
  token: null,
  uid: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.isAuth = action.payload.isAuth;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.uid = action.payload.uid;
    },
    removeUser(state) {
      state.isAuth = null;
      state.email = null;
      state.token = null;
      state.uid = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const selectUserIsAuth = (state) => state.user.isAuth;
export const selectToken = (state) => state.user.token;
export const selectUid = (state) => state.user.uid;

export default userSlice.reducer;

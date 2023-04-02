import React from 'react';

import GoogleIcon from '@mui/icons-material/Google';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, IconButton } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import {
  removeUser,
  selectUserIsAuth,
  setUser,
} from '../features/user/userSlice';
import { auth, db } from '../firebase';
import {
  selectBookmarkData,
  updateAllBookmarks,
} from '../features/bookmark/bookmarkSlice';

function LoginBar() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectUserIsAuth);
  const bookmarkData = useSelector(selectBookmarkData);
  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const bmData = bookmarkData;
    const token = result.user.accessToken;
    const { email } = result.user;
    const { uid } = result.user;
    const docRef = doc(db, 'users', result.user.uid);
    const docData = await getDoc(docRef);
    if (docData?.data()?.bookmarks) {
      const updatedData = bmData.concat(docData?.data()?.bookmarks);
      setDoc(docRef, {
        bookmarks: updatedData,
      });
      dispatch(updateAllBookmarks(updatedData));
    } else {
      setDoc(docRef, {
        bookmarks: bmData,
      });
      dispatch(updateAllBookmarks(bmData));
    }
    const userData = {
      isAuth: true,
      email,
      token,
      uid,
    }
    dispatch(setUser(userData));
  };
  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <Box>
      {isAuth ? (
        <IconButton
          onClick={handleLogout}
          size="large"
          aria-label="search"
          color="inherit"
          sx={{
            color: 'white',
            '&:hover': {
              color: '#FFD76C',
            },
          }}
        >
          <LogoutIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={handleAuth}
          size="large"
          aria-label="search"
          color="inherit"
          sx={{
            color: 'white',
            '&:hover': {
              color: 'red',
            },
          }}
        >
          <GoogleIcon />
        </IconButton>
      )}
    </Box>
  );
}

export default LoginBar;

import { useState } from "react";

import GoogleIcon from "@mui/icons-material/Google";
import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { auth, db } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  removeUser,
  selectUserIsAuth,
  setUser,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { selectBookmarkData, updateAllBookmarks } from "../features/bookmark/bookmarkSlice";

function LoginBar() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectUserIsAuth);
  const bookmarkData = useSelector(selectBookmarkData);
  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    let bmData = bookmarkData;
    const isAuth = true;
    const token = result.user.accessToken;
    const email = result.user.email;
    const uid = result.user.uid;
    const docRef = doc(db, "users", result.user.uid);
    const docData = await getDoc(docRef);
    console.log(docData);
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
    dispatch(setUser({ isAuth, email, token, uid }));
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
            "&:hover": {
              color: "red",
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
            "&:hover": {
              color: "red",
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

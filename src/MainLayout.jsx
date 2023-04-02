import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, CssBaseline, Typography } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import { db } from './firebase';
import { selectUid, selectUserIsAuth } from './features/user/userSlice';
import { selectBookmarkData } from './features/bookmark/bookmarkSlice';
import ScrollToTopButton from './components/ScrollToTopButton';
import SideMenu from './components/SideMenu';

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function MainLayout() {
  const uid = useSelector(selectUid);
  const data = useSelector(selectBookmarkData);
  const isAuth = useSelector(selectUserIsAuth);
  useEffect(() => {
    if (isAuth) {
      setDoc(doc(db, 'users', uid), {
        bookmarks: data,
      });
    }
  }, [data]);
  return (
    <>
      <Header />
      <Container component="main" maxWidth="lg">
        <Typography variant="h5" color="white">
          {new Intl.DateTimeFormat('ru-RU', options).format(new Date())}
        </Typography>
        <CssBaseline />
        <Outlet />
      </Container>
      <Footer />
      <ScrollToTopButton />
      <SideMenu />
    </>
  );
}

export default MainLayout;

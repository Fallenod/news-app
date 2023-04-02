import React from 'react';

import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import categoryProps from '../categoryProps';
import SearchBar from './SearchBar';
import BurgerMenu from './BurgerMenu';
import { selectBookmark } from '../features/bookmark/bookmarkSlice';
import LoginBar from './LoginBar';

function Header() {
  const countBookmarks = useSelector(selectBookmark);

  return (
    <AppBar color="transparent" position="static" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex' }}>
          <BurgerMenu />
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              flexGrow: 1,
            }}
          >
            {categoryProps.map((page, index) => (
              <Button
                component={Link}
                to={page.url}
                key={page.url}
                sx={{
                  my: 2,
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '1rem',
                  display: 'block',
                  '&:hover': {
                    color: `${categoryProps[index].color}`,
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <IconButton
            component={Link}
            to="/bookmarks"
            key="bookmarks"
            sx={{
              color: 'white',
              '&:hover': {
                color: '#FFD76C',
              },
            }}
            aria-label="bookmarks"
          >
            <Badge badgeContent={countBookmarks} color="error">
              <BookmarksIcon />
            </Badge>
          </IconButton>
          <SearchBar />
          <LoginBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

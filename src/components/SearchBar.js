import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/SwipeableDrawer';
import styled from '@emotion/styled';
import SearchField from './SearchField';

const DrawerSearch = styled(Drawer)`
  display: flex;
`;

function SearchBar() {
  const [searchDrawer, setSearchDrawer] = useState(false);
  const [searchUrl, setSearchUrl] = useState('');
  const toggleDrawer = (open) => (event) => {
    setSearchDrawer(open);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.replace(`/search?q=${searchUrl}`);
  };
  return (
    <Box>
      <IconButton
        onClick={toggleDrawer(true)}
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
        <SearchIcon />
      </IconButton>
      <DrawerSearch
        anchor="top"
        open={searchDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <SearchField
          handleSubmit={handleSubmit}
          searchUrl={searchUrl}
          setSearchUrl={setSearchUrl}
        />
      </DrawerSearch>
    </Box>
  );
}

export default SearchBar;

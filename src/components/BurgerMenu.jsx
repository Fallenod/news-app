import React, { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/SwipeableDrawer';
import styled from '@emotion/styled';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import WindowIcon from '@mui/icons-material/Window';
import categoryProps from '../categoryProps';

const DrawerSearch = styled(Drawer)`
  display: flex;
`;

function BurgerMenu() {
  const [searchDrawer, setSearchDrawer] = useState(false);
  const toggleDrawer = (open) => () => {
    setSearchDrawer(open);
  };
  return (
    <Box>
      <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        aria-label="search"
        sx={{
          color: 'white',
          '&:hover': {
            color: '#FFD76C',
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <DrawerSearch
        anchor="left"
        open={searchDrawer}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <ListItem
              component={Link}
              to="/"
              key="main"
              disablePadding
              sx={{ all: 'unset' }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <WindowIcon />
                </ListItemIcon>
                <ListItemText primary="Главная" />
              </ListItemButton>
            </ListItem>
            <Divider variant="middle" />
            {categoryProps.map((page, index) => (
              <ListItem
                component={Link}
                to={page.url}
                key={page.name}
                disablePadding
                sx={{
                  all: 'unset',
                  '&:hover': {
                    color: `${categoryProps[index].color}`,
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </DrawerSearch>
    </Box>
  );
}

export default BurgerMenu;

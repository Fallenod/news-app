import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/SwipeableDrawer";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import categoryProps from "../categoryProps";
import { Link } from "react-router-dom";
import WindowIcon from "@mui/icons-material/Window";

const SearchInput = styled(InputBase)`
  border-radius: 2rem;
  background-color: #222222;
  color: white;
  padding: 1rem 2rem;
`;
const BoxInput = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #f3f3f2;
  margin: 0 auto;
`;
const DrawerSearch = styled(Drawer)`
  display: flex;
`;
const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  width: 50%;
`;
const SearchButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  right: 2rem;
`;

function BurgerMenu() {
  const [searchDrawer, setSearchDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setSearchDrawer(open);
  };
  return (
    <Box>
      <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        aria-label="search"
        color="inherit"
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
            <ListItem component={Link} to="/" key="main" disablePadding sx={{all: "unset"}}>
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
                sx={{all: "unset"}}
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

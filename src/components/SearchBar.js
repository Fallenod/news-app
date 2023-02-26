import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/SwipeableDrawer";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";

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
  transform: translate(50%,-50%);
  right: 2rem;
`;

function SearchBar() {
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
        sx={{
          "&:hover": {
            color: "red",
          },
        }}
      >
        <SearchIcon />
      </IconButton>
      <DrawerSearch
        anchor="top"
        open={searchDrawer}
        onClose={toggleDrawer(false)}
      >
        <BoxInput
          role="presentation"
          component="form"
          //   onClick={toggleDrawer(false)}
          //   onKeyDown={toggleDrawer(false)}
        >
          <p>{process.env.REACT_APP_API_KEY}</p>
          <SearchInputContainer>
            <SearchInput
              id="search-bar"
              fullWidth
              type="text"
              //   onInput={(e) => {
              //     setSearchQuery(e.target.value);
              //   }}
            />
            <SearchButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "white" }} />
            </SearchButton>
          </SearchInputContainer>
        </BoxInput>
      </DrawerSearch>
    </Box>
  );
}

export default SearchBar;

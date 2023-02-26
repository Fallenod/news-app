import { useState } from "react";

import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

import categoryProps from "../categoryProps";
import SearchBar from "./SearchBar";
import logo from "../content/logo.png";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="primary" position="static" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: "flex" }}>
          {/* <IconButton size="small" aria-label="logo" color="inherit">
            <div style={{ width: "2.5rem" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                alt="logo"
                src={logo}
              />
            </div>
          </IconButton> */}
          <BurgerMenu/>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            {categoryProps.map((page) => (
              <Button
                component={Link}
                to={page.url}
                key={page.url}
                sx={{
                  my: 2,
                  color: "white",
                  textAlign: "center",
                  fontSize: "1rem",
                  display: "block",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <SearchBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

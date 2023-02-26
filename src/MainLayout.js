import { Outlet } from "react-router-dom";
import {
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="lg">
        <Typography variant="h5" color="white">
          {new Intl.DateTimeFormat("ru-RU", options).format(new Date())}
        </Typography>
        <CssBaseline />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;

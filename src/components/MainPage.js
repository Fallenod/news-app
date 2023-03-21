import { useEffect } from "react";

import { Unstable_Grid2 as Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  changeCategory,
  fetchCard,
  selectCard,
  selectCardIsLoading,
} from "../features/card/cardSlice";
import Card from "./Card";
import LoaderGrid from "./LoaderGrid";

const MainPage = ({ data }) => {
  const cards = useSelector(selectCard);
  const isLoading = useSelector(selectCardIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCategory(data.param));
  }, [data.param, dispatch]);
  useEffect(() => {
    dispatch(fetchCard());
  }, [data.param, dispatch]);

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        // xs={10}
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          backgroundColor: "#F3F3F2",
          borderRadius: "20px",
          p: "20px",
        }}
      >
        {isLoading ? (
          cards?.map((el, index) => {
            return <Card key={index} data={el} />;
          })
        ) : (
          <LoaderGrid />
        )}
      </Grid>
    </>
  );
};

export default MainPage;

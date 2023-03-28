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
import { selectBookmarkData, selectBookmarkIsLoading } from "../features/bookmark/bookmarkSlice";

const BookmarksPage = () => {
  const cards = useSelector(selectBookmarkData);
  const isLoading = useSelector(selectBookmarkIsLoading);
  const dispatch = useDispatch();

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        // xs={10}
        sx={{
          display: "flex",
          alignItems: "start",
          marginTop: "20px",
          backgroundColor: "#F3F3F2",
          borderRadius: "20px",
          p: "20px",
          minHeight: "100vh",
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

export default BookmarksPage;

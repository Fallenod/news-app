import { useEffect } from "react";

import { Skeleton, Unstable_Grid2 as Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCard,
  selectCard,
  selectCardIsLoading,
  selectCardStatus,
} from "../features/card/cardSlice";
import Card from "./Card";
import { useFetch } from "../hooks/useFetch";
import LoaderGrid from "./LoaderGrid";

const SearchPage = ({ data }) => {
  const books = useSelector(selectCard);
  const status = useSelector(selectCardStatus);
  const isLoading = useSelector(selectCardIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCard(data.param));
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
          books?.map((el, index) => {
            return <Card key={index} data={el} />;
          })
        ) : (
          <LoaderGrid />
        )}
      </Grid>
    </>
  );
};

export default SearchPage;
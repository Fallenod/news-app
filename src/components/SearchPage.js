import { useEffect } from "react";

import { Unstable_Grid2 as Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";
import LoaderGrid from "./LoaderGrid";
import {
  changeValue,
  fetchSearch,
  selectSearch,
  selectSearchIsLoading,
  selectSearchValue,
} from "../features/search/searchSlice";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const cards = useSelector(selectSearch);
  const isLoading = useSelector(selectSearchIsLoading);
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();
  let { value } = useParams();
  useEffect(() => {
    dispatch(changeValue(value));
  }, [cards, dispatch]);
  useEffect(() => {
    dispatch(fetchSearch());
  }, [searchValue, dispatch]);

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

export default SearchPage;

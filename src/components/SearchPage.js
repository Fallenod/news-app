import { useEffect } from "react";

import { Unstable_Grid2 as Grid, Pagination, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import Card from "./Card";
import LoaderGrid from "./LoaderGrid";
import {
  changePage,
  changeValue,
  fetchSearch,
  selectSearch,
  selectSearchIsLoading,
  selectSearchPage,
  selectSearchPageSize,
  selectSearchTotal,
  selectSearchTotalPage,
  selectSearchValue,
} from "../features/search/searchSlice";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import SearchForm from "./SearchForm";

const SearchPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const cards = useSelector(selectSearch);
  const isLoading = useSelector(selectSearchIsLoading);
  const searchValue = useSelector(selectSearchValue);
  const searchPageSize = useSelector(selectSearchPageSize);
  const searchTotal = useSelector(selectSearchTotal);
  const defaultPage = useSelector(selectSearchPage);
  const totalPage = useSelector(selectSearchTotalPage);
  const location = useLocation();
  const dispatch = useDispatch();
  let value = searchParams.get("q");
  let page = searchParams.get("page");
  useEffect(() => {
    page && dispatch(changePage(page));
  }, [dispatch]);

  useEffect(() => {
    value && dispatch(changeValue(value));
  }, [cards, dispatch]);

  useEffect(() => {
    dispatch(fetchSearch());
  }, [searchValue, defaultPage, location]);

  const handleChange = (event, value) => {
    dispatch(changePage(value));
    console.log(value);
  };

  return (
    <Grid>
      <SearchForm/>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          backgroundColor: "#F3F3F2",
          borderRadius: "20px",
          p: "1rem",
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
      {isLoading && (
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            backgroundColor: "#F3F3F2",
            borderRadius: "20px",
            p: "1rem",
          }}
          container
          spacing={2}
        >
          <Pagination
            count={totalPage}
            page={defaultPage}
            onChange={handleChange}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default SearchPage;

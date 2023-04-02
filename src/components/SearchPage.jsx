import React, { useEffect } from 'react';

import {
  Unstable_Grid2 as Grid, Pagination
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useSearchParams } from 'react-router-dom';
import Card from './Card';
import LoaderGrid from './LoaderGrid';
import {
  changePage,
  changeValue,
  fetchSearch,
  selectSearch,
  selectSearchIsLoading,
  selectSearchPage,
  selectSearchTotalPage,
  selectSearchValue,
} from '../features/search/searchSlice';
import SearchForm from './SearchForm';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const cards = useSelector(selectSearch);
  const isLoading = useSelector(selectSearchIsLoading);
  const searchValue = useSelector(selectSearchValue);
  const defaultPage = useSelector(selectSearchPage);
  const totalPage = useSelector(selectSearchTotalPage);
  const location = useLocation();
  const dispatch = useDispatch();
  const value = searchParams.get('q');
  const page = searchParams.get('page');
  useEffect(() => {
    if (page) {
      dispatch(changePage(page));
    }
  }, [dispatch]);

  useEffect(() => {
    if (value) {
      dispatch(changeValue(value));
    }
  }, [cards, dispatch]);

  useEffect(() => {
    dispatch(fetchSearch());
  }, [searchValue, defaultPage, location]);

  const handleChange = () => {
    dispatch(changePage(value));
  };

  return (
    <Grid>
      <SearchForm />
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '20px',
          backgroundColor: '#F3F3F2',
          borderRadius: '20px',
          p: '1rem',
        }}
      >
        {isLoading ? (
          // eslint-disable-next-line react/no-array-index-key
          cards?.map((el, index) => <Card key={index} data={el} />)
        ) : (
          <LoaderGrid />
        )}
      </Grid>
      {isLoading && (
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
            backgroundColor: '#F3F3F2',
            borderRadius: '20px',
            p: '1rem',
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
}

export default SearchPage;

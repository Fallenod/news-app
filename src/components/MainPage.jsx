import React, { useEffect } from 'react';

import  PropTypes  from 'prop-types';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeCategory,
  fetchCard,
  selectCard,
  selectCardIsLoading,
} from '../features/card/cardSlice';
import LoaderGrid from './LoaderGrid';
import TitleBlock from './TitleBlock';
import CardsData from './CardsData';

const emptyText = 'Нет результатов в данной категории!';

function MainPage({ data }) {
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
      <TitleBlock title={data.name} image={data.bg} />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        // xs={10}
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '20px',
          backgroundColor: '#F3F3F2',
          borderRadius: '20px',
          p: '1rem',
          minHeight: 'calc(100vh - 10rem)',
        }}
      >
        {isLoading ? <CardsData cards={cards} emptyText={emptyText} /> : <LoaderGrid />}
      </Grid>
    </>
  );
}
MainPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    pubDate: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
    source_id: PropTypes.string,
  })).isRequired,
};
export default MainPage;

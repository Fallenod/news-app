import React from 'react';

import { Unstable_Grid2 as Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import LoaderGrid from './LoaderGrid';
import { selectBookmarkData } from '../features/bookmark/bookmarkSlice';
import CardsData from './CardsData';
import bmbg from '../content/bmbg.svg';
import TitleBlock from './TitleBlock';

const emptyText = 'Еще нет ни одной закладки';

function BookmarksPage() {
  const cards = useSelector(selectBookmarkData);

  return (
    <>
      <TitleBlock title="Закладки" image={bmbg} color="white" />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        sx={{
          display: 'flex',
          alignItems: 'start',
          marginTop: '20px',
          backgroundColor: '#F3F3F2',
          borderRadius: '20px',
          p: '1rem',
          height: 'calc(100vh - 10rem)',
        }}
      >
        {<LoaderGrid /> && <CardsData cards={cards} emptyText={emptyText} />}
      </Grid>
    </>
  );
}

export default BookmarksPage;

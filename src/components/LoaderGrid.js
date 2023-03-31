import React from 'react';

import { Unstable_Grid2 as Grid, Skeleton, Paper } from '@mui/material';

const countLoaders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function LoaderGrid() {
  return (
    <>
      {countLoaders.map((item) => (
        <Grid key={item.toString()} spacing={0} item xs={12} sm={6} md={4}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: 'grey',
              borderRadius: '12px',
              boxSizing: 'border-box',
              padding: '18px',
            }}
          >
            <Skeleton variant="text" sx={{ fontSize: '2rem', borderRadius: '12px' }} />
            <Skeleton variant="rounded" width="100%" height={200} sx={{ borderRadius: '12px' }} animation="wave" />
            <Skeleton variant="text" sx={{ fontSize: '2rem', borderRadius: '12px', width: '50%' }} />
          </Paper>
        </Grid>
      ))}
    </>
  );
}

export default LoaderGrid;

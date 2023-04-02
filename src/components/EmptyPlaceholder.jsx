import React from 'react';

import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Unstable_Grid2 as Grid, Paper, Typography } from '@mui/material';
import logo from '../content/emptyLogo.png';

const PlaceholderImage = styled.img`
  user-select: none;
`;

function EmptyPlaceholder({ emptyText }) {
  return (
    <Grid
      container
      xs={12}
      sx={{ height: '100%' }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        alignItems="center"
        justifyContent="center"
        item
        xs={6}
      >
        <Paper
          elevation={0}
          sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent',
          }}
        >
          <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
            <PlaceholderImage draggable="false" src={logo} alt="" />
          </Paper>
          <Typography variant="subtitle1" component="p" sx={{ fontFamily: 'Comfortaa', userSelect: 'none' }}>{emptyText}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
EmptyPlaceholder.defaultProps = {
  emptyText: 'Нет данных',
}
EmptyPlaceholder.propTypes = {
  emptyText: PropTypes.string,
};
export default EmptyPlaceholder;

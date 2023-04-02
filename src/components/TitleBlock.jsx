import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Unstable_Grid2 as Grid } from '@mui/material';

function TitleBlock({ title, image, color }) {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={2}
      // xs={10}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        backgroundColor: '#111111',
        backgroundImage: `url(${image})`,
        borderRadius: '20px',
        p: '1rem',
        height: '6rem',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Comfortaa', fontWeight: '700', color: `${color}`, userSelect: 'none',
        }}
        variant="h4"
        component="h2"
      >
        {title}
      </Typography>
    </Grid>
  );
}
TitleBlock.defaultProps = {
  title: 'Title',
  image: '',
  color: '#222123',
}
TitleBlock.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
};
export default TitleBlock;

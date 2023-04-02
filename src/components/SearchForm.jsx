import React, { useState } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchField from './SearchField';

function SearchForm() {
  const [searchUrl, setSearchUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchUrl}`);
  };
  return (
    <Grid
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        backgroundColor: '#F3F3F2',
        borderRadius: '20px',
        p: '20px',
      }}
      xs={12}
      container
      spacing={2}
    >
      <Grid item xs={12}>
        <SearchField
          handleSubmit={handleSubmit}
          searchUrl={searchUrl}
          setSearchUrl={setSearchUrl}
        />
      </Grid>
    </Grid>
  );
}

export default SearchForm;

import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';

const SearchInput = styled(InputBase)`
  border-radius: 20px;
  background-color: #222222;
  color: white;
  padding: 1rem 2rem;
`;
const BoxInput = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #f3f3f2;
  margin: 0 auto;
`;
const SearchInputContainer = styled.div`
  position: relative;
  display: flex;
  width: 50%;
`;
const SearchButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  right: 2rem;
`;

function SearchField({ handleSubmit, searchUrl, setSearchUrl }) {
  return (
    <BoxInput
      onSubmit={(e) => handleSubmit(e)}
      role="presentation"
      component="form"
    >
      <SearchInputContainer>
        <SearchInput
          id="search-bar"
          fullWidth
          value={searchUrl}
          type="text"
          onChange={(e) => setSearchUrl(e.target.value)}
        />
        <SearchButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: 'white' }} />
        </SearchButton>
      </SearchInputContainer>
    </BoxInput>
  );
}

export default SearchField;

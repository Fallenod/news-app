import {
  IconButton,
  Paper,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import TopicCard from './TopicCard';
import TopTopicCard from './TopTopicCard';

const TopicTitle = styled(Typography)`
  display: block;
  all: unset;
  color: #222123;
  font-family: "Rubik";
  font-size: 2rem;
  &:hover {
  }
`;
const TitleContainer = styled(Link)`
  all: unset;
  display: flex;
  direction: row;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

function Topic({
  name, url, color, icon, data,
}) {
  const firstCard = data[0];
  return (
    <Grid
      container
      spacing={0}
      xs={12}
    >
      <Paper sx={{ backgroundColor: `${color}`, borderRadius: '30px', p: '50px' }}>
        <Grid
          sx={{
            paddingBottom: '1rem',
          }}
          item
        >
          <TitleContainer to={url}>
            {icon}
            <TopicTitle>{name}</TopicTitle>
          </TitleContainer>
        </Grid>
        <Grid
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          item
          container
        >
          <Grid
            sx={{
              paddingRight: { xs: 0, md: 1 },
              paddingBottom: { xs: 1, md: 0 },
            }}
            item
            xs={12}
            md={4}
          >
            <TopTopicCard data={firstCard} />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            lg={8}
            spacing={1}
            direction="row"
            container
            alignItems="stretch"
          >
            {data.map((el, index) => {
              if (index > 0) {
                return <TopicCard key={index} data={el} />;
              }
            })}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Topic;

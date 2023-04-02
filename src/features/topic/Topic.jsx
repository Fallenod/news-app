import React from 'react';
import {
  Paper,
  Typography,
  Unstable_Grid2 as Grid,
  styled
} from '@mui/material';
import PropTypes from 'prop-types';
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
const TopicPaper = styled(Paper)`
  background-color:  ${props => props.color || "inherit"};
  border-radius: 30px;
  padding: 50px;
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
      <TopicPaper color={color}>
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
            {data.map((el, index) => (
              // eslint-disable-next-line react/no-array-index-key
              (index > 0) && <TopicCard key={index} data={el} />
            )
            )}
          </Grid>
        </Grid>
      </TopicPaper>
    </Grid>
  );
}
Topic.defaultProps = {
  data: [],
  name: '',
  url: '',
  color: '',
  icon: '',
};
Topic.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    pubDate: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
    source_id: PropTypes.string,
  })),
  name: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
};
export default Topic;

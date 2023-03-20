import { Unstable_Grid2 as Grid } from "@mui/material";
import TopicCard from "./TopicCard";
import TopTopicCard from "./TopTopicCard";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const TopicTitle = styled(Link)`
  all: unset;
  color: black;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    &::after {
      content: ">";
    }
  }
`;

const Topic = ({ name, url, data }) => {
  const firstCard = data[0];
  return (
    <Grid container spacing={0} xs={12}>
      <Grid item>
        <TopicTitle to={url}>{name}</TopicTitle>
      </Grid>
      <Grid sx={{ flexDirection: { xs: "column", md: "row" } }} item container>
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
    </Grid>
  );
};

export default Topic;

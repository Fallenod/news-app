import { useEffect, useState } from "react";

import { Button, Paper, Unstable_Grid2 as Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import LoaderGrid from "./LoaderGrid";
import Topic from "../features/topic/Topic";
import categoryProps from "../categoryProps";
import { fetchTopic, selectTopicIsLoading } from "../features/topic/topicSlice";
import Carousel from "react-material-ui-carousel";
import CarouselCard from "./CarouselCard";

const cardData = {
  source: {
    id: null,
    name: "YouTube",
  },
  author: null,
  title:
    "Actor Jeremy Renner posts video of himself on treadmill amid recovery - ABC 7 Chicago",
  description:
    "The actor posted a video of himself walking on a special treadmill months after being crushed by a snow plow. FULL STORY: https://abc7chicago.com/jeremy-renn...",
  url: "https://www.youtube.com/watch?v=q4BTYeo3rGU",
  urlToImage: "https://i.ytimg.com/vi/q4BTYeo3rGU/maxresdefault.jpg",
  publishedAt: "2023-03-27T13:28:47Z",
  content: null,
};

const HomePage = () => {
  const [topics, setTopics] = useState([]);
  const isLoading = useSelector(selectTopicIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    let requests = categoryProps.map((item) => dispatch(fetchTopic(item.url)));
    Promise.all(requests).then((data) => {
      setTopics(data);
    });
  }, [dispatch]);
  return (
    <>
      {/* <Grid xs={12} container>
        <Grid item xs={12}>
          <Carousel sx={{ width: "100%", borderRadius: "22px", }}>
            <CarouselCard data={cardData} />
          </Carousel>
        </Grid>
      </Grid> */}
      <Grid
        container
        gap={12}
        // xs={10}
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          backgroundColor: "#F3F3F2",
          borderRadius: "20px",
          p: "20px",
          minHeight: "100vh",
        }}
      >
        {isLoading ? (
          topics?.map((el, index) => {
            return (
              <Topic
                key={index}
                name={categoryProps[index].name}
                url={categoryProps[index].url}
                data={el.payload.articles}
              />
            );
          })
        ) : (
          <LoaderGrid />
        )}

      </Grid>
    </>
  );
};

export default HomePage;

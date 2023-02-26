import { useEffect, useState } from "react";

import { Unstable_Grid2 as Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import LoaderGrid from "./LoaderGrid";
import Topic from "../features/topic/Topic";
import categoryProps from "../categoryProps";
import { fetchTopic, selectTopicIsLoading } from "../features/topic/topicSlice";

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

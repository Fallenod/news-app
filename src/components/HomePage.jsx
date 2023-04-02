import React, { useEffect, useState } from 'react';

import { Unstable_Grid2 as Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import LoaderGrid from './LoaderGrid';
import Topic from '../features/topic/Topic';
import categoryProps from '../categoryProps';
import { fetchTopic, selectTopicIsLoading } from '../features/topic/topicSlice';

function HomePage() {
  const [topics, setTopics] = useState([]);
  const isLoading = useSelector(selectTopicIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const requests = categoryProps.map((item) => dispatch(fetchTopic(item.url)));
    Promise.all(requests).then((data) => {
      setTopics(data);
    });
  }, [dispatch]);
  return (
    <Grid
      container
      gap={12}
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
        borderRadius: '20px',
        minHeight: '100vh',
      }}
    >
      {isLoading ? (
        topics?.map((el, index) => (
          <Topic
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            name={categoryProps[index].name}
            url={categoryProps[index].url}
            color={categoryProps[index].color}
            icon={categoryProps[index].icon}
            data={el.payload.results.slice(0, 5)}
          />
        ))
      ) : (
        <LoaderGrid />
      )}

    </Grid>
  );
}

export default HomePage;

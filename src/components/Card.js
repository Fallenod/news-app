import React, { useState } from 'react';
import {
  Unstable_Grid2 as Grid,
  CardMedia,
  CardContent,
  Typography,
  Link,
  Stack,
  Paper,
  Avatar,
  Checkbox,
} from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import {
  addBookmark,
  removeBookmark,
} from '../features/bookmark/bookmarkSlice';

import formatTime from '../utils/formatTime';

const placeholderImg = 'https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png';

const CardTitle = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-weight: 700;
  line-height: 1;
  min-height: 2rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  &:hover {
    color: red;
  }
`;
const CardSubTitle = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-weight: 300;
  line-height: 1;
  min-height: 2rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 18px;
  gap: 4px;
  &:last-child {
    padding-bottom: 18px;
  }
`;
const CardTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: .5rem;
`;
const CardText = styled.div`
  font-size: 14px;
  color: #8f9fa7;
`;

function Card({ data }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const publishedDate = formatTime(data?.pubDate);
  const url = new URL(data?.link);

  const handleClick = (e) => {};
  const handleChange = (e) => {
    if (!checked) {
      dispatch(addBookmark(data));
    } else {
      dispatch(removeBookmark(data));
    }
    setChecked(!checked);
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'grey',
          borderRadius: '12px',
          boxSizing: 'border-box',
          cursor: 'pointer',
        }}
      >
        <Link
          sx={{ display: 'flex', height: '100%' }}
          href={data?.link}
          underline="none"
          target="_blank"
          onClick={(e) => handleClick(e)}
        >
          <Content>
            <CardTitle gutterBottom variant="h6" component="div">
              {data?.title}
            </CardTitle>
            <CardSubTitle gutterBottom variant="subtitle1" component="div">
              {data?.description}
            </CardSubTitle>
            <CardMedia
              component="img"
              alt={data?.title}
              height="200px"
              image={data?.image_url ?? placeholderImg}
              sx={{ borderRadius: '12px', maxWidth: '100%', maxHeight: '100%' }}
              loading="lazy"
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
            >
              <CardTextContainer>
                <Avatar
                  sx={{ width: 16, height: 16 }}
                  alt="Natacha"
                  src={`https://www.google.com/s2/favicons?domain=${url?.host}&sz=32`}
                />
                <CardText>{data?.source_id}</CardText>
                <CardText>{publishedDate}</CardText>
              </CardTextContainer>
              <Checkbox
                icon={<BookmarkAddIcon color="disabled" />}
                checkedIcon={<BookmarkAddIcon color="error" />}
                checked={checked}
                onChange={handleChange}
              />
            </Stack>
          </Content>
        </Link>
      </Paper>
    </Grid>
  );
}

export default Card;

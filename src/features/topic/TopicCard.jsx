import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Unstable_Grid2 as Grid,
  CardMedia,
  CardContent,
  Typography,
  Link,
  Stack,
  Paper,
  Checkbox,
  Avatar,
} from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { addBookmark, removeBookmark } from '../bookmark/bookmarkSlice';

import formatTime from '../../utils/formatTime';

const placeholderImg = 'https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png';

const CardTitle = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  font-weight: 700;
  line-height: 1;
  width: 100%;
  -webkit-line-clamp: 4;
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
  align-items: center;
  gap: 0.5rem;
`;
const CardText = styled.div`
  font-size: 14px;
  color: #8f9fa7;
`;

function TopicCard({ data }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const publishedDate = formatTime(data.pubDate);
  const url = new URL(data?.link);
  const handleChange = () => {
    if (!checked) {
      dispatch(addBookmark(data));
    } else {
      dispatch(removeBookmark(data));
    }
    setChecked(!checked);
  };
  return (
    <Grid xs={12} sm={6} item>
      <Paper
        sx={{
          backgroundColor: 'white',
          borderRadius: '12px',
          height: '100%',
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          cursor: 'pointer',
        }}
      >
        <Link
          sx={{ display: 'flex', height: '100%' }}
          href={data.link}
          underline="none"
          target="_blank"
        >
          <Content>
            <Grid container direction="row">
              <Grid item xs={8}>
                <CardTitle gutterBottom variant="subtitle1" component="div">
                  {data?.title}
                </CardTitle>
                <CardSubTitle gutterBottom variant="subtitle2" component="div">
                  {data?.title}
                </CardSubTitle>
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt={data.title}
                  height="86px"
                  width="86px"
                  image={data?.image_url ?? placeholderImg}
                  sx={{
                    borderRadius: '12px',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                  loading="lazy"
                />
              </Grid>
            </Grid>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
            >
              <CardTextContainer>
                <Avatar
                  sx={{ width: 16, height: 16 }}
                  alt="source_logo"
                  src={`https://www.google.com/s2/favicons?domain=${url?.host ?? 'google.com'}&sz=32`}
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
TopicCard.defaultProps = {
  data: [],
};
TopicCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    pubDate: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
    source_id: PropTypes.string,
  })),
};
export default TopicCard;

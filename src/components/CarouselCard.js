import React, { useEffect, useState } from "react";

import {
  Unstable_Grid2 as Grid,
  CardMedia,
  CardContent,
  Typography,
  Link,
  Stack,
  Paper,
  Avatar,
  IconButton,
  Checkbox,
} from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  removeBookmark,
} from "../features/bookmark/bookmarkSlice";

const placeholderImg =
  "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png";

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

const CarouselCard = ({ data }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

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
    <Grid item xs={12} sm={12} md={12}>
      <Paper
        elevation={2}
        sx={{
          position: "relative",
          backgroundColor: "transparent",
          boxSizing: "border-box",
          height: "500px",
          maxWidth: "100%",
          maxHeight: "100%",
          background: `url(${data?.urlToImage ?? placeholderImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <CardMedia
          component="img"
          alt={data.title}
          height="100%"
          image={data?.urlToImage ?? placeholderImg}
          sx={{   }}
          loading="lazy"
        /> */}
        <Content
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 0,
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)",
          }}
        >
          <CardTitle gutterBottom variant="h6" component="div">
            {data.title}
          </CardTitle>
          <CardSubTitle gutterBottom variant="subtitle1" component="div">
            {data.description}
          </CardSubTitle>

          <Stack
            direction="row"
            justifyContent="start"
            alignItems="center"
            spacing={1}
          >
            <Avatar
              sx={{ width: 16, height: 16 }}
              alt="Natacha"
              src={`https://${data.source.name}/favicon.ico`}
            />
            <div style={{ fontSize: "14px", color: "#8F9FA7" }}>
              {data.source.name}
            </div>
            <div style={{ fontSize: "14px", color: "#8F9FA7" }}>{`${new Date(
              data.publishedAt
            ).getHours()}:${new Date(data.publishedAt).getMinutes()}`}</div>
            <Checkbox
              icon={<BookmarkAddIcon color="disabled" />}
              checkedIcon={<BookmarkAddIcon color="error" />}
              checked={checked}
              onChange={handleChange}
            />
          </Stack>
        </Content>
      </Paper>
    </Grid>
  );
};

export default CarouselCard;

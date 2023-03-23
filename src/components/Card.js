import React from "react";

import {
  Unstable_Grid2 as Grid,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Link,
  Stack,
  Paper,
  Avatar,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { styled } from "@mui/system";

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

const Card = (prop) => {
  const { data } = prop;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "grey",
          borderRadius: "12px",
          boxSizing: "border-box",
        }}
      >
        <Link
          sx={{ display: "flex", height: "100%" }}
          href={data.url}
          underline="none"
          target="_blank"
        >
          <Content>
            <CardTitle gutterBottom variant="h6" component="div">
              {data.title}
            </CardTitle>
            <CardSubTitle gutterBottom variant="subtitle1" component="div">
              {data.description}
            </CardSubTitle>
            <CardMedia
              component="img"
              alt={data.title}
              height="200px"
              image={data?.urlToImage ?? placeholderImg}
              sx={{ borderRadius: "12px", maxWidth: "100%", maxHeight: "100%" }}
              loading="lazy"
            />
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
            </Stack>
          </Content>
        </Link>
      </Paper>
    </Grid>
  );
};

export default Card;

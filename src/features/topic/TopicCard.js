import React from "react";

import {
  Unstable_Grid2 as Grid,
  CardMedia,
  CardContent,
  Typography,
  Link,
  Stack,
  Paper,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";

const placeholderImg =
  "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png";

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

const TopicCard = (prop) => {
  const { data } = prop;
  return (
    <Grid xs={12} sm ={6} item>
      <Paper
        sx={{
          backgroundColor: "grey",
          borderRadius: "12px",
          height: "100%",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        }}
      >
        <Link
          sx={{ display: "flex", height: "100%" }}
          href={data.url}
          underline="none"
          target="_blank"
        >
          <Content>
            <Grid container direction="row">
              <Grid item xs={8}>
                <CardTitle gutterBottom variant="subtitle1" component="div">
                  {data.title}
                </CardTitle>
                <CardSubTitle gutterBottom variant="subtitle2" component="div">
                  {data.title}
                </CardSubTitle>
              </Grid>
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt={data.title}
                  height="86px"
                  width="86px"
                  image={data?.urlToImage ?? placeholderImg}
                  sx={{
                    borderRadius: "12px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  loading="lazy"
                />
              </Grid>
            </Grid>

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

export default TopicCard;

import React from "react";

import { Unstable_Grid2 as Grid, Skeleton } from "@mui/material";

const LoaderGrid = () => {
  return (
    <>
      <Grid spacing={1} item xs={12} sm={6} md={4} minHeight="200px">
        <Skeleton variant="rounded" height={200} />
        <Skeleton variant="rounded" height={23} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      </Grid>
      <Grid spacing={1} item xs={12} sm={6} md={4} minHeight="200px">
        <Skeleton variant="rounded" height={200} />
        <Skeleton variant="rounded" height={23} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      </Grid>
      <Grid spacing={1} item xs={12} sm={6} md={4} minHeight="200px">
        <Skeleton variant="rounded" height={200} />
        <Skeleton variant="rounded" height={23} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      </Grid>
      <Grid spacing={1} item xs={12} sm={6} md={4} minHeight="200px">
        <Skeleton variant="rounded" height={200} />
        <Skeleton variant="rounded" height={23} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      </Grid>
      <Grid spacing={1} item xs={12} sm={6} md={4} minHeight="200px">
        <Skeleton variant="rounded" height={200} />
        <Skeleton variant="rounded" height={23} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      </Grid>
      <Grid spacing={1} item xs={12} sm={6} md={4} minHeight="200px">
        <Skeleton variant="rounded" height={200} />
        <Skeleton variant="rounded" height={23} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      </Grid>
      <Grid spacing={1} item xs={12} sm={6} md={4} minHeight="200px">
        <Skeleton variant="rounded" height={200} />
        <Skeleton variant="rounded" height={23} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      </Grid>
    </>
  );
};

export default LoaderGrid;

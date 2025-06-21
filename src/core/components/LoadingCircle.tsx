import React from "react";
import { CircularProgress, circularProgressClasses } from "@mui/material";

const LoadingCircle = () => (
  <CircularProgress
    sx={(theme) => ({
      color: theme.palette.primary.contrastText,
      [`& .${circularProgressClasses.circle}`]: {
        strokeLinecap: "round",
      },
    })}
  />
);

export default LoadingCircle;

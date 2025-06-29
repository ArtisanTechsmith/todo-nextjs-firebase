import React from "react";
import styles from "./styles/search/search-result.module.scss";
import { Avatar, Paper, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Task from "@/api/Task";

interface Props {
  task: Task;
  sxForceHeight?: string;
}
const SearchResult = (props: Props) => {
  const theme = useTheme();

  return (
    <>
      <Paper
        className={styles.searchResultWrapper}
        elevation={0}
        sx={{
          backgroundColor: theme.palette.secondary.light,
          height: props.sxForceHeight ?? "unset",
          maxHeight: props.sxForceHeight ?? "unset",
        }}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
          <Box sx={{ padding: "8px" }}>
            <Avatar>A</Avatar>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", paddingLeft: 2 }}>
            <Typography
              variant="body1"
              fontWeight="500"
            >
              {props.task.title}
            </Typography>
            <Typography variant="body2">{props.task.description}</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default SearchResult;

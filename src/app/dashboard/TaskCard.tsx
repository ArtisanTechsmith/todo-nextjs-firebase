"use client";
import React from "react";
import { Box, Card, Checkbox, Typography, useTheme } from "@mui/material";
import Task from "@/api/Task";
import { borderRadius } from "@mui/system";

interface Props {
  selected?: boolean;
  task: Task;
}
const TaskCard = (props: Props) => {
  const theme = useTheme();

  return (
    <>
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "fit-content" }}>
          <Checkbox
            disableRipple
            sx={{
              color: theme.palette.primary.contrastText,
              "&.Mui-checked": {
                color: theme.palette.primary.dark,
              },
              height: 80,
            }}
            value={props.selected}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box>
            <Typography
              variant="body1"
              component="div"
            >
              {props.task.title}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              component="div"
              sx={{ opacity: 0.8 }}
            >
              {props.task.description}
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TaskCard;

"use client";
import React, { useEffect } from "react";
import { Box, Card, Checkbox, Typography, useTheme } from "@mui/material";
import Task from "@/api/Task";
import dayjs from "dayjs";
import { borderRadius } from "@mui/system";

interface Props {
  selected?: boolean;
  task: Task;
}
const TaskCard = (props: Props) => {
  const theme = useTheme();

  let dueDiff = dayjs(props.task.dueDate ?? dayjs(Date.parse("99999-12-31"))).diff(dayjs(), "days");
  function getDueDiffText(diff: number): string {
    if (diff < 0) return `Due ${Math.abs(diff)} days ago`;
    if (diff > 0) return `Due in ${diff} days`;
    return "Due today";
  }

  return (
    <>
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 0,
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        {dueDiff <= 7 ? (
          <Box sx={{ position: "absolute", top: 8, right: 16 }}>
            <Typography
              variant="caption"
              fontWeight="500"
              color="#49454F"
            >
              {getDueDiffText(dueDiff)}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
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

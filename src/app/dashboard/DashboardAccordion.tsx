import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import Task from "@/api/Task";
import Category from "@/api/Category";
import TaskCard from "@/app/dashboard/TaskCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  categoriesMap: CategoriesMap;
  categoryTasksMap: CategoryTasksMap;
}
const DashboardAccordion = (props: Props) => {
  const theme = useTheme();

  return (
    <>
      {Object.keys(props.categoryTasksMap).map((key, i) => (
        <Accordion
          key={`Accordion-${i}`}
          defaultExpanded
          elevation={0}
          disableGutters
          sx={{ backgroundColor: theme.palette.background.default }}
        >
          <AccordionSummary
            component="span"
            expandIcon={<KeyboardArrowDownIcon />}
            sx={{ flexDirection: "row-reverse", gap: 1 }}
          >
            {props.categoriesMap[parseInt(key)!].title}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              "&.MuiAccordionDetails-root": {
                padding: 0,
                paddingTop: 1,
              },
            }}
          >
            {props.categoryTasksMap[parseInt(key)!].map((task, j) => (
              <TaskCard
                key={`TaskCard-${j}`}
                task={task}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default DashboardAccordion;
export type CategoryTasksMap = { [key: number]: Task[] };
export type CategoriesMap = { [key: number]: Category };

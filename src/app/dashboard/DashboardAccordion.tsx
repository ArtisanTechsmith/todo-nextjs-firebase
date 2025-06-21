import React from "react";
// import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import Task from "@/api/Task";
import Category from "@/api/Category";
import TaskCard from "@/core/components/TaskCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Accordion from "@/core/components/Accordion";
import { useTheme } from "@mui/material";

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
          key={`dashboard-accordion-${i}`}
          summary={props.categoriesMap[parseInt(key)!].title}
          details={props.categoryTasksMap[parseInt(key)!].map((task, j) => (
            <TaskCard
              key={`TaskCard-${j}`}
              task={task}
            />
          ))}
        />
      ))}
    </>
  );
};

export default DashboardAccordion;
export type CategoryTasksMap = { [key: number]: Task[] };
export type CategoriesMap = { [key: number]: Category };

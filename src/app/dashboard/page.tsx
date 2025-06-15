"use client";
import React, { useEffect, useState } from "react";
import DashboardAccordion, { CategoriesMap, CategoryTasksMap } from "@/app/dashboard/DashboardAccordion";
import Task from "@/api/Task";
import Category from "@/api/Category";
import { Box, CircularProgress, circularProgressClasses, useTheme } from "@mui/material";

interface Props {}
const Dashboard = (props: Props) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  const [categoriesMap, setCategoriesMap] = useState<CategoriesMap>({});
  const [categoryTasksMap, setCategoryTasksMap] = useState<CategoryTasksMap>({});

  useEffect(() => {
    fetchScreenData();
  }, []);

  async function fetchScreenData() {
    setLoading(true);
    let categories = await Category.fetchCategories();
    // Build a hash-map containing categories by categoryId for quick references
    setCategoriesMap(
      categories.reduce((acc: CategoriesMap, cat) => {
        acc[cat.id!] = cat;
        return acc;
      }, {}),
    );

    let tasks = await Task.fetchTasks(Object.keys(categoriesMap).map((r) => parseInt(r)));
    // Build a multi-map data structure containing multiple tasks per categoryId
    setCategoryTasksMap(
      tasks.reduce((acc: CategoryTasksMap, task) => {
        if (!acc[task.categoryId]) acc[task.categoryId] = [];
        acc[task.categoryId].push(task);
        return acc;
      }, {}),
    );

    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 2, marginBottom: 2 }}>
          <CircularProgress
            sx={(theme) => ({
              color: theme.palette.primary.contrastText,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round",
              },
            })}
          />
        </Box>
      ) : (
        <DashboardAccordion
          categoriesMap={categoriesMap}
          categoryTasksMap={categoryTasksMap}
        />
      )}
    </>
  );
};

export default Dashboard;

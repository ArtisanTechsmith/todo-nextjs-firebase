"use client";
import React, { useEffect, useState } from "react";
import DashboardAccordion, { CategoriesMap, CategoryTasksMap } from "@/app/dashboard/DashboardAccordion";
import Task from "@/api/Task";
import Category from "@/api/Category";

interface Props {}
const Dashboard = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [categoriesMap, setCategoriesMap] = useState<CategoriesMap>({});
  const [categoryTasksMap, setCategoryTasksMap] = useState<CategoryTasksMap>({});

  useEffect(() => {
    fetchScreenData();
  }, []);

  async function fetchScreenData() {
    setLoading(true);
    let categories = await fetchCategories();
    // Build a hash-map containing categories by categoryId for quick references
    setCategoriesMap(
      categories.reduce((acc: CategoriesMap, cat) => {
        acc[cat.id!] = cat;
        return acc;
      }, {}),
    );

    let tasks = await fetchTasks(Object.keys(categoriesMap).map((r) => parseInt(r)));
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
  async function fetchCategories(): Promise<Category[]> {
    // Return some temporary sample data
    return [
      {
        id: 1,
        title: "Category 1",
      },
      {
        id: 2,
        title: "Category 2",
      },
    ];
  }
  async function fetchTasks(categoryIds: number[]): Promise<Task[]> {
    // Return some temporary sample data
    return [
      {
        id: 1,
        title: "Task 1",
        description: "Task 1 description",
        categoryId: 1,
      },
      {
        id: 2,
        title: "Task 2",
        description: "Task 2 description",
        categoryId: 1,
      },
      {
        id: 3,
        title: "Task 3",
        description: "Task 3 description",
        categoryId: 2,
      },
      {
        id: 4,
        title: "Task 4",
        description: "Task 4 description",
        categoryId: 2,
      },
    ];
  }

  return (
    <>
      <DashboardAccordion
        categoriesMap={categoriesMap}
        categoryTasksMap={categoryTasksMap}
      />
    </>
  );
};

export default Dashboard;

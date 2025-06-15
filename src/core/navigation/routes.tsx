import React from "react";
import DashboardComponent from "@/app/dashboard/page";
import SearchComponent from "@/app/search/page";
import AccountComponent from "@/app/account/page";
import AddTodoComponent from "@/app/add-todo/page";
import {
  Folder as HomeIcon,
  Search as SearchIcon,
  AccountCircleOutlined as AccountIcon,
  AddCircleOutline as AddIcon,
} from "@mui/icons-material";

type Route = {
  index: number;
  label: string;
  path: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};
type RouteMapByPath = { [key: string]: Route };
type RouteMapByIndex = { [key: number]: Route };

export const dashboard: Route = {
  index: 0,
  label: "Dashboard",
  path: "dashboard",
  icon: <HomeIcon />,
  content: <DashboardComponent />,
};
export const search: Route = {
  index: 1,
  label: "Search",
  path: "search",
  icon: <SearchIcon />,
  content: <SearchComponent />,
};
export const account: Route = {
  index: 2,
  label: "Account",
  path: "account",
  icon: <AccountIcon />,
  content: <AccountComponent />,
};
export const addTodo: Route = {
  index: 3,
  label: "Add Todo",
  path: "add-todo",
  icon: <AddIcon />,
  content: <AddTodoComponent />,
};

export const routes: Route[] = [dashboard, search, account, addTodo];
export const routesMapByPath = routes.reduce((acc: RouteMapByPath, r): RouteMapByPath => {
  acc[r.path] = r;
  return acc;
}, {});
export const routesMapByIndex: RouteMapByIndex = routes.reduce((acc: RouteMapByIndex, r): RouteMapByIndex => {
  acc[r.index] = r;
  return acc;
}, {});

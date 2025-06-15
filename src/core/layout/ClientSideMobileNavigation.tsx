"use client";
import React, { useEffect, useState } from "react";
import { Fade } from "@mui/material";
import Dashboard from "@/app/dashboard/page";
import Search from "@/app/search/page";
import Account from "@/app/account/page";
import AddTodo from "@/app/add-todo/page";
type TabsMap = {
  [key: string]: {
    index: number;
    content: React.ReactNode;
  };
};

interface Props {
  page?: string;
}
const ClientSideMobileNavigation = (props: Props) => {
  const tabsMap: TabsMap = {
    dashboard: {
      index: 0,
      content: <Dashboard />,
    },
    search: {
      index: 1,
      content: <Search />,
    },
    account: {
      index: 2,
      content: <Account />,
    },
    "add-todo": {
      index: 3,
      content: <AddTodo />,
    },
  };
  const [tab, setTab] = useState<number>(null!);

  useEffect(() => {
    const url = new URL(window?.location.href);
    const params = new URLSearchParams(url.search);
    setTab(tabsMap[`${params.get("landing")}`]?.index);
  }, []);

  useEffect(() => {
    if (!props.page) return;
    setTab(tabsMap[props.page]?.index);
  }, [props.page]);

  return (
    <>
      {Object.keys(tabsMap).map((key: string, index: number) => (
        <Fade
          key={`mobile-spa-rendering-tab-${index}`}
          in={tab === index}
          unmountOnExit
        >
          <div role="tabpanel">{tab === index ? tabsMap[key].content : <></>}</div>
        </Fade>
      ))}
    </>
  );
};

export default ClientSideMobileNavigation;

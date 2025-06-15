"use client";
import React, { useEffect, useState } from "react";
import { Fade } from "@mui/material";
import { routesMapByPath as tabsMap } from "@/core/navigation/routes";

interface Props {
  page?: string;
}
const ClientSideMobileNavigation = (props: Props) => {
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

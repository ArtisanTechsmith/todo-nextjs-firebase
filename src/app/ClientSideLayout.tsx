"use client";
import React, { useState } from "react";
import ClientSideMobileNavigation from "@/core/layout/ClientSideMobileNavigation";
import { Fade } from "@mui/material";
import { Box } from "@mui/system";
import AppBottomNavigation from "@/core/layout/AppBottomNavigation";

interface Props {}
const ClientSideLayout = (props: Props, children?: React.ReactNode | React.ReactNode[]) => {
  const [page, setPage] = useState<string>(null!);
  return (
    <>
      <ClientSideMobileNavigation page={page} />
      {/*<Fade*/}
      {/*  in*/}
      {/*  unmountOnExit*/}
      {/*>*/}
      {/*  <Box>{children}</Box>*/}
      {/*</Fade>*/}
      <AppBottomNavigation onNavigate={(goTo: string) => setPage(goTo)} />
    </>
  );
};

export default ClientSideLayout;

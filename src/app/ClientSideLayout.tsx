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
      {/* Handle content-rendering client-side and in-sync with `AppBottomNavigation` on mobile. Renders application */}
      {/* as a Single-Page Application (SPA) to be provided as a Progressive Web Application (PWA) for mobile */}
      <ClientSideMobileNavigation page={page} />

      {/* Provide mobile-friendly "Bottom Bar" navigation when mobile device is detected via user-agent sniffing */}
      <AppBottomNavigation onNavigate={(goTo: string) => setPage(goTo)} />
    </>
  );
};

export default ClientSideLayout;

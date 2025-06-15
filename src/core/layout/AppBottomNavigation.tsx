"use client";
import styles from "./styles-AppBottomNavigation.module.scss";
import React from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/core/navigation/routes";
import { BottomNavigation, BottomNavigationAction, useTheme } from "@mui/material";
import { Box } from "@mui/system";

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  goTo: string;
}
interface Props {
  onNavigate: (goTo: string) => void;
}
const AppBottomNavigation = (props: Props) => {
  const theme = useTheme();
  const router = useRouter();

  const [value, setValue] = React.useState<number>(0);

  function goTo(goTo: string) {
    router.push(goTo);
    props.onNavigate(goTo);
  }

  return (
    <Box
      component="div"
      bgcolor={theme.palette.primary.light}
    >
      <BottomNavigation
        sx={{
          backgroundColor: theme.palette.primary.main,
          paddingTop: 5,
          paddingBottom: 4,
        }}
        className={styles.AppBottomNavigation}
        value={value}
        onChange={(e, v) => setValue(v)}
      >
        {routes.map((item, index) => (
          <BottomNavigationAction
            key={index}
            className={styles.AppBottomNavigationItem}
            showLabel={true}
            label={
              <Box
                className={styles.NavigationItemLabel}
                component="span"
                color={theme.palette.secondary.main}
              >
                {item.label}
              </Box>
            }
            icon={
              <Box
                className={styles.SvgIconWrapper}
                component="div"
                color={theme.palette.primary.contrastText}
                bgcolor={value === index ? theme.palette.primary.light : ""}
              >
                {item.icon}
              </Box>
            }
            onClick={() => {
              goTo(item.path);
            }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};

export default AppBottomNavigation;

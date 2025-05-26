'use client'
import styles from './styles-AppBottomNavigation.module.scss'
import React from "react";
import {
    Folder as HomeIcon,
    Search as SearchIcon,
    AccountCircleOutlined as AccountIcon,
    AddCircleOutline as AddIcon,
} from "@mui/icons-material";
import {BottomNavigation, BottomNavigationAction, useTheme} from "@mui/material";
import {Box} from "@mui/system";

interface NavigationItem {
    label: string
    icon: React.ReactNode
}

const AppBottomNavigation = () => {
    const [value, setValue] = React.useState<number>(0);
    const theme = useTheme();

    const navigationItems: NavigationItem[] = [
        {label: 'Home', icon: <HomeIcon/>},
        {label: 'Search', icon: <SearchIcon/>},
        {label: 'Account', icon: <AccountIcon/>},
        {label: 'Add', icon: <AddIcon/>},
    ]

    return (
        <Box component="div" bgcolor={theme.palette.primary.light}>
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
                {navigationItems.map((item, index) => (
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
                                bgcolor={value === index ? theme.palette.primary.light : ''}
                            >
                                {item.icon}
                            </Box>
                        }
                    />
                ))}
            </BottomNavigation>
        </Box>
    )
}

export default AppBottomNavigation

'use client'
import React, {Children, ReactNode} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f3edf7',
            dark: '',
            light: '#e8def8',
            contrastText: '#4a4459'
        },
        secondary: {
            main: '#625b71',
        }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
});

const AppThemeProvider = ({ children }: {children: ReactNode}) => {
    return (<>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </>)
}

export default AppThemeProvider
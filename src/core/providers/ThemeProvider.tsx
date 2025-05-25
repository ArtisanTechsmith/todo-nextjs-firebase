'use client'
import React, {Children, ReactNode} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
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
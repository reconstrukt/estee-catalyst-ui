'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from '@/theme/theme';
import themeGlobalCss from '@/theme/themeGlobalCss';
import { ApplicationPortalProvider } from '../application-portal/ApplicationContext';

export default function Providers({ children }) {
    return (
        <>
            <CssBaseline />
            {themeGlobalCss}
            <ThemeProvider theme={theme}>
                <ApplicationPortalProvider>
                    {children}
                </ApplicationPortalProvider>
            </ThemeProvider>
        </>
    );
}

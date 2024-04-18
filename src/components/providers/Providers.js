'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from '@/theme/theme';
import themeGlobalCss from '@/theme/themeGlobalCss';

export default function Providers({ children }) {
    return (
        <>
            <CssBaseline />
            {themeGlobalCss}
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </>
    );
}

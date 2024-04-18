'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';

export default function PageLayout({
    children,
    hasFooter = true,
    transparentHeader = true,
}) {
    return (
        <Box component="main">
            <Header transparent={transparentHeader} />

            {children}

            {hasFooter && <Box>Footer</Box>}
        </Box>
    );
}

'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function PageLayout({
    children,
    hasFooter = true,
    transparentHeader = true,
}) {
    return (
        <Box component="main">
            <Header transparentHeader={transparentHeader} />

            {children}

            {hasFooter && <Footer />}
        </Box>
    );
}

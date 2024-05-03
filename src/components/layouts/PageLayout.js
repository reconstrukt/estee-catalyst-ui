'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ApplicationPortal from '../application-portal/ApplicationPortal';

export default function PageLayout({
    children,
    hasFooter = true,
    transparentHeader = true,
}) {
    return (
        <Box component="main">
            <Header transparentHeader={transparentHeader} />

            <ApplicationPortal />

            {children}

            {hasFooter && <Footer />}
        </Box>
    );
}

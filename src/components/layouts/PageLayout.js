'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ApplicationPortalProvider } from '../application-portal/ApplicationContext';
import ApplicationPortal from '../application-portal/ApplicationPortal';

export default function PageLayout({
    children,
    hasFooter = true,
    transparentHeader = true,
}) {
    return (
        <Box component="main">
            <ApplicationPortalProvider>
                <Header transparentHeader={transparentHeader} />

                <ApplicationPortal />

                {children}

                {hasFooter && <Footer />}
            </ApplicationPortalProvider>
        </Box>
    );
}

import React from 'react';
import { Box } from '@mui/material';

export default function Section({ children, sx }) {
    return (
        <Box
            component="section"
            sx={{
                py: {
                    xs: 12,
                    md: 15,
                },
                ...sx,
            }}
        >
            <Box
                sx={{
                    px: 2,
                    textAlign: 'center',
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

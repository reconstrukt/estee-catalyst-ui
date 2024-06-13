import React from 'react';
import { Box } from '@mui/material';

export default function GridItem({ children, sx }) {
    return (
        <Box
            sx={{
                mx: 1,
                ...sx,
            }}
        >
            {children}
        </Box>
    );
}

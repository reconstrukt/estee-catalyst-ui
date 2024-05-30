import React from 'react';
import { Box } from '@mui/material';

export default function GridItem({ children, sx }) {
    return (
        <Box
            sx={{
                flex: {
                    xs: '1 0 40%',
                    md: '1 0 28%',
                },
                display: 'flex',
                justifyContent: 'center',
                ...sx,
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: 170,
                        md: 222,
                    },
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

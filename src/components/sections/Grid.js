import React from 'react';
import { Box } from '@mui/material';

export default function Grid({ children, innerSx }) {
    return (
        <Box
            sx={{
                py: 10,
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '50% 50%',
                        md: '33% 33% 33%',
                    },

                    width: '100%',
                    maxWidth: {
                        xs: 450,
                        md: 934,
                    },
                    margin: '0 auto',
                    rowGap: {
                        xs: 4,
                        md: 10,
                    },
                    ...innerSx,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

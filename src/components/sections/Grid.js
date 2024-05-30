import React from 'react';
import { Box } from '@mui/material';

export default function Grid({ children, innerSx }) {
    return (
        <Box
            sx={{
                py: 10,
                px: 1,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '100%',
                    maxWidth: 934,
                    margin: 'auto',
                    columnGap: {
                        xs: 1,
                        md: 4,
                    },
                    rowGap: {
                        xs: 2,
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

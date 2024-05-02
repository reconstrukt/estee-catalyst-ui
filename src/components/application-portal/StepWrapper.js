import React from 'react';
import { Stack, Box } from '@mui/material';

export default function StepWrapper({ children, sx }) {
    return (
        <Stack
            sx={{
                minHeight: '100%',
                textAlign: 'center',
                // justifyContent: 'center',
                alignItems: 'center',
                px: {
                    xs: 0,
                    md: 2,
                },
                ...sx,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: {
                        xs: '100%',
                        sm: 698,
                        margin: '0 auto',
                    },
                }}
            >
                {children}
            </Box>
        </Stack>
    );
}

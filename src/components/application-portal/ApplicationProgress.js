import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export default function ApplicationProgress({ step }) {
    const width = `${(step - 1) * 10}%`;

    return (
        <Stack alignItems="center" spacing={0.5}>
            <Typography variant="button">{width} DONE</Typography>
            <Box
                sx={{
                    height: 2,
                    width: 200,
                    backgroundColor: '#d9d9d9',
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                        width: width,
                        backgroundColor: 'black.main',
                        transition: 'all 0.3s ease',
                    }}
                ></Box>
            </Box>
        </Stack>
    );
}

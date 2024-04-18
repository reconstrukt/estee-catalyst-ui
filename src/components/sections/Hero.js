import { Box } from '@mui/material';
import React from 'react';

export default function Hero({ backgroundImage, children, sx }) {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                px: 2,
                py: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

                backgroundImage: backgroundImage
                    ? `url(${backgroundImage})`
                    : 'none',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',

                ...sx,
            }}
        >
            {children}
        </Box>
    );
}

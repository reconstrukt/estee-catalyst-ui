import { Box } from '@mui/material';
import Image from 'next/image';
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
                position: 'relative',

                ...sx,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    display: {
                        xs: 'block',
                        md: 'none',
                    },
                }}
            >
                <Image
                    alt=""
                    src={backgroundImage.xs}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                    }}
                />
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    display: {
                        xs: 'none',
                        md: 'block',
                    },
                }}
            >
                <Image
                    alt=""
                    src={backgroundImage.md}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                    }}
                />
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 10,
                    textShadow: '0px 0px 30px #0000004D',
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

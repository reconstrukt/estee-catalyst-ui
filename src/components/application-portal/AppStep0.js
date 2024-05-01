import { Box, InputLabel, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import PortalImage from '../../../assets/images/app-portal.jpg';
import Image from 'next/image';
import { LoadingButton } from '@mui/lab';

export default function AppStep0() {
    return (
        <Stack
            sx={{
                minHeight: '100%',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                px: {
                    xs: 0,
                    md: 2,
                },
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
                <Box>
                    <Image
                        src={PortalImage.src}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>

                <Stack
                    spacing={2.5}
                    mt={2.5}
                    sx={{
                        px: {
                            xs: 2,
                            md: 0,
                        },
                    }}
                >
                    <Typography variant="h2">
                        CATALYSTS APPLICATION PORTAL
                    </Typography>
                    <Typography>Get started, or continue</Typography>

                    <Box>
                        <InputLabel>Enter email address</InputLabel>
                        <TextField fullWidth />
                    </Box>
                </Stack>
                <Box mt={8}>
                    <LoadingButton
                        variant="contained"
                        color="black"
                        sx={{
                            width: 221,
                        }}
                    >
                        START
                    </LoadingButton>
                </Box>
            </Box>
        </Stack>
    );
}

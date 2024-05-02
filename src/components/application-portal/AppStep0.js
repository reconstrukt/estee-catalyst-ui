import { Box, InputLabel, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import PortalImage from '../../../assets/images/app-portal.jpg';
import Image from 'next/image';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';
import StepWrapper from './StepWrapper';

export default function AppStep0() {
    const [email, setEmail] = useState('');
    const { step, setStep } = useApplicationPortal();

    const handleStart = () => {
        if (!email) return;

        // TODO: make API call
        // then

        setStep(1);
    };

    return (
        <StepWrapper
            sx={{
                justifyContent: 'center',
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
                    <TextField
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
            </Stack>
            <Box mt={8}>
                <LoadingButton
                    variant="contained"
                    color="black"
                    sx={{
                        width: 221,
                    }}
                    onClick={handleStart}
                >
                    START
                </LoadingButton>
            </Box>
        </StepWrapper>
    );
}

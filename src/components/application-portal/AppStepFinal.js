import {
    Box,
    Button,
    InputLabel,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import PortalImage from '../../../assets/images/app-portal.jpg';
import Image from 'next/image';
import StepWrapper from './StepWrapper';
import Link from 'next/link';

export default function AppStepFinal() {
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
                <Typography variant="h2">APPLICATION PORTAL</Typography>
                <Typography>Thank you for applying</Typography>
            </Stack>
            <Box mt={8}>
                <Link href="/">
                    <Button color="black" variant="contained">
                        BACK TO WEBSITE
                    </Button>
                </Link>
            </Box>
        </StepWrapper>
    );
}

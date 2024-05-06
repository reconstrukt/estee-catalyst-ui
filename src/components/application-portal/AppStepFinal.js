import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import PortalImage from '../../../assets/images/app-portal.jpg';
import Image from 'next/image';
import StepWrapper from './StepWrapper';
import useApplicationPortal from './ApplicationContext';
import { useRouter } from 'next/navigation';

export default function AppStepFinal() {
    const { setDialogOpen, resetApplication } = useApplicationPortal();
    const router = useRouter();

    const handleBackToWebsite = () => {
        router.push('/');
        setDialogOpen(false);
        resetApplication();
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
                <Typography variant="h2">APPLICATION PORTAL</Typography>
                <Typography>Thank you for applying</Typography>
            </Stack>
            <Box mt={8}>
                <Button
                    color="black"
                    variant="contained"
                    onClick={handleBackToWebsite}
                >
                    BACK TO WEBSITE
                </Button>
            </Box>
        </StepWrapper>
    );
}

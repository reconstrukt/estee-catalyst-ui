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
                <Typography variant="h2">THANK YOU FOR APPLYING!</Typography>
                <Typography>
                    You’re all set. We have received your application. If you
                    are chosen as a finalist, we will contact you in September
                    2024. For any questions, please reach out at{' '}
                    <a href="mailto:hello@thecatalystsworld.com">
                        hello@thecatalystsworld.com
                    </a>
                    . Follow us @thecatalystsworld on TikTok and Instagram for
                    the latest news.
                    <br />
                    <br />
                    Good luck!
                    <br />
                    <br />
                    The Catalysts Team
                </Typography>
            </Stack>
            <Box mt={4}>
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

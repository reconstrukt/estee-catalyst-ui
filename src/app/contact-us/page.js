import { Box, Typography, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';

import PrizesImage from '../../../assets/images/the-prizes.jpg';

export default function ContactUs() {
    return (
        <PageLayout>
            <Hero
                sx={{
                    minHeight: '85vh',
                }}
                backgroundImage={PrizesImage.src}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        color: 'white.main',
                        maxWidth: 1164,
                    }}
                >
                    <Typography variant="h1" mb={1}>
                        CONTACT US
                    </Typography>
                </Box>
            </Hero>

            <Stack
                sx={{
                    flexDirection: 'row',
                    textAlign: 'center',
                }}
            >
                <Stack
                    spacing={6}
                    sx={{
                        flex: 1,
                        backgroundColor: 'pink.main',
                        py: 14,
                        px: 3,
                        alignItems: 'center',
                    }}
                >
                    <Stack alignItems="center" spacing={2}>
                        <Typography variant="h2">
                            COMPANIES INTERESTED
                            <br />
                            IN SUPPORTING BEAUTY&YOU
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: 600,
                            }}
                        >
                            <a href="mailto:applications@beautyandyouawards.com">
                                applications@beautyandyouawards.com
                            </a>
                        </Typography>
                    </Stack>

                    <Stack alignItems="center" spacing={2}>
                        <Typography variant="h2">
                            QUESTIONS ABOUT APPLICATIONS
                            <br />
                            AND THE APPLICATION PROCESS
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: 600,
                            }}
                        >
                            <a href="mailto:partners@beautyandyouawards.com">
                                partners@beautyandyouawards.com
                            </a>
                        </Typography>
                    </Stack>

                    <Stack alignItems="center" spacing={2}>
                        <Typography variant="h2">MEDIA REQUESTS</Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: 600,
                            }}
                        >
                            <a href="mailto:media@beautyandyouawards.com">
                                media@beautyandyouawards.com
                            </a>
                        </Typography>
                    </Stack>

                    <Stack alignItems="center" spacing={2}>
                        <Typography variant="h2">
                            ANY OTHER QUESTIONS?
                            <br />
                            PLEASE CONTACT US BELOW
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: 600,
                            }}
                        >
                            <a href="mailto:hello@beautyandyouawards.com">
                                hello@beautyandyouawards.com
                            </a>
                        </Typography>
                    </Stack>

                    <Stack alignItems="center" spacing={2}>
                        <Typography variant="h2">CONNECT ON SOCIAL</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </PageLayout>
    );
}

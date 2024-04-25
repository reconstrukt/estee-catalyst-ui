import { Box, Typography, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';

import PressImage from '../../../assets/images/press.jpg';
import press from '@/cms/press';
import Link from 'next/link';

export default function ContactUs() {
    return (
        <PageLayout>
            <Hero backgroundImage={PressImage.src}>
                <Box
                    sx={{
                        textAlign: 'center',
                        color: 'white.main',
                        maxWidth: 1164,
                    }}
                >
                    <Typography variant="h1" mb={1}>
                        PRESS
                    </Typography>
                    <Typography variant="subtitle1">
                        Read what others say about us
                    </Typography>
                </Box>
            </Hero>

            <Box
                sx={{
                    py: 10,
                    px: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        width: '100%',
                        maxWidth: 934,
                        margin: 'auto',
                        columnGap: {
                            xs: 1,
                            md: 4,
                        },
                        rowGap: {
                            xs: 2,
                            md: 10,
                        },
                    }}
                >
                    {press.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: {
                                    xs: '1 0 40%',
                                    md: '1 0 28%',
                                },
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Stack
                                spacing={2}
                                sx={{
                                    width: {
                                        xs: 170,
                                        md: 222,
                                    },
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: {
                                            xs: 170,
                                            md: 222,
                                        },
                                        height: {
                                            xs: 129,
                                            md: 165,
                                        },
                                        border: '1px solid',
                                        borderColor: 'black.main',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.logo}
                                </Box>

                                <Box>
                                    <Typography variant="h4" sx={{ mb: 0.5 }}>
                                        {item.date}
                                    </Typography>
                                    <Typography variant="body1">
                                        {item.title}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Link href={item.link} target="_blank">
                                        READ MORE
                                    </Link>
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                </Box>
            </Box>
        </PageLayout>
    );
}

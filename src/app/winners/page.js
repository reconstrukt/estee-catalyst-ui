import { Box, Typography, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';

import winners from '@/cms/winners';
import Link from 'next/link';

import winmob from '../../../assets/images/winmob.jpg';
import win from '../../../assets/images/win.jpg';

export default function ContactUs() {
    return (
        <PageLayout>
            <Hero
                backgroundImage={{
                    xs: winmob.src,
                    md: win.src,
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        color: 'white.main',
                        maxWidth: 1164,
                    }}
                >
                    <Typography variant="h1" mb={1}>
                        THE WINNERS
                    </Typography>
                    <Typography variant="subtitle1">
                        Meet the 2024 Winners
                    </Typography>
                </Box>
            </Hero>

            <Box>
                {winners.map((item, i) => (
                    <Box key={i}>
                        <Stack
                            sx={{
                                flexDirection: {
                                    xs: 'column',
                                    md: i % 2 === 0 ? 'row' : 'row-reverse',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    minHeight: {
                                        xs: '100vw',
                                        md: '100vh',
                                    },
                                    flex: {
                                        md: '1 0 50%',
                                    },
                                    backgroundImage: `url(${item.image.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                    textAlign: 'center',
                                }}
                            ></Box>

                            <Box
                                sx={{
                                    flex: {
                                        md: '1 0 50%',
                                    },
                                    px: {
                                        xs: 2,
                                    },
                                    py: {
                                        xs: 10,
                                    },
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Stack
                                    spacing={10}
                                    sx={{
                                        maxWidth: 680,
                                    }}
                                >
                                    <Stack alignItems="center" spacing={0.5}>
                                        {item.preTitle && (
                                            <Typography variant="button">
                                                {item.preTitle}
                                            </Typography>
                                        )}
                                        {item.title && (
                                            <Typography variant="h2">
                                                {item.title}
                                            </Typography>
                                        )}
                                        {item.postTitle && (
                                            <Typography variant="button">
                                                {item.postTitle}
                                            </Typography>
                                        )}
                                    </Stack>

                                    <Stack
                                        sx={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        {item.copy && (
                                            <Typography variant="body1">
                                                {item.copy}
                                            </Typography>
                                        )}

                                        {item.links && (
                                            <Stack
                                                mt={2}
                                                spacing={2}
                                                direction="row"
                                                justifyContent="center"
                                                sx={{
                                                    textTransform: 'uppercase',
                                                    textDecoration: 'underline',
                                                }}
                                            >
                                                {item.links.map((link, j) => (
                                                    <Link href={link.href}>
                                                        {link.text}
                                                    </Link>
                                                ))}
                                            </Stack>
                                        )}
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                ))}
            </Box>
        </PageLayout>
    );
}

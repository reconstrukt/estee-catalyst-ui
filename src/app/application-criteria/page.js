'use client';

import { Box, Typography, Button, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import Image from 'next/image';

import criteriamob from '../../../assets/images/criteriamob.jpg';
import criteria from '../../../assets/images/criteria.jpg';
import useApplicationPortal from '@/components/application-portal/ApplicationContext';

export default function ApplicationCriteria() {
    const { setDialogOpen } = useApplicationPortal();

    return (
        <PageLayout>
            <Hero
                sx={{
                    backgroundImage: {
                        xs: `url(${criteriamob.src})`,
                        md: `url(${criteria.src})`,
                    },
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        color: 'white.main',
                    }}
                >
                    <Typography variant="h1" mb={1}>
                        APPLICATION
                        <br />
                        CRITERIA
                    </Typography>
                    <Typography variant="subtitle1">
                        What you need to know before applying
                    </Typography>

                    <Box mt={2}>
                        <Button
                            variant="outlined"
                            color="white"
                            onClick={() => setDialogOpen(true)}
                        >
                            START APPLICATION
                        </Button>
                    </Box>
                </Box>
            </Hero>

            <Stack
                sx={{
                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },
                    textAlign: 'center',
                }}
            >
                <Stack
                    spacing={4}
                    sx={{
                        flex: 1,
                        backgroundColor: 'pink.main',
                        py: 12,
                        px: 3,
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h2">CRITERIA</Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 668,
                            textAlign: 'left',

                            '& li': {
                                fontSize: 20,
                            },
                        }}
                    >
                        1. Applicants to The Catalysts 2024 must be at least 21
                        years of age, as of December 31st 2023.
                        <br />
                        <br />
                        2. Applications should be submitting ideas and business
                        plans focused on the following categories:
                        <br />
                        <br />
                        <ul>
                            <li>Makeup</li>
                            <li>Skin care</li>
                            <li>Body care</li>
                            <li>Hair care</li>
                            <li>Fragrance</li>
                            <li>Home fragrance</li>
                            <li>Creative storytelling – a visual concept,</li>
                            <li>for example an exhibition, book, or film </li>
                            <li>Retail or experiential concept</li>
                        </ul>
                    </Typography>
                </Stack>

                <Stack
                    spacing={4}
                    sx={{
                        flex: 1,
                        backgroundColor: 'red.main',
                        py: 12,
                        px: 3,
                        alignItems: 'center',
                    }}
                >
                    <Stack>
                        <Typography variant="h2">
                            WHAT YOU WILL NEED TO COMPLETE YOUR APPLICATION
                        </Typography>
                        <Typography variant="body1">
                            (may vary depending on category)
                        </Typography>
                    </Stack>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 668,
                            textAlign: 'left',
                            '& li': {
                                fontSize: 20,
                            },
                        }}
                    >
                        1. Company details, if applicable
                        <br />
                        <br />
                        2. Country of residence
                        <br />
                        <br />
                        3. Links to your social channels
                        <br />
                        <br />
                        4. One page executive summary about your business, idea
                        or creative work. Please make sure you cover the
                        following points in your summary:
                        <br />
                        <ul>
                            <li>
                                Vision for Beauty—What inspires you. Market
                                opportunity – why you have identified this area
                                as a space you feel would benefit from your idea
                            </li>
                            <li>
                                Problem and solution – what problem your idea
                                will solve, or what gap it would fill
                            </li>
                            <li>Brand, product or experience idea</li>
                            <li>Your audience or community</li>
                            <li>
                                Distribution plan – where you see your product
                                being sold, and on which channels
                            </li>
                            <li>
                                Why your company should win – what makes you
                                deserving of fundingA Tiktok (or other video
                                submission if Tiktok is not available)
                                explaining Your Vision for Beauty and tagged
                                #JointheCatalysts.
                            </li>
                        </ul>
                    </Typography>
                </Stack>
            </Stack>
        </PageLayout>
    );
}

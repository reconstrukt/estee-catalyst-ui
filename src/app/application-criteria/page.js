'use client';

import { Box, Typography, Button, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import Image from 'next/image';

import criteriamob from '../../../assets/images/criteriamob.jpg';
import criteria from '../../../assets/images/criteria.jpg';
import useApplicationPortal from '@/components/application-portal/ApplicationContext';
import Section from '@/components/sections/Section';
import sharedStyles from '@/theme/sharedStyles';

export default function ApplicationCriteria() {
    const { setDialogOpen } = useApplicationPortal();

    return (
        <PageLayout>
            <Hero
                backgroundImage={{
                    xs: criteriamob.src,
                    md: criteria.src,
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        color: 'white.main',
                    }}
                >
                    <Typography variant="h1" mb={1}>
                        APPLICATION CRITERIA
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

            <Section
                sx={{
                    backgroundImage: sharedStyles.linearGradient.orangeRed,
                }}
            >
                <Stack spacing={8} sx={{ maxWidth: 1172, margin: '0 auto' }}>
                    <Typography variant="h1">WHO CAN APPLY</Typography>

                    <Stack spacing={3}>
                        <Typography variant="h2">NEW FOUNDERS</Typography>
                        <Typography>
                            Do you have a breakthrough product innovation or
                            business idea for the beauty industry that needs
                            funding to become a reality? The Catalysts is
                            seeking founders who have new brand and product
                            concepts and need support to make them happen.
                        </Typography>
                    </Stack>

                    <Stack spacing={3}>
                        <Typography variant="h2">
                            EXISTING BRAND FOUNDERS
                        </Typography>
                        <Typography>
                            Whether a fashion designer, retailer, or another
                            business entirely, we want to hear from those who
                            have already built a brand and want to extend its
                            creativity into the world of beauty through a
                            product line or limited edition collection.
                        </Typography>
                    </Stack>

                    <Stack spacing={3}>
                        <Typography variant="h2">
                            CREATIVE STORYTELLERS
                        </Typography>
                        <Typography>
                            Beyond brands, The Catalysts is open to creative
                            practitioners who would use funding to create work
                            such as a film, book, or podcast that speaks to new
                            ideas and new audiences in beauty.
                        </Typography>
                    </Stack>
                </Stack>
            </Section>

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
                    <Box
                        sx={{
                            maxWidth: 600,
                            px: 5,
                            textAlign: 'left',
                        }}
                    >
                        <Stack mb={4}>
                            <Typography variant="h2">CRITERIA</Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    a: {
                                        textDecoration: 'underline',
                                    },
                                    textAlign: 'left',
                                }}
                            >
                                <br />
                                Please review the{' '}
                                <Link href="/terms-and-conditions">
                                    Terms & Conditions
                                </Link>{' '}
                                for full details
                            </Typography>
                        </Stack>

                        <Typography
                            variant="body1"
                            sx={{
                                '& ul': {
                                    paddingLeft: '20px',
                                },

                                '& li': {
                                    fontSize: 20,
                                },
                            }}
                        >
                            1. Applicants to The Catalysts 2024 must be at least
                            21 years of age, as of December 31st 2023.
                            <br />
                            <br />
                            2. Applications should be submitting ideas and
                            business plans focused on the following categories:
                            <br />
                            <br />
                            <ul>
                                <li>Makeup</li>
                                <li>Skin care</li>
                                <li>Body care</li>
                                <li>Hair care</li>
                                <li>Fragrance</li>
                                <li>Home fragrance</li>
                                <li>
                                    Creative storytelling – a visual concept,
                                    for example an exhibition, book, or film{' '}
                                </li>
                                <li>Retail or experiential concept</li>
                            </ul>
                        </Typography>
                    </Box>
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
                    <Box
                        sx={{
                            maxWidth: 600,
                            px: 5,
                            textAlign: 'left',
                        }}
                    >
                        <Stack mb={4}>
                            <Typography variant="h2">
                                WHAT YOU WILL NEED TO COMPLETE YOUR APPLICATION
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    a: {
                                        textDecoration: 'underline',
                                    },
                                    textAlign: 'left',
                                }}
                            >
                                <br />
                                Please review the{' '}
                                <Link href="/terms-and-conditions">
                                    Terms & Conditions
                                </Link>{' '}
                                for full details
                            </Typography>
                        </Stack>

                        <Typography
                            variant="body1"
                            sx={{
                                '& ul': {
                                    paddingLeft: '20px',
                                },
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
                            4. One page executive summary about your business,
                            idea or creative work. Please make sure you cover
                            the following points in your summary:
                            <br />
                            <ul>
                                <li>Vision for beauty – What inspires you.</li>
                                <li>
                                    Market opportunity – why you have identified
                                    this area as a space you feel would benefit
                                    from your idea
                                </li>
                                <li>
                                    Problem and solution – what problem your
                                    idea will solve, or what gap it would fill
                                </li>
                                <li>Brand, product or experience idea</li>
                                <li>Your audience or community</li>
                                <li>
                                    Why should you win – what makes you
                                    deserving of funding
                                </li>
                                <li>
                                    A Tiktok (or other video submission if
                                    Tiktok is not available) explaining Your
                                    Vision for Beauty and tagged
                                    #JoinTheCatalysts
                                </li>
                            </ul>
                            <br />
                            Applications are due by 11:59:59 on August 4, 2024
                            EST.
                        </Typography>
                    </Box>
                </Stack>
            </Stack>

            <Section>
                <Stack spacing={8}>
                    <Stack
                        spacing={3}
                        sx={{
                            '& a': {
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        <Typography variant="h2">ANY QUESTIONS?</Typography>
                        <Typography>
                            Check out the <Link href="/faq">FAQs</Link> or{' '}
                            <Link href="mailto:hello@thecatalystsworld.com">
                                email
                            </Link>{' '}
                            us
                        </Typography>
                    </Stack>

                    <Stack
                        spacing={3}
                        sx={{
                            '& a': {
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        <Typography variant="h2">
                            FINALISTS WILL BE ANNOUNCED IN SEPTEMBER 2024.
                        </Typography>
                        <Box>
                            <Button
                                variant="outlined"
                                color="black"
                                onClick={() => setDialogOpen(true)}
                            >
                                START APPLICATION
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </Section>
        </PageLayout>
    );
}

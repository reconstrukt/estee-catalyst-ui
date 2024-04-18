import { Box, Typography, Button, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import Image from 'next/image';

import CriteriaImage from '../../../assets/images/app-criteria.jpg';

export default function ApplicationCriteria() {
    return (
        <PageLayout transparentHeader={false}>
            <Hero
                sx={{
                    minHeight: '85vh',
                }}
                backgroundImage={CriteriaImage.src}
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
                        What you need to know before applying for the program:
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
                    spacing={4}
                    sx={{
                        flex: 1,
                        backgroundColor: 'pink.main',
                        py: 14,
                        px: 3,
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h2">
                        APPLICATION
                        <br />
                        CRITERIA
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 668,
                        }}
                    >
                        1. Applicants to the BEAUTY&YOU Program 2023 must be 18
                        years of age or older as of December 31st 2022.
                        <br />
                        <br />
                        2. There are four application categories in the Main
                        Prizes.
                        <br />
                        <br />
                        IMAGINE: Companies that are pre-launch and pre-revenue
                        with founders seeking initial launch funding.
                        <br />
                        <br />
                        GROW: Companies currently trading in-market with some
                        revenue and founders seeking growth capital. Applicants
                        are revenue-generating companies with at least one point
                        of distribution - company website is sufficient.
                        <br />
                        <br />
                        BREAKTHROUGH: Applicants from the R&D, active ingredient
                        world who are submitting active ingredient submissions
                        that are focused on solutions for the Indian Consumer
                        Market.
                        <br />
                        <br />
                        CREATE: Photographers, Filmmakers, Make Up Artists, Hair
                        Stylists submitting work that represents the theme of
                        Experiential Beauty in India. Applicants may be based
                        anywhere in the world but must submit an application
                        that is aligned with the theme.
                    </Typography>
                </Stack>

                <Stack
                    spacing={4}
                    sx={{
                        flex: 1,
                        backgroundColor: 'red.main',
                        py: 14,
                        px: 3,
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h2">
                        ITEMS YOU WILL NEED TO
                        <br />
                        COMPLETE THE APPLICATION
                    </Typography>

                    <Typography variant="body1" sx={{ maxWidth: 668 }}>
                        1. Company details, including your India Incorporation 
                        Number (if applicable) and links to your social
                        channels.
                        <br />
                        <br />
                        2. Executive summary or submission about  your business,
                        idea or creative work. Please make sure  you cover the
                        following points in your summary:
                        <br />
                        <br />
                        Market opportunity
                        <br />
                        Problem and Solution
                        <br />
                        Brand and Product Idea
                        <br />
                        Distribution Plan
                        <br />
                        Why your company should win
                        <br />
                        Your experiential beauty concept
                        <br />
                        <br />
                        3. Any video assets that support your application.
                        <br />
                        <br />
                        4. Any questions? Check out our FAQs section  or email
                        us at applications@beautyandyouawards.com.
                    </Typography>
                </Stack>
            </Stack>
        </PageLayout>
    );
}

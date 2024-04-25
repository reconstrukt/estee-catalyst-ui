import { Box, Typography, Button, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import Image from 'next/image';

import PrizesImage from '../../../assets/images/the-prizes.jpg';

export default function ThePrizes() {
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
                        THE PRIZES
                    </Typography>
                    <Typography variant="subtitle1">
                        In addition to a total prize pool of 4 crore ($500,000
                        USD), each company will have the potential to build a
                        long-term partnership with Estée Lauder&apos;s New
                        Incubation Ventures (the strategic early-stage investing
                        and incubation arm of The Estée Lauder Companies).
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
                        py: 14,
                        px: 3,
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h2">IMAGINE</Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 600,
                        }}
                    >
                        Pre-launch Beauty Concepts in the categories of Skin
                        Care, Make Up, Hair Care, Personal Fragrance and Home
                        Fragrance.
                        <br />
                        <br />
                        UP TO $75K
                        <br />
                        <br />
                        • National and International Press support
                        <br />
                        <br />
                        • Exposure on Estée Lauder New Incubation Ventures and
                        Nykaa Social Channels
                        <br />
                        <br />
                        • Mentorship and resource support via ELC and related
                        partners
                        <br />
                        <br />• Trend presentation by Intercos
                    </Typography>
                </Stack>

                <Stack
                    spacing={4}
                    sx={{
                        flex: 1,
                        py: 14,
                        px: 3,
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h2">GROW</Typography>

                    <Typography variant="body1" sx={{ maxWidth: 600 }}>
                        In-market Beauty Concepts in the categories of Skin
                        Care, Make Up, Hair Care, Personal Fragrance and Home
                        Fragrance
                        <br />
                        <br />
                        UP TO $150K.
                        <br />
                        <br />
                        • National and International Press support
                        <br />
                        <br />
                        • Exposure on Estée Lauder New Incubation Ventures and
                        Nykaa Social Channels
                        <br />
                        <br />
                        • Mentorship and resource support via ELC and related
                        partners
                        <br />
                        <br />• Opportunity to discuss a pilot project with ELC
                        R&D team
                    </Typography>
                </Stack>
            </Stack>
        </PageLayout>
    );
}

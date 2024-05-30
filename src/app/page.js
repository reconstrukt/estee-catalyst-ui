'use client';

import { Box, Typography, Button, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import HeroBg from '../../assets/images/hpbg.jpg';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import { useSearchParams } from 'next/navigation';
import useApplicationPortal from '@/components/application-portal/ApplicationContext';
import { useEffect } from 'react';
import Section from '@/components/sections/Section';
import sharedStyles from '@/theme/sharedStyles';

export default function Home() {
    const searchParams = useSearchParams();
    const { setDialogOpen } = useApplicationPortal();

    useEffect(() => {
        const appmodal = searchParams.get('appmodal');

        if (appmodal) {
            setDialogOpen(true);
        }
    }, []);

    return (
        <PageLayout hasFooter={false}>
            <Hero backgroundImage={HeroBg.src}>
                <Box
                    sx={{
                        textAlign: 'center',
                        color: 'white.main',
                    }}
                >
                    <Typography variant="h1" mb={1}>
                        THE ESTÉE LAUDER
                        <br />
                        COMPANIES
                    </Typography>
                    <Typography variant="subtitle1">
                        New incubation ventures signature program
                        <br />
                        for beauty start-ups in the world.
                    </Typography>
                    <Box mt={2}>
                        <Link href="/catalysts">
                            <Button variant="outlined" color="white">
                                LEARN MORE
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Hero>

            <Section>
                <Stack alignItems="center" spacing={3}>
                    <Typography variant="h2">
                        A FIRST-OF-ITS-KIND GLOBAL BEAUTY INITIATIVE
                    </Typography>

                    <Typography variant="subtitle1">
                        All it takes is an idea. Whether you’re a brand founder,
                        fashion designer, perfumer, photographer, skincare
                        scientist, or makeup artist, The Catalysts is an open
                        call for new ideas set to transform the future of beauty
                        – and an opportunity to receive vital funding to make
                        your plans into reality.{' '}
                    </Typography>

                    <Link href="/catalysts">
                        <Button variant="outlined" color="black">
                            READ MORE
                        </Button>
                    </Link>
                </Stack>
            </Section>

            <Section
                sx={{
                    backgroundImage: sharedStyles.linearGradient.pinkRed,
                }}
            >
                <Stack alignItems="center" spacing={3}>
                    <Typography variant="h2">
                        A FIRST-OF-ITS-KIND GLOBAL BEAUTY INITIATIVE
                    </Typography>

                    <Typography variant="subtitle1">
                        All it takes is an idea. Whether you’re a brand founder,
                        fashion designer, perfumer, photographer, skincare
                        scientist, or makeup artist, The Catalysts is an open
                        call for new ideas set to transform the future of beauty
                        – and an opportunity to receive vital funding to make
                        your plans into reality.{' '}
                    </Typography>

                    <Link href="/catalysts">
                        <Button variant="outlined" color="black">
                            READ MORE
                        </Button>
                    </Link>
                </Stack>
            </Section>
        </PageLayout>
    );
}

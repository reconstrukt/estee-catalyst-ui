'use client';

import { Box, Typography, Button } from '@mui/material';
import Hero from '@/components/sections/Hero';
import HeroBg from '../../assets/images/hpbg.jpg';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import { useSearchParams } from 'next/navigation';
import useApplicationPortal from '@/components/application-portal/ApplicationContext';
import { useEffect } from 'react';

export default function Home() {
    const searchParams = useSearchParams();
    const { setDialogOpen } = useApplicationPortal();

    console.log('appmodal', searchParams.get('appmodal'));

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
        </PageLayout>
    );
}

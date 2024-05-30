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
import Image from 'next/image';
import ShanaImage from '../../assets/images/shana.jpg';
import PrizesVImage from '../../assets/images/prizesvertical.jpg';
import PrizesHImage from '../../assets/images/prizeshorizontal.jpg';

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
                <Stack
                    alignItems="center"
                    spacing={5}
                    sx={{
                        maxWidth: 1172,
                        margin: '0 auto',
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: 237,
                                md: 400,
                            },
                            height: {
                                xs: 237,
                                md: 400,
                            },
                        }}
                    >
                        <Image
                            src={ShanaImage.src}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </Box>

                    <Stack spacing={1}>
                        <Typography variant="h2">
                            “OUR AMBITION IS TO PARTNER WITH CREATIVE DISRUPTORS
                            WHO ARE BUILDING EXPERIENTIAL BEAUTY BRANDS THAT
                            SPEAK TO THE VALUES AND PASSIONS OF TODAY’S (AND
                            TOMORROW’S) CONSUMERS.”
                        </Typography>

                        <Typography variant="body1">
                            Shana Randhava, Senior Vice President, ELC New
                            Incubation Ventures
                        </Typography>
                    </Stack>
                </Stack>
            </Section>

            <Hero
                sx={{
                    backgroundImage: {
                        xs: `url(${PrizesVImage.src})`,
                        md: `url(${PrizesHImage.src})`,
                    },
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        color: 'white.main',
                        maxWidth: 1172,
                        margin: '0 auto',
                    }}
                >
                    <Typography variant="h2" mb={1}>
                        THE PROGRAM
                    </Typography>
                    <Typography variant="subtitle1">
                        Two winners of The Catalysts will receive funding for
                        their project based on their submitted business plans.
                    </Typography>
                    <Box mt={2}>
                        <Link href="/catalysts">
                            <Button variant="outlined" color="white">
                                FIND OUT MORE
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Hero>

            <Section
                sx={{
                    textAlign: 'center',
                }}
            >
                <Box mb={8}>
                    <Typography variant="subtitle1">
                        By participating in the program, all applicants will
                        have access to the following:
                    </Typography>
                </Box>

                <Stack
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            md: 'row',
                        },
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            px: {
                                xs: 0,
                                md: 4,
                            },
                            py: {
                                xs: 4,
                                md: 4,
                            },
                        }}
                    >
                        <Typography variant="h2" sx={{ mb: 1 }}>
                            FINANCIAL SUPPORT:
                        </Typography>
                        <Typography variant="body1">
                            A total prize pool of up to $500k to directly fund
                            the most innovative and inspiring creative concepts.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            px: {
                                xs: 0,
                                md: 4,
                            },
                            py: {
                                xs: 4,
                                md: 4,
                            },
                        }}
                    >
                        <Typography variant="h2" sx={{ mb: 1 }}>
                            AWARENESS:
                        </Typography>
                        <Typography variant="body1">
                            National and international press for the winners,
                            along with amplification on the Estée Lauder
                            Companies platforms.
                        </Typography>
                    </Box>
                </Stack>

                <Stack
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            md: 'row',
                        },
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            px: {
                                xs: 0,
                                md: 4,
                            },
                            py: {
                                xs: 4,
                                md: 4,
                            },
                        }}
                    >
                        <Typography variant="h2" sx={{ mb: 1 }}>
                            MENTORSHIP:
                        </Typography>
                        <Typography variant="body1">
                            Access to experts from across the beauty landscape:
                            including product and content development, brand
                            building, finance, operations and supply chain.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            px: {
                                xs: 0,
                                md: 4,
                            },
                            py: {
                                xs: 4,
                                md: 4,
                            },
                        }}
                    >
                        <Typography variant="h2" sx={{ mb: 1 }}>
                            DISTRIBUTION SUPPORT:
                        </Typography>
                        <Typography variant="body1">
                            Valuable guidance on how to scale and reach
                            consumers at both local and global levels.
                        </Typography>
                    </Box>
                </Stack>
            </Section>

            <Section></Section>
        </PageLayout>
    );
}

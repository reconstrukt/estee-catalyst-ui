'use client';

import { Box, Typography, Button, Stack, Slide } from '@mui/material';
import Hero from '@/components/sections/Hero';
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
import Grid from '@/components/sections/Grid';
import GridItem from '@/components/sections/GridItem';
import judges from '@/cms/judges';
import Slider from 'react-slick';

import about from '../../assets/slider/about.jpg';
import aboutmob from '../../assets/slider/aboutmob.jpg';
import applynow from '../../assets/slider/applynow.jpg';
import applynowmob from '../../assets/slider/applynowmob.jpg';
import jury from '../../assets/slider/jury.jpg';
import jurymob from '../../assets/slider/jurymob.jpg';
import tiktok from '../../assets/slider/tiktok.jpg';
import tiktokmob from '../../assets/slider/tiktokmob.jpg';
import press from '@/cms/press';
import theme from '@/theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import Malarquee from 'react-malarquee';
import PersonGridItem from '@/components/sections/PersonGridItem';

export default function Home() {
    const searchParams = useSearchParams();
    const { setDialogOpen } = useApplicationPortal();

    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    useEffect(() => {
        const appmodal = searchParams.get('appmodal');

        if (appmodal) {
            setDialogOpen(true);
        }
    }, []);

    return (
        <PageLayout>
            <Box>
                <Slider
                    dots={true}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={5000}
                    slidesToShow={1}
                    slidesToScroll={1}
                >
                    <Hero
                        backgroundImage={{
                            xs: aboutmob.src,
                            md: about.src,
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                                color: 'white.main',
                            }}
                        >
                            <Typography variant="h1" mb={1}>
                                A NEW PLATFORM
                            </Typography>
                            <Typography variant="subtitle1">
                                To discover those shaping the future of beauty
                            </Typography>
                            <Box mt={2}>
                                <Link href="/catalysts">
                                    <Button variant="outlined" color="white">
                                        ABOUT THE CATALYSTS
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Hero>

                    <Hero
                        backgroundImage={{
                            xs: applynowmob.src,
                            md: applynow.src,
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                                color: 'white.main',
                            }}
                        >
                            <Typography variant="h1" mb={1}>
                                CALLING ALL VISIONARIES
                            </Typography>
                            <Typography variant="subtitle1">
                                This is what you need to know before applying
                            </Typography>
                            <Box mt={2}>
                                <Link href="/application-criteria">
                                    <Button variant="outlined" color="white">
                                        LEARN MORE
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Hero>

                    <Hero
                        backgroundImage={{
                            xs: jurymob.src,
                            md: jury.src,
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                                color: 'white.main',
                            }}
                        >
                            <Typography variant="h1" mb={1}>
                                OUR CREATIVE COLLECTIVE
                            </Typography>
                            <Typography variant="subtitle1">
                                Meet our jury of industry leaders
                            </Typography>
                            <Box mt={2}>
                                <Link href="/jury">
                                    <Button variant="outlined" color="white">
                                        THE JURY
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Hero>

                    <Hero
                        backgroundImage={{
                            xs: tiktokmob.src,
                            md: tiktok.src,
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
                                color: 'white.main',
                            }}
                        >
                            <Typography variant="h1" mb={1}>
                                SUPPORTED BY TIKTOK
                            </Typography>
                            <Typography variant="subtitle1">
                                A unique opportunity to get your brand seen by
                                the world
                            </Typography>
                            <Box mt={2}>
                                <Button variant="outlined" color="white">
                                    LEARN MORE
                                </Button>
                            </Box>
                        </Box>
                    </Hero>
                </Slider>
            </Box>

            <Section>
                <Stack alignItems="center" spacing={3}>
                    <Typography variant="h2">
                        A FIRST-OF-ITS-KIND GLOBAL BEAUTY INITIATIVE
                    </Typography>

                    <Typography variant="subtitle1">
                        All it takes is an idea. Whether you’re a brand founder,
                        content creator, fashion designer, perfumer,
                        photographer, skincare scientist, or makeup artist, The
                        Catalysts is an open call for new ideas set to transform
                        the future of beauty – and an opportunity to receive
                        vital funding to make your plans into reality.
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
                    {/* <Box
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
                    </Box> */}

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
                backgroundImage={{
                    xs: PrizesVImage.src,
                    md: PrizesHImage.src,
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
                        By participating in the program, all winners will have
                        access to the following:
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
                            FINANCIAL AND MARKETING SUPPORT:
                        </Typography>
                        <Typography variant="body1">
                            A total prize pool of up to $500k to directly fund
                            the most innovative and inspiring creative concepts
                            plus up to $150k in ad credits from TikTok.
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
                            International press for the winners, along with
                            amplification on the Estée Lauder Companies
                            platforms.
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

            <Section
                sx={{
                    backgroundImage: sharedStyles.linearGradient.orangeRed,
                }}
            >
                <Stack>
                    <Box>
                        <Typography variant="h1">
                            A JURY OF CREATIVE LEADERS
                        </Typography>
                    </Box>

                    <Box>
                        <Grid
                            innerSx={{
                                maxWidth: {
                                    xs: 450,
                                    md: 1172,
                                },
                                gridTemplateColumns: {
                                    xs: '50% 50%',
                                    md: '25% 25% 25% 25%',
                                },
                            }}
                        >
                            {judges
                                .filter((i) => i.includeOnHome)
                                .map((item, index) => (
                                    <GridItem key={index}>
                                        <PersonGridItem item={item} />
                                    </GridItem>
                                ))}
                        </Grid>
                    </Box>

                    <Box>
                        <Link href="/jury">
                            <Button variant="outlined" color="black">
                                FULL JURY
                            </Button>
                        </Link>
                    </Box>
                </Stack>
            </Section>

            <Section
                sx={{
                    backgroundColor: 'black.main',
                    color: 'white.main',
                    py: 8,
                }}
            >
                <Link href="/press">
                    <Stack mb={4}>
                        <Typography variant="h2">PRESS</Typography>
                    </Stack>

                    <Box
                        sx={{
                            position: 'relative',
                            width: {
                                xs: '150%',
                                sm: '100%',
                            },
                            left: {
                                xs: '-25%',
                                sm: 0,
                            },
                        }}
                    >
                        <Malarquee>
                            <Stack direction="row">
                                {press.map((item, index) => (
                                    <Stack
                                        key={index}
                                        spacing={2}
                                        direction="row"
                                        justifyContent="center"
                                        sx={{
                                            width: {
                                                xs: '50vw',
                                                sm: '33vw',
                                                md: '25vw',
                                                lg: '15vw',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: {
                                                    xs: '100%',
                                                    md: '100%',
                                                },
                                                height: {
                                                    xs: 50,
                                                    md: 50,
                                                },
                                                border: '1px solid',
                                                borderColor: 'black.main',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',

                                                '& svg path': {
                                                    fill: 'currentColor',
                                                },
                                            }}
                                        >
                                            {item.logo}
                                        </Box>
                                    </Stack>
                                ))}
                            </Stack>
                        </Malarquee>
                    </Box>
                </Link>
            </Section>
        </PageLayout>
    );
}

import { Box, Typography, Button, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import Image from 'next/image';

import CatalistsImage from '../../../assets/images/catalysts.jpg';
import ShanaImage from '../../../assets/images/shana.jpg';
import NIVLogo from '../../../assets/svg/NIVLogo.svg';

export default function Catalysts() {
    return (
        <PageLayout transparentHeader={false}>
            <Hero
                sx={{
                    minHeight: '85vh',
                    textShadow: 'none',
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h1" mb={1}>
                        ABOUT THE CATALYSTS
                    </Typography>
                    <Typography variant="subtitle1">
                        All it takes is an idea. Whether you’re a brand founder,
                        fashion designer, perfumer, photographer, skincare
                        scientist, or makeup artist, The Catalysts is an open
                        invitation for new ideas set to transform the future of
                        beauty – and an opportunity to receive vital funding to
                        make your plans reality.
                    </Typography>
                </Box>
            </Hero>

            <Box
                sx={{
                    textAlign: 'center',
                    p: 2,
                    mb: 2,
                }}
            >
                <Typography variant="subtitle1">
                    Created by The Estée Lauder Companies’ New Incubation
                    Ventures, The Catalysts is a program that seeks to identify
                    and uplift emerging and independent creative storytellers
                    who have visions for the beauty world by providing
                    mentorship, financial resources, and project support.
                    Launching for the first time in 2024, it is a year-long
                    global initiative championing up-and-coming creative
                    innovators defining and inspiring the beauty conversation.
                </Typography>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    mb: -1,
                }}
            >
                <Image
                    src={CatalistsImage.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </Box>

            <Box>
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
                            minHeight: {
                                xs: '100vw',
                                md: '100vh',
                            },
                            flex: {
                                md: '1 0 50%',
                            },
                            backgroundImage: `url(${ShanaImage.src})`,
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
                                textAlign: 'center',
                            }}
                        >
                            <Stack direction="row" justifyContent="center">
                                <NIVLogo />
                            </Stack>
                            <Stack alignItems="center" spacing={0.5}>
                                <Typography variant="button">
                                    POWERING THE CATALYSTS
                                </Typography>
                                <Typography variant="h2">
                                    SHANA RANDHAVA
                                </Typography>
                                <Typography variant="button">
                                    SENIOR VICE PRESIDENT, NEW INCUBATION
                                    VENTURES,
                                    <br />
                                    THE ESTÉE LAUDER COMPANIES
                                </Typography>
                            </Stack>

                            <Stack
                                sx={{
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="body1">
                                    New Incubation Ventures (NIV) is the
                                    strategic early-stage investing and
                                    incubation arm for The Estée Lauder
                                    Companies. NIV partners with
                                    forward-thinking founders and entrepreneurs
                                    to create, fund and support the best beauty
                                    brands and business models that will shape
                                    the future of beauty. Through this, it also
                                    builds an actionable pipeline of diversified
                                    brands and new engines of growth for the
                                    Estée Lauder Companies portfolio.
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    The Estée Lauder Companies Inc. is one of
                                    the world’s leading manufacturers and
                                    marketers of quality skin care, makeup,
                                    fragrance and hair care products. The
                                    company’s products are sold in approximately
                                    150 countries and territories under brand
                                    names including: Estée Lauder, Aramis,
                                    Clinique, Lab Series, Origins, M·A·C, La
                                    Mer, Bobbi Brown, Aveda, Jo Malone London,
                                    Bumble and bumble, Darphin Paris, TOM FORD
                                    BEAUTY, Smashbox, AERIN Beauty, Le Labo,
                                    Editions de Parfums Frédéric Malle,
                                    GLAMGLOW, KILIAN PARIS, Too Faced, Dr.Jart+,
                                    and the DECIEM family of brands, including
                                    The Ordinary and NIOD.
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </PageLayout>
    );
}

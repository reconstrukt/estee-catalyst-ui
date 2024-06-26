import { Box, Typography, Button, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import Image from 'next/image';

import CatalistsImage from '../../../assets/images/catalysts.jpg';
import ShanaImage from '../../../assets/images/shana.jpg';
import VanessaImage from '../../../assets/images/vanessa.jpeg';
import NIVLogo from '../../../assets/svg/NIVLogo.svg';
import TikTokLogo from '../../../assets/svg/TikTokLogo.svg';
import NIVLargeLogo from '../../../assets/svg/NIVLargeLogo.svg';
import TikTokStacked from '../../../assets/svg/TikTokStacked.svg';

export const metadata = {
    title: 'About - The Catalysts',
};

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
                    <Typography variant="h1" mt={12} mb={1}>
                        ABOUT THE CATALYSTS
                    </Typography>
                    <Typography variant="subtitle1">
                        All it takes is an idea. Whether you’re a brand founder,
                        fashion designer, content creator, perfumer,
                        photographer, skincare scientist, or makeup artist, The
                        Catalysts is an open invitation for new ideas set to
                        transform the future of beauty – and an opportunity to
                        receive vital funding to make your plans reality.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="subtitle1">
                        Created by The Estée Lauder Companies’ New Incubation
                        Ventures, The Catalysts is a program that seeks to
                        identify and uplift emerging and independent creative
                        storytellers who have visions for the beauty world by
                        providing mentorship, financial resources, and project
                        support. Launching for the first time in 2024, it is a
                        year-long global initiative championing up-and-coming
                        creative innovators defining and inspiring the beauty
                        conversation.
                    </Typography>
                </Box>
            </Hero>

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
                            backgroundColor: 'black.main',
                            color: 'white.main',

                            textAlign: 'center',

                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                height: '80%',
                                width: '80%',
                                maxWidth: 500,
                                maxHeight: 500,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <NIVLargeLogo width="300" height="300" />
                        </Box>
                    </Box>

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
                            spacing={6}
                            sx={{
                                maxWidth: 680,
                                textAlign: 'center',
                            }}
                        >
                            <Stack alignItems="center" spacing={6}>
                                <Typography variant="button">
                                    POWERING THE CATALYSTS
                                </Typography>
                                <Stack direction="row" justifyContent="center">
                                    <NIVLogo />
                                </Stack>
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

                <Stack
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            md: 'row-reverse',
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

                            textAlign: 'center',
                            backgroundColor: 'black.main',

                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                height: '80%',
                                width: '80%',
                                maxWidth: 400,
                                maxHeight: 400,
                                margin: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <TikTokStacked width="300" height="300" />
                        </Box>
                    </Box>

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
                            spacing={6}
                            sx={{
                                maxWidth: 680,
                                textAlign: 'center',
                            }}
                        >
                            <Stack alignItems="center" spacing={6}>
                                <Typography variant="button">
                                    POWERING THE CATALYSTS
                                </Typography>
                                <Stack direction="row" justifyContent="center">
                                    <TikTokLogo />
                                </Stack>
                            </Stack>

                            <Stack
                                sx={{
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="body1">
                                    TikTok is the leading destination for
                                    short-form mobile video. Our mission is to
                                    inspire creativity and bring joy. TikTok is
                                    supporting The Catalysts to amplify the next
                                    generation of beauty founders.
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    Vanessa Craft, TikTok’s Global Head of
                                    Content Partnerships, will be serving as a
                                    jury member for this year’s program. She is
                                    a champion of next-gen talent, building
                                    engaged communities and directing
                                    game-changing content and driving innovative
                                    business strategies. Vanessa is responsible
                                    for accelerating the growth, content
                                    strategy and business development for
                                    TikTok’s top Global partners across Fashion,
                                    Entertainment, Lifestyle, Education and
                                    Sports with highlights including TikTok's
                                    first sponsorship of the Met Gala 2024.
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    Before joining the world of tech, Vanessa
                                    was an award-winning journalist and
                                    Editor-in-Chief at ELLE Canada and in 2021,
                                    she was featured on Variety's 2021 Global
                                    Entertainment Impact List.
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </PageLayout>
    );
}

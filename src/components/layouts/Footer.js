import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import NIVLogo from '../../../assets/svg/NIVLogo.svg';
import TikTokLogo from '../../../assets/svg/TikTokLogo.svg';
import IdexLogo from '../../../assets/svg/IdexLogo.svg';
import NewsletterForm from '../sections/NewsletterForm';
import Link from 'next/link';

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: 'offWhite.main',
                py: 6,
                px: 2,
            }}
        >
            <Stack
                sx={{
                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },
                    gap: {
                        xs: 10,
                        md: 10,
                    },
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        order: {
                            xs: 3,
                            md: 1,
                        },
                    }}
                >
                    <Stack spacing={4}>
                        <Stack spacing={2}>
                            <Typography>The Catalyst is created by</Typography>
                            <Link href="#" target="_blank">
                                <NIVLogo />
                            </Link>
                        </Stack>

                        <Stack spacing={2}>
                            <Typography>Exclusive partner</Typography>
                            <Link href="#" target="_blank">
                                <TikTokLogo />
                            </Link>
                        </Stack>

                        <Stack spacing={2}>
                            <Typography>Exclusive producer</Typography>
                            <Link href="#" target="_blank">
                                <IdexLogo />
                            </Link>
                        </Stack>
                    </Stack>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        order: {
                            xs: 1,
                            md: 2,
                        },
                    }}
                >
                    <Stack spacing={2}>
                        <Typography>Sign up to Our Newsletter</Typography>
                        <NewsletterForm />
                    </Stack>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        order: {
                            xs: 2,
                            md: 3,
                        },
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{
                            justifyContent: {
                                xs: 'flex-start',
                                md: 'space-evenly',
                            },
                        }}
                    >
                        <Stack spacing={2.5}>
                            <Box>
                                <Link href="/about">ABOUT US</Link>
                            </Box>
                            <Box>
                                <Link href="/faq">FAQ</Link>
                            </Box>
                            <Box>
                                <Link href="/terms-and-conditions">
                                    TERMS & CONDITIONS
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/privacy-policy">
                                    PRIVACY POLICY
                                </Link>
                            </Box>
                        </Stack>

                        <Stack spacing={2.5}>
                            <Box>
                                <Link href="/contact">CONTACT</Link>
                            </Box>
                            <Box>
                                <Link href="/" target="_blank">
                                    INSTAGRAM
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" target="_blank">
                                    FACEBOOK
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" target="_blank">
                                    LINKEDIN
                                </Link>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}

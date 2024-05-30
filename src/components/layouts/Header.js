import React, { useState } from 'react';
import Logo from '../../../assets/svg/logo.svg';
import MenuIcon from '../../../assets/svg/MenuIcon.svg';
import CloseIcon from '../../../assets/svg/CloseIcon.svg';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import about from '../../../assets/slider/about.jpg';
import aboutmob from '../../../assets/slider/aboutmob.jpg';
import useScrollPosition from '@/hooks/useScrollPosition';
import useApplicationPortal from '../application-portal/ApplicationContext';

export default function Header({ transparentHeader }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((val) => !val);
    };

    const { scrollDirection, scrollPos, aboveTheFold } = useScrollPosition();

    const { setDialogOpen } = useApplicationPortal();

    return (
        <Box
            component="header"
            sx={{
                position: aboveTheFold ? 'absolute' : 'fixed',
                marginBottom: menuOpen ? 0 : aboveTheFold ? '-60px' : 0,
                top: aboveTheFold ? 0 : scrollDirection === 'up' ? 0 : -100,
                color:
                    !aboveTheFold && !menuOpen
                        ? 'black'
                        : transparentHeader || menuOpen
                          ? 'white.main'
                          : 'black',
                backgroundColor: !aboveTheFold
                    ? 'white.main'
                    : transparentHeader || menuOpen
                      ? 'transparent'
                      : 'white.main',
                transition: 'all 0.3s ease',
                px: 2,
                py: 2,
                zIndex: 5000,
                width: '100%',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        flex: {
                            xs: 0,
                            md: 1,
                        },
                        minWidth: 120,
                        order: {
                            xs: 2,
                            md: 1,
                        },
                    }}
                >
                    <Button
                        variant="outlined"
                        color={
                            !aboveTheFold && !menuOpen
                                ? 'black'
                                : transparentHeader || menuOpen
                                  ? 'white'
                                  : 'black'
                        }
                        sx={{
                            padding: '5px 10px',
                        }}
                        onClick={() => setDialogOpen(true)}
                    >
                        APPLY NOW
                    </Button>
                </Box>

                <Box
                    sx={{
                        order: {
                            xs: 1,
                            md: 2,
                        },
                        flex: 1,
                        display: 'flex',
                        justifyContent: {
                            xs: 'left',
                            md: 'center',
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: 131,
                                sm: 182,
                            },

                            height: {
                                xs: 18,
                                sm: 25,
                            },
                        }}
                    >
                        <Link href="/">
                            <Logo width="100%" height="100%" />
                        </Link>
                    </Box>
                </Box>

                <Box
                    sx={{
                        order: 3,
                        flex: {
                            xs: 0,
                            md: 1,
                        },
                        display: 'flex',
                        justifyContent: {
                            xs: 'start',
                            md: 'end',
                        },
                    }}
                >
                    <Box>
                        <Button
                            variant="text"
                            color={
                                !aboveTheFold && !menuOpen
                                    ? 'black'
                                    : transparentHeader || menuOpen
                                      ? 'white'
                                      : 'black'
                            }
                            endIcon={menuOpen ? <CloseIcon /> : <MenuIcon />}
                            onClick={toggleMenu}
                        >
                            MENU
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    position: 'fixed',
                    width: '100%',
                    height: '100vh',
                    top: 0,
                    left: 0,
                    backgroundImage: {
                        xs: `url(${aboutmob.src})`,
                        md: `url(${about.src})`,
                    },
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',

                    transition: 'opacity 0.3s ease',

                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? 'all' : 'none',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(5px)',
                    }}
                >
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            textTransform: 'uppercase',
                            paddingTop: '70px',
                            minHeight: '100%',

                            a: {
                                textDecoration: 'none !important',

                                '&:hover': {
                                    opacity: 0.8,
                                },
                            },
                        }}
                    >
                        <Box>
                            <Link href="/catalysts">
                                <Typography variant="menu">
                                    THE CATALYSTS
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/application-criteria">
                                <Typography variant="menu">
                                    Application Criteria
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/prizes">
                                <Typography variant="menu">Prizes</Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/judges">
                                <Typography variant="menu">Judges</Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/masterclasses">
                                <Typography variant="menu">
                                    Masterclasses
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/winners">
                                <Typography variant="menu">
                                    2023 Winners
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/contact-us">
                                <Typography variant="menu">Contact</Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/press">
                                <Typography variant="menu">Press</Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/faq">
                                <Typography variant="menu">FAQ</Typography>
                            </Link>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

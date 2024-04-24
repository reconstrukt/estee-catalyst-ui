import React from 'react';
import Logo from '../../../assets/svg/logo.svg';
import MenuIcon from '../../../assets/svg/MenuIcon.svg';
import CloseIcon from '../../../assets/svg/CloseIcon.svg';
import { Box, Button } from '@mui/material';

export default function Header() {
    return (
        <Box
            component="header"
            sx={{
                position: 'fixed',
                color: 'white.main',
                backgroundColor: 'transparent',
                px: 2,
                py: 2,
                zIndex: 5000,
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
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
                        color="white"
                        sx={{
                            padding: '5px 10px',
                        }}
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
                        <Logo width="100%" height="100%" />
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
                            color="white"
                            endIcon={<MenuIcon />}
                        >
                            MENU
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

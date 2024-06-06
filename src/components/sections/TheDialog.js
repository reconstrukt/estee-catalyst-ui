import React, { useEffect, useRef } from 'react';
import { Dialog, Box, Stack, Typography, IconButton } from '@mui/material';
import CloseIcon from '../../../assets/svg/CloseIcon.svg';
import Logo from '../../../assets/svg/logo.svg';

export default function TheDialog({ open, children, title, onClose }) {
    const dialogTitleRef = useRef();

    useEffect(() => {
        if (dialogTitleRef.current) {
            dialogTitleRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }, [title]);

    return (
        <Dialog
            open={open}
            fullScreen
            sx={{
                zIndex: 10000,
            }}
        >
            <Box>
                <Stack
                    ref={dialogTitleRef}
                    direction="row"
                    px={2}
                    py={1}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h4">{title}</Typography>
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            display: {
                                xs: 'none',
                                md: 'flex',
                            },
                            justifyContent: 'center',
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

                    <Box sx={{ flex: 1, textAlign: 'right' }}>
                        <IconButton
                            variant="text"
                            color="black"
                            onClick={onClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Stack>

                {children}
            </Box>
        </Dialog>
    );
}

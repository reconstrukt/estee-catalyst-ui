import React, { useEffect, useRef, useCallback } from 'react';
import {
    Dialog,
    Box,
    Stack,
    Typography,
    IconButton,
    DialogContent,
} from '@mui/material';
import CloseIcon from '../../../assets/svg/CloseIcon.svg';
import Logo from '../../../assets/svg/logo.svg';
import Link from 'next/link';

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
            autoFocus
            onClose={onClose}
            sx={{
                zIndex: 10000,
            }}
        >
            <DialogContent
                tabIndex={0}
                sx={{
                    '&:focus': {
                        outline: 'none',
                    },
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
                                <Link href="/">
                                    <Logo width="100%" height="100%" />
                                </Link>
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
            </DialogContent>
        </Dialog>
    );
}

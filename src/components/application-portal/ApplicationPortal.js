import React from 'react';
import useApplicationPortal from './ApplicationContext';
import {
    Dialog,
    Stack,
    Box,
    Typography,
    IconButton,
    ButtonBase,
} from '@mui/material';
import CloseIcon from '../../../assets/svg/CloseIcon.svg';
import AppStep0 from './AppStep0';

export default function ApplicationPortal() {
    const { dialogOpen, setDialogOpen, step } = useApplicationPortal();

    return (
        <>
            <Dialog
                open={dialogOpen}
                fullScreen
                sx={{
                    zIndex: 10000,
                }}
            >
                <Stack
                    sx={{
                        minHeight: '100vh',
                    }}
                >
                    <Stack
                        direction="row"
                        px={2}
                        py={1}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Box>
                            <ButtonBase>
                                {step > -1 && (
                                    <Typography variant="h4">BACK</Typography>
                                )}
                            </ButtonBase>
                        </Box>

                        <Box>
                            <IconButton
                                variant="text"
                                color="black"
                                onClick={() => setDialogOpen(false)}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </Stack>

                    <Box
                        sx={{
                            flex: 1,
                        }}
                    >
                        <AppStep0 />
                    </Box>
                </Stack>
            </Dialog>
        </>
    );
}

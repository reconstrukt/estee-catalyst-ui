import React, { useState } from 'react';
import useApplicationPortal from './ApplicationContext';
import {
    Dialog,
    Stack,
    Box,
    Typography,
    IconButton,
    ButtonBase,
    Button,
} from '@mui/material';
import CloseIcon from '../../../assets/svg/CloseIcon.svg';
import Logo from '../../../assets/svg/logo.svg';

import AppStep0 from './AppStep0';
import AppStep1 from './AppStep1';
import AppStep2 from './AppStep2';
import AppStep3 from './AppStep3';
import AppStep4 from './AppStep4';
import AppStep5 from './AppStep5';
import AppStep6 from './AppStep6';
import AppStep7 from './AppStep7';
import AppStep8 from './AppStep8';
import AppStep9 from './AppStep9';
import AppStep10 from './AppStep10';
import AppStep11 from './AppStep11';
import AppStepFinal from './AppStepFinal';
import { LoadingButton } from '@mui/lab';
import ApplicationProgress from './ApplicationProgress';

export default function ApplicationPortal() {
    const {
        dialogOpen,
        setDialogOpen,
        step,
        goBack,
        updateApplication,
        resetApplication,
        values,
    } = useApplicationPortal();

    const [loading, setLoading] = useState(false);

    const handleSaveAndExit = async () => {
        setLoading(true);
        const res = await updateApplication();

        if (!res.success) {
            // TODO handle errs
        } else {
            resetApplication();
            setDialogOpen(false);
        }

        setLoading(false);
    };

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
                        mb={5}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}
                        >
                            {step > 1 && step !== 12 && (
                                <Button
                                    color="black"
                                    onClick={goBack}
                                    sx={{
                                        pl: 0,
                                        minWidth: 0,
                                    }}
                                >
                                    BACK
                                </Button>
                            )}
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

                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            {step === 0 || step === 12 ? (
                                <IconButton
                                    variant="text"
                                    color="black"
                                    onClick={() => setDialogOpen(false)}
                                >
                                    <CloseIcon />
                                </IconButton>
                            ) : (
                                <LoadingButton
                                    loading={loading}
                                    variant="outlined"
                                    color="black"
                                    onClick={handleSaveAndExit}
                                >
                                    SAVE AND EXIT
                                </LoadingButton>
                            )}
                        </Box>
                    </Stack>

                    <Box
                        sx={{
                            flex: 1,
                        }}
                    >
                        {step === 0 && <AppStep0 />}

                        {step > 0 && step !== 12 && (
                            <Stack
                                spacing={2}
                                sx={{
                                    textAlign: 'center',
                                    mb: 5,
                                }}
                            >
                                <Typography variant="h2">
                                    APPLICATION PORTAL
                                </Typography>

                                <ApplicationProgress step={step} />
                            </Stack>
                        )}

                        <Box px={2}>
                            {step === 1 && <AppStep1 />}
                            {step === 2 && <AppStep2 />}
                            {step === 3 && <AppStep3 />}
                            {step === 4 && <AppStep4 />}
                            {step === 5 && <AppStep5 />}
                            {step === 6 && <AppStep6 />}
                            {step === 7 && <AppStep7 />}
                            {step === 8 && <AppStep8 />}
                            {step === 9 && <AppStep9 />}
                            {step === 10 && <AppStep10 />}
                            {step === 11 && <AppStep11 />}
                        </Box>

                        {step === 12 && <AppStepFinal />}
                    </Box>
                </Stack>
            </Dialog>
        </>
    );
}

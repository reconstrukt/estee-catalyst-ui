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

export default function ApplicationPortal() {
    const { dialogOpen, setDialogOpen, step, goBack } = useApplicationPortal();

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
                            <ButtonBase onClick={goBack}>
                                {step > 1 && (
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
                        {step === 0 && <AppStep0 />}
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
                </Stack>
            </Dialog>
        </>
    );
}

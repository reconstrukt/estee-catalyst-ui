import React from 'react';
import useApplicationPortal from './ApplicationContext';
import { Dialog, Stack, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '../../../assets/svg/CloseIcon.svg';

export default function ApplicationPortal() {
    const { dialogOpen, setDialogOpen } = useApplicationPortal();

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
                    direction="row"
                    px={2}
                    py={1}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box>
                        <Typography variant="h4">Back</Typography>
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
            </Dialog>
        </>
    );
}

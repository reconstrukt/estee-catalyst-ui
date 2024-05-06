import {
    Box,
    Button,
    InputLabel,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import PortalImage from '../../../assets/images/app-portal.jpg';
import Image from 'next/image';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';
import StepWrapper from './StepWrapper';

import { initApplication } from '@/app/lib/api';
import Link from 'next/link';

export default function AppStep0() {
    const [email, setEmail] = useState('');
    const { step, setStep } = useApplicationPortal();
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState('init'); // init | exists | created | submitted
    const [link, setLink] = useState('');

    const handleStart = async () => {
        if (!email) return;
        setLoading(true);

        // TODO: make API call
        console.log('starting api call: ', email);
        const res = await initApplication(email);

        console.log(res);

        if (res.success) {
            const link = res.data.url.replace(
                'https://estee-catalyst.reconstrukt.net',
                '',
            );

            // TODO REMOVE THIS:
            setLink(link);

            if (res.data.submitted) {
                setState('submitted');
            } else if (res.data.exists) {
                setState('exists');
            } else {
                setState('created');
            }
        }

        setLoading(false);
    };

    return (
        <StepWrapper
            sx={{
                justifyContent: 'center',
            }}
        >
            <Box>
                <Image
                    src={PortalImage.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </Box>

            {state === 'init' && (
                <>
                    <Stack
                        spacing={2.5}
                        mt={2.5}
                        sx={{
                            px: {
                                xs: 2,
                                md: 0,
                            },
                        }}
                    >
                        <Typography variant="h2">
                            CATALYSTS APPLICATION PORTAL
                        </Typography>
                        <Typography>Get started, or continue</Typography>

                        <Box>
                            <InputLabel>Enter email address</InputLabel>
                            <TextField
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                    </Stack>
                    <Box mt={8}>
                        <LoadingButton
                            variant="contained"
                            color="black"
                            loading={loading}
                            sx={{
                                width: 221,
                            }}
                            onClick={handleStart}
                        >
                            START
                        </LoadingButton>
                    </Box>
                </>
            )}

            {(state === 'exists' || state === 'created') && (
                <Stack
                    spacing={2.5}
                    alignItems="center"
                    mt={2.5}
                    sx={{
                        px: {
                            xs: 2,
                            md: 0,
                        },
                    }}
                >
                    <Typography variant="h2">THANKS</Typography>
                    <Typography>
                        Check your inbox for a link to{' '}
                        {state === 'exists' ? 'continue' : 'get started'}
                    </Typography>
                    <LoadingButton
                        loading={loading}
                        variant="outlined"
                        color="black"
                        sx={{
                            width: 221,
                        }}
                        onClick={handleStart}
                    >
                        RESEND EMAIL
                    </LoadingButton>

                    {/* // TODO REMOVE THIS: */}
                    <Link href={link}>
                        <Button>go to {link}</Button>
                    </Link>
                </Stack>
            )}
        </StepWrapper>
    );
}

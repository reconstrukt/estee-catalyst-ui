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
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState('init'); // init | exists | created | submitted
    const [link, setLink] = useState('');
    const [error, setError] = useState('');

    const handleStart = async () => {
        if (!email) return;
        setLoading(true);

        const res = await initApplication(email);
        console.log(res);

        if (res.success) {
            // TODO REMOVE THIS:
            if (res.data.url) {
                const link = res.data.url.replace(
                    'https://estee-catalyst.reconstrukt.net',
                    '',
                );
                setLink(link);
            }

            if (res.data.submitted) {
                setState('submitted');
            } else if (res.data.exists) {
                setState('exists');
            } else {
                setState('created');
            }
        } else {
            setError(res.message);
        }

        setLoading(false);
    };

    const handleReApply = () => {
        setEmail('');
        setState('init');
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
                            WELCOME TO THE APPLICATION PORTAL!
                        </Typography>
                        <Typography>
                            To get started (or continue if you have already
                            started your application) please enter your email.{' '}
                        </Typography>

                        <Box>
                            <InputLabel>Enter email address</InputLabel>
                            <TextField
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                helperText={!!error && error}
                                error={!!error}
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

            {state === 'submitted' && (
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
                    <Typography variant="h2">SORRY</Typography>
                    <Typography>
                        You've already applied. Try different email.
                    </Typography>

                    <Box
                        sx={{
                            pt: 8,
                        }}
                    >
                        <LoadingButton
                            variant="contained"
                            color="black"
                            sx={{
                                width: 221,
                            }}
                            onClick={handleReApply}
                        >
                            APPLY
                        </LoadingButton>
                    </Box>
                </Stack>
            )}
        </StepWrapper>
    );
}

import React, { useEffect, useState } from 'react';
import StepWrapper from './StepWrapper';
import { Typography, Stack, Box, InputLabel, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';
import Link from 'next/link';

export default function AppStep4() {
    const { application, updateApplication, values, setValues } =
        useApplicationPortal();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setValues({
            video_link: application.video_link ? application.video_link : '',
        });
    }, []);

    const handleChange = (e, field) => {
        setValues((val) => ({
            ...val,
            [field]: e.target.value,
        }));

        setErrors((old) => {
            let ret = { ...old };
            delete ret.video_link;
            return ret;
        });
    };

    function isUrlValid(string) {
        try {
            new URL(string);
            return true;
        } catch (err) {
            return false;
        }
    }

    const validate = () => {
        if (!values['video_link']) {
            setErrors({
                video_link: 'This field is required.',
            });
            return false;
        }

        if (!isUrlValid(values['video_link'])) {
            setErrors({
                video_link: 'This must be a valid link.',
            });
            return false;
        }

        return true;
    };

    const handleNext = async () => {
        if (!validate()) return;

        setLoading(true);
        const res = await updateApplication();

        if (!res.success) {
            // TODO handle errs
        }

        setLoading(false);
    };

    return (
        <StepWrapper>
            <Stack spacing={5}>
                <Stack
                    sx={{
                        a: {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    <Typography>
                        Please upload a link to a TikTok video that is a minimum
                        of 1 minute in length, addressing the question of what
                        beauty means to you and tag #Jointhecatalysts, #contest
                        and #niv_elc. We want to hear your story and see your
                        ideas. Be as creative as you wish!
                    </Typography>
                    <br />
                    <Typography>
                        If TikTok is not available to you, we will consider a
                        video link to another platform (e.g., Youtube, Vimeo,
                        etc.). If you have any questions on what to submit,
                        please consult the{' '}
                        <Link href="/terms-and-conditions" target="_blank">
                            Terms and Conditions
                        </Link>
                        .
                    </Typography>
                </Stack>

                <Stack spacing={1}>
                    <Box>
                        <InputLabel>Paste link here</InputLabel>
                        <TextField
                            error={!!errors['video_link']}
                            helperText={errors['video_link']}
                            fullWidth
                            value={values.video_link}
                            onChange={(e) => handleChange(e, 'video_link')}
                        />
                    </Box>
                </Stack>

                <Box mt={8}>
                    <LoadingButton
                        loading={loading}
                        variant="contained"
                        color="black"
                        sx={{
                            width: 221,
                        }}
                        onClick={handleNext}
                    >
                        NEXT STEP
                    </LoadingButton>
                </Box>
            </Stack>
        </StepWrapper>
    );
}

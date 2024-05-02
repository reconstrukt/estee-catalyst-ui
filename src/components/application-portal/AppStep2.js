import React, { useState } from 'react';
import StepWrapper from './StepWrapper';
import { Typography, Stack, Box, InputLabel, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';

export default function AppStep2() {
    const { setStep } = useApplicationPortal();

    const [values, setValues] = useState({
        website: '',
        instagram: '',
        facebook: '',
        youtube: '',
        tiktok: '',
        linkedin: '',
        snapchat: '',
        other_social: '',
    });

    const handleChange = (e, field) => {
        setValues((val) => ({
            ...val,
            [field]: e.target.value,
        }));
    };

    const handleNext = () => {
        // TODO: make API call
        setStep(3);
    };

    return (
        <StepWrapper>
            <Stack spacing={5}>
                <Stack spacing={2}>
                    <Typography variant="h2">APPLICATION PORTAL</Typography>
                    <Typography variant="caption">STEP 2/11</Typography>
                </Stack>

                <Stack spacing={1}>
                    <Box>
                        <InputLabel>Company or Personal Website</InputLabel>
                        <TextField
                            fullWidth
                            value={values.website}
                            onChange={(e) => handleChange(e, 'website')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Instagram</InputLabel>
                        <TextField
                            fullWidth
                            value={values.instagram}
                            onChange={(e) => handleChange(e, 'instagram')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Facebook</InputLabel>
                        <TextField
                            fullWidth
                            value={values.facebook}
                            onChange={(e) => handleChange(e, 'facebook')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Youtube</InputLabel>
                        <TextField
                            fullWidth
                            value={values.youtube}
                            onChange={(e) => handleChange(e, 'youtube')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Tiktok</InputLabel>
                        <TextField
                            fullWidth
                            value={values.tiktok}
                            onChange={(e) => handleChange(e, 'tiktok')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Linkedin</InputLabel>
                        <TextField
                            fullWidth
                            value={values.linkedin}
                            onChange={(e) => handleChange(e, 'linkedin')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Snapchat</InputLabel>
                        <TextField
                            fullWidth
                            value={values.snapchat}
                            onChange={(e) => handleChange(e, 'snapchat')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Other</InputLabel>
                        <TextField
                            fullWidth
                            value={values.other_social}
                            onChange={(e) => handleChange(e, 'other_social')}
                        />
                    </Box>
                </Stack>

                <Box mt={8}>
                    <LoadingButton
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

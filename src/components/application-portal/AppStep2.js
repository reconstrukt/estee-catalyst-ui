import React, { useEffect, useState } from 'react';
import StepWrapper from './StepWrapper';
import {
    Stack,
    Box,
    InputLabel,
    TextField,
    Typography,
    FormHelperText,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';

export default function AppStep2() {
    const { application, updateApplication, values, setValues } =
        useApplicationPortal();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setValues({
            website: application.website ? application.website : '',
            instagram: application.instagram ? application.instagram : '',
            facebook: application.facebook ? application.facebook : '',
            youtube: application.youtube ? application.youtube : '',
            tiktok: application.tiktok ? application.tiktok : '',
            linkedin: application.linkedin ? application.linkedin : '',
            snapchat: application.snapchat ? application.snapchat : '',
            other_social: application.other_social
                ? application.other_social
                : '',
        });
    }, []);

    const handleChange = (e, field) => {
        setError('');
        setValues((val) => ({
            ...val,
            [field]: e.target.value,
        }));
    };

    const validate = () => {
        let res = false;

        for (let key in values) {
            if (values[key]) {
                res = true;
            }
        }

        if (res === false) {
            setError(
                'At least one account or a website url is required to proceed.',
            );
        }

        return res;
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
                <Box>
                    <Typography>
                        Please share any accounts that are applicable.
                    </Typography>
                </Box>
                <Stack spacing={1}>
                    {error && <FormHelperText error>{error}</FormHelperText>}
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
                        loading={loading}
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

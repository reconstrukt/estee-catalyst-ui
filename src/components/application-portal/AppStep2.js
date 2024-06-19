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
    const [errors, setErrors] = useState({});

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
        setErrors((val) => {
            let newerrs = { ...val };
            delete newerrs[field];
            return newerrs;
        });
    };

    const validate = () => {
        let hasAny = false;
        let errors = {};

        for (let key in values) {
            if (values[key]) {
                hasAny = true;

                if (!validateURL(values[key])) {
                    errors[key] = 'This must be a valid URL.';
                }
            }
        }

        if (hasAny === false) {
            setError(
                'At least one account or a website url is required to proceed.',
            );
        }

        setErrors(errors);

        console.log('validation: ', hasAny, errors);

        return hasAny && Object.keys(errors).length === 0;
    };

    const validateURL = (s) => {
        const pattern = /\..+$/; // "ends with a dot followed by at least one character"

        return pattern.test(s);
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
                {error && <FormHelperText error>{error}</FormHelperText>}
                <Stack
                    direction="row"
                    sx={{
                        flexWrap: 'wrap',
                        gap: '10px',
                    }}
                >
                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Company or Personal Website</InputLabel>
                        <TextField
                            fullWidth
                            value={values.website}
                            onChange={(e) => handleChange(e, 'website')}
                            error={!!errors['website']}
                            helperText={errors['website']}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Instagram</InputLabel>
                        <TextField
                            fullWidth
                            value={values.instagram}
                            onChange={(e) => handleChange(e, 'instagram')}
                            error={!!errors['instagram']}
                            helperText={errors['instagram']}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Facebook</InputLabel>
                        <TextField
                            fullWidth
                            value={values.facebook}
                            onChange={(e) => handleChange(e, 'facebook')}
                            error={!!errors['facebook']}
                            helperText={errors['facebook']}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Youtube</InputLabel>
                        <TextField
                            fullWidth
                            value={values.youtube}
                            onChange={(e) => handleChange(e, 'youtube')}
                            error={!!errors['youtube']}
                            helperText={errors['youtube']}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Tiktok</InputLabel>
                        <TextField
                            fullWidth
                            value={values.tiktok}
                            onChange={(e) => handleChange(e, 'tiktok')}
                            error={!!errors['tiktok']}
                            helperText={errors['tiktok']}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Linkedin</InputLabel>
                        <TextField
                            fullWidth
                            value={values.linkedin}
                            onChange={(e) => handleChange(e, 'linkedin')}
                            error={!!errors['linkedin']}
                            helperText={errors['linkedin']}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Snapchat</InputLabel>
                        <TextField
                            fullWidth
                            value={values.snapchat}
                            onChange={(e) => handleChange(e, 'snapchat')}
                            error={!!errors['snapchat']}
                            helperText={errors['snapchat']}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Other</InputLabel>
                        <TextField
                            fullWidth
                            value={values.other_social}
                            onChange={(e) => handleChange(e, 'other_social')}
                            error={!!errors['other_social']}
                            helperText={errors['other_social']}
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

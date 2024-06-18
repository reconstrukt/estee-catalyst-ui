import {
    Box,
    TextField,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Stack,
    Typography,
    FormHelperText,
} from '@mui/material';
import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { newsletterSubscribe } from '@/app/lib/api';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formState, setFormState] = useState('default'); // default | success
    const [error, setError] = useState('');
    const [consentError, setConsentError] = useState('');

    const handleSubmit = async (e) => {
        if (!checked) {
            setConsentError('You must agree to the Terms and Conditions.');
            return;
        }
        if (!email) return;

        // TODO: FETCH
        setLoading(true);

        const res = await newsletterSubscribe(email);

        if (res.success) {
            onSuccess();
        } else {
            setError(res.message);
        }

        setLoading(false);
    };

    const onSuccess = () => {
        setFormState('success');

        setEmail('');
        setChecked(false);

        setTimeout(() => {
            setFormState('default');
        }, 2000);
    };

    const handleCheck = () => {
        setConsentError(false);
        setChecked((val) => !val);
    };

    const handleEmailChange = (e) => {
        setError('');
        setEmail(e.target.value);
    };

    return (
        <Box>
            {formState === 'success' && (
                <Box>
                    <Typography variant="button" color="black">
                        Thank you for signing up!
                    </Typography>
                </Box>
            )}
            {formState === 'default' && (
                <Stack spacing={2}>
                    <Box>
                        <FormGroup
                            row
                            sx={{
                                display: 'flex',
                                flexWrap: 'nowrap',
                            }}
                        >
                            <TextField
                                variant="outlined"
                                color="black"
                                placeholder="EMAIL"
                                sx={{
                                    marginRight: '-1px',
                                    flex: 1,
                                }}
                                value={email}
                                onChange={handleEmailChange}
                                error={!!error}
                            />
                            <LoadingButton
                                variant="outlined"
                                color="black"
                                disableElevation
                                onClick={handleSubmit}
                                loading={loading}
                                sx={{
                                    minHeight: '31px !important',
                                    maxHeight: '31px !important',
                                }}
                            >
                                SUBMIT
                            </LoadingButton>
                        </FormGroup>
                        {error && (
                            <FormHelperText error sx={{ pl: 2 }}>
                                {error}
                            </FormHelperText>
                        )}
                    </Box>

                    <Box>
                        <FormControlLabel
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                            }}
                            control={
                                <Checkbox
                                    color="black"
                                    sx={{
                                        marginTop: -1.2,
                                    }}
                                    checked={checked}
                                    onChange={handleCheck}
                                />
                            }
                            label={
                                <Typography
                                    variant="button"
                                    color={consentError ? 'error' : 'black'}
                                    sx={{ fontSize: 12 }}
                                >
                                    BY CHECKING THIS BOX AND CLICKING SIGN UP, I
                                    AGREE TO THE TERMS AND CONDITIONS AND
                                    PRIVACY POLICY.
                                </Typography>
                            }
                        ></FormControlLabel>

                        {consentError && (
                            <FormHelperText error sx={{ pl: 2.5 }}>
                                {consentError}
                            </FormHelperText>
                        )}
                    </Box>
                </Stack>
            )}
        </Box>
    );
}

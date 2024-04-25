import {
    Box,
    TextField,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Stack,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { LoadingButton } from '@mui/lab';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formState, setFormState] = useState('default'); // default | success

    const handleSubmit = (e) => {
        if (!checked) return;
        if (!email) return;

        // TODO: FETCH
        setLoading(true);
        setTimeout(() => {
            onSuccess();
            setLoading(false);
        }, 1000);
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
        setChecked((val) => !val);
    };

    const handleEmailChange = (e) => {
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
                            />
                            <LoadingButton
                                variant="outlined"
                                color="black"
                                disableElevation
                                onClick={handleSubmit}
                                loading={loading}
                            >
                                SUBMIT
                            </LoadingButton>
                        </FormGroup>
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
                                <Typography variant="button" color="black">
                                    BY CHECKING THIS BOX AND CLICKING SIGN UP, I
                                    AGREE TO THE TERMS AND CONDITIONS AND
                                    PRIVACY POLICY.
                                </Typography>
                            }
                        ></FormControlLabel>
                    </Box>
                </Stack>
            )}
        </Box>
    );
}

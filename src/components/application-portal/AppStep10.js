import React, { useEffect, useState } from 'react';
import StepWrapper from './StepWrapper';
import { Typography, Stack, Box, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';
import TheTextarea from '../elements/TheTextarea';

export default function AppStep10() {
    const { application, updateApplication, values, setValues } =
        useApplicationPortal();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setValues({
            interest_and_traction: application.interest_and_traction
                ? application.interest_and_traction
                : '',
            why_will_you_win: application.why_will_you_win
                ? application.why_will_you_win
                : '',
        });
    }, []);

    const handleChange = (e, field) => {
        setValues((val) => ({
            ...val,
            [field]: e.target.value,
        }));

        setErrors((val) => {
            const newVal = { ...val };
            delete newVal[field];
            return newVal;
        });
    };

    const validate = () => {
        let result = { ...errors };

        for (let key in values) {
            if (!values[key]) {
                result[key] = 'This field is required.';
            }
        }

        if (Object.keys(result).length > 0) {
            setErrors(result);
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
                <Stack spacing={5}>
                    <Typography>
                        Do you have any information around interest (pre-launch)
                        or traction (in market) that you would like to share
                        with us e.g., revenue, LTV, pre-orders, or other
                        interesting data points (100 words or less)?
                    </Typography>
                    <Box>
                        <InputLabel>Type here</InputLabel>
                        <TheTextarea
                            error={!!errors.interest_and_traction}
                            helperText={errors.interest_and_traction}
                            value={values.interest_and_traction}
                            onChange={(e) =>
                                handleChange(e, 'interest_and_traction')
                            }
                        />
                    </Box>
                </Stack>

                <Stack spacing={5}>
                    <Typography>
                        Why will you win the market (100 words or less)?
                    </Typography>
                    <Box>
                        <InputLabel>Type here</InputLabel>
                        <TheTextarea
                            error={!!errors.why_will_you_win}
                            helperText={errors.why_will_you_win}
                            value={values.why_will_you_win}
                            onChange={(e) =>
                                handleChange(e, 'why_will_you_win')
                            }
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

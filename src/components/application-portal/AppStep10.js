import React, { useEffect, useState } from 'react';
import StepWrapper from './StepWrapper';
import {
    Typography,
    Stack,
    Box,
    InputLabel,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';
import TheTextarea from '../elements/TheTextarea';

export default function AppStep10() {
    const { setStep } = useApplicationPortal();

    const [values, setValues] = useState({
        interest_and_traction: '',
        why_will_you_win: '',
    });

    const handleChange = (e, field) => {
        setValues((val) => ({
            ...val,
            [field]: e.target.value,
        }));
    };

    const handleNext = () => {
        // TODO: make API call
        setStep(11);
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
                            value={values.why_will_you_win}
                            onChange={(e) =>
                                handleChange(e, 'why_will_you_win')
                            }
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

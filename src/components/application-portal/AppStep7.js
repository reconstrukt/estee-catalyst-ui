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

export default function AppStep7() {
    const { setStep } = useApplicationPortal();

    const [values, setValues] = useState({
        elevator_pitch: '',
        market_opportunity: '',
    });

    const handleChange = (e, field) => {
        setValues((val) => ({
            ...val,
            [field]: e.target.value,
        }));
    };

    const handleNext = () => {
        // TODO: make API call
        setStep(8);
    };

    return (
        <StepWrapper>
            <Stack spacing={5}>
                <Stack spacing={5}>
                    <Typography>
                        Q5: Please provide your 'elevator pitch' in 100 words or
                        less.
                    </Typography>
                    <Box>
                        <InputLabel>Type here</InputLabel>
                        <TheTextarea
                            value={values.elevator_pitch}
                            onChange={(e) => handleChange(e, 'elevator_pitch')}
                        />
                    </Box>
                </Stack>

                <Stack spacing={5}>
                    <Typography>
                        Q6: What market opportunity is your company addressing
                        (100 words or less)?
                    </Typography>
                    <Box>
                        <InputLabel>Type here</InputLabel>
                        <TheTextarea
                            value={values.market_opportunity}
                            onChange={(e) =>
                                handleChange(e, 'market_opportunity')
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

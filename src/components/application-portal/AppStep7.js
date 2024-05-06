import React, { useState } from 'react';
import StepWrapper from './StepWrapper';
import { Typography, Stack, Box, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';
import TheTextarea from '../elements/TheTextarea';

export default function AppStep7() {
    const { application, updateApplication } = useApplicationPortal();
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        elevator_pitch: application.elevator_pitch
            ? application.elevator_pitch
            : '',
        market_opportunity: application.market_opportunity
            ? application.market_opportunity
            : '',
        step: application.step ? application.step : 7,
    });

    const handleChange = (e, field) => {
        setValues((val) => ({
            ...val,
            [field]: e.target.value,
        }));
    };

    const handleNext = async () => {
        setLoading(true);
        const res = await updateApplication(values);

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

import React, { useState } from 'react';
import StepWrapper from './StepWrapper';
import {
    Typography,
    Stack,
    Box,
    InputLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';
import TheTextarea from '../elements/TheTextarea';

export default function AppStep8() {
    const { setStep } = useApplicationPortal();

    const [values, setValues] = useState({
        concept_background: '',
        social_impact: '',
    });

    const handleChange = (e, field) => {
        setValues((val) => ({
            ...val,
            [field]: e.target.value,
        }));
    };

    const handleNext = () => {
        // TODO: make API call
        setStep(9);
    };

    return (
        <StepWrapper>
            <Stack spacing={5}>
                <Stack spacing={5}>
                    <Typography>
                        Q7: Tell us a little about your background and
                        experience and why it supports your concept.
                    </Typography>
                    <Box>
                        <InputLabel>Type here</InputLabel>
                        <TheTextarea
                            value={values.elevator_pitch}
                            onChange={(e) => handleChange(e, 'elevator_pitch')}
                        />
                    </Box>
                </Stack>

                <Stack alignItems="center" spacing={2.5}>
                    <Typography>
                        Q8: Do you have a sustainability or social impact
                        mission?
                    </Typography>
                    <RadioGroup
                        row
                        value={values.social_impact}
                        onChange={(e) => handleChange(e, 'social_impact')}
                    >
                        <FormControlLabel
                            value={'yes'}
                            control={<Radio color="black" />}
                            label={
                                <Typography variant="button">YES</Typography>
                            }
                        />
                        <FormControlLabel
                            value={'no'}
                            control={<Radio color="black" />}
                            label={<Typography variant="button">NO</Typography>}
                        />
                    </RadioGroup>
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

import React, { useEffect, useState } from 'react';
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
    const { application, updateApplication, values, setValues } =
        useApplicationPortal();
    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setValues({
            concept_background: application.concept_background
                ? application.concept_background
                : '',
            social_impact: application.social_impact
                ? application.social_impact
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

        if (!values['concept_background']) {
            result['concept_background'] = 'This field is required.';
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
                        Q7: Tell us a little about your background and
                        experience and why it supports your concept.
                    </Typography>
                    <Box>
                        <InputLabel>Type here</InputLabel>
                        <TheTextarea
                            helperText={errors.concept_background}
                            error={!!errors.concept_background}
                            value={values.concept_background}
                            onChange={(e) =>
                                handleChange(e, 'concept_background')
                            }
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

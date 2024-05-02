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

export default function AppStep6() {
    const { setStep } = useApplicationPortal();

    const [values, setValues] = useState({
        target_age_demographic: '',
    });

    const handleChange = (e, field) => {
        setValues((val) => ({
            ...val,
            [field]: e.target.value,
        }));
    };

    const [checked, setChecked] = useState([]);

    const toggleCheck = (val) => {
        setChecked((old) => {
            const newArr = [...old];
            let index = newArr.findIndex((el) => el === val);

            if (index > -1) {
                newArr.splice(index, 1);
            } else {
                newArr.push(val);
            }

            return newArr;
        });
    };

    useEffect(() => {
        if (checked) {
            let pc = checked.join(',');

            setValues((val) => ({
                ...val,
                target_age_demographic: pc,
            }));
        }
    }, [checked]);

    const handleNext = () => {
        // TODO: make API call
        setStep(7);
    };

    return (
        <StepWrapper>
            <Stack spacing={5}>
                <Stack spacing={2}>
                    <Typography variant="h2">APPLICATION PORTAL</Typography>
                    <Typography variant="caption">STEP 6/11</Typography>
                </Stack>

                <Stack>
                    <Typography>
                        Q4. What age demographic are you targeting?
                    </Typography>
                </Stack>

                <Stack direction="row">
                    <Stack sx={{ flex: 3 }}>
                        <FormControlLabel
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            control={
                                <Checkbox
                                    checked={
                                        checked && checked.includes('UNDER 18')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('UNDER 18')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    UNDER 18
                                </Typography>
                            }
                        />

                        <FormControlLabel
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            control={
                                <Checkbox
                                    checked={
                                        checked && checked.includes('26 - 40')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('26 - 40')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    26 - 40
                                </Typography>
                            }
                        />

                        <FormControlLabel
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            control={
                                <Checkbox
                                    checked={checked && checked.includes('60+')}
                                    color="black"
                                    onChange={() => toggleCheck('60+')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    60+
                                </Typography>
                            }
                        />
                    </Stack>

                    <Stack sx={{ flex: 2 }}>
                        <FormControlLabel
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            control={
                                <Checkbox
                                    checked={
                                        checked && checked.includes('19 - 25')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('19 - 25')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    19 - 25
                                </Typography>
                            }
                        />

                        <FormControlLabel
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            control={
                                <Checkbox
                                    checked={
                                        checked && checked.includes('41 - 59')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('41 - 59')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    41 - 59
                                </Typography>
                            }
                        />
                    </Stack>
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

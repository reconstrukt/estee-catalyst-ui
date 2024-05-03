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

export default function AppStep9() {
    const { setStep } = useApplicationPortal();

    const [values, setValues] = useState({
        distribution_channels: '',
        distribution_channels_other: '',
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
                distribution_channels: pc,
            }));
        }
    }, [checked]);

    const handleNext = () => {
        // TODO: make API call
        setStep(10);
    };

    return (
        <StepWrapper>
            <Stack spacing={5}>
                <Stack spacing={2}>
                    <Typography variant="h2">APPLICATION PORTAL</Typography>
                    <Typography variant="caption">STEP 9/11</Typography>
                </Stack>

                <Stack>
                    <Typography>
                        If currently, in market, what are your distribution
                        channels? If you have not launched yet, what do you
                        anticipate will be your distribution channels? Please
                        select all that apply.
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
                                        checked &&
                                        checked.includes('OWN BRAND WEBSITES')
                                    }
                                    color="black"
                                    onChange={() =>
                                        toggleCheck('OWN BRAND WEBSITES')
                                    }
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    OWN BRAND WEBSITES
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
                                        checked &&
                                        checked.includes('MULTI-BRAND STORES')
                                    }
                                    color="black"
                                    onChange={() =>
                                        toggleCheck('MULTI-BRAND STORES')
                                    }
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    MULTI-BRAND STORES
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
                                        checked && checked.includes('OTHER')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('OTHER')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    OTHER
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
                                        checked &&
                                        checked.includes('OWN BRAND STORES')
                                    }
                                    color="black"
                                    onChange={() =>
                                        toggleCheck('OWN BRAND STORES')
                                    }
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    OWN BRAND STORES
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
                                        checked &&
                                        checked.includes('ONLINE MARKETPLACES')
                                    }
                                    color="black"
                                    onChange={() =>
                                        toggleCheck('ONLINE MARKETPLACES')
                                    }
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    ONLINE MARKETPLACES
                                </Typography>
                            }
                        />
                    </Stack>
                </Stack>

                {checked.includes('OTHER') && (
                    <Box>
                        <InputLabel>Please indicate</InputLabel>
                        <TheTextarea
                            value={values.distribution_channels_other}
                            onChange={(e) =>
                                handleChange(e, 'distribution_channels_other')
                            }
                        />
                    </Box>
                )}

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

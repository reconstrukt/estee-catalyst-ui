import React, { useEffect, useState } from 'react';
import StepWrapper from './StepWrapper';
import {
    Typography,
    Stack,
    Box,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';

export default function AppStep6() {
    const { application, updateApplication, values, setValues } =
        useApplicationPortal();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setValues({
            target_age_demographic: application.target_age_demographic
                ? application.target_age_demographic
                : '',
        });
    });

    const [checked, setChecked] = useState(
        application.target_age_demographic
            ? application.target_age_demographic.split(',')
            : [],
    );

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

    const handleNext = async () => {
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

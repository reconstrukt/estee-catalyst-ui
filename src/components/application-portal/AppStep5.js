import React, { useEffect, useState } from 'react';
import StepWrapper from './StepWrapper';
import {
    Typography,
    Stack,
    Box,
    InputLabel,
    TextField,
    FormControlLabel,
    Checkbox,
    TextareaAutosize,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';
import TheTextarea from '../elements/TheTextarea';

export default function AppStep5() {
    const { setStep } = useApplicationPortal();

    const [values, setValues] = useState({
        product_categories: '',
        product_categories_other: '',
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
                product_categories: pc,
            }));
        }
    }, [checked]);

    const handleNext = () => {
        // TODO: make API call
        setStep(5);
    };

    return (
        <StepWrapper>
            <Stack spacing={5}>
                <Stack spacing={2}>
                    <Typography variant="h2">APPLICATION PORTAL</Typography>
                    <Typography variant="caption">STEP 5/11</Typography>
                </Stack>

                <Stack>
                    <Typography>
                        Q3. In which product categories do you sell or plan to
                        sell (please select all that apply)?
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
                                        checked && checked.includes('skin care')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('skin care')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    SKIN CARE
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
                                        checked && checked.includes('hair care')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('hair care')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    HAIR CARE
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
                                        checked && checked.includes('fragrance')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('fragrance')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    FRAGRANCE
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
                                        checked && checked.includes('mens')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('mens')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    MENS
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
                                        checked && checked.includes('other')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('other')}
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
                                        checked && checked.includes('body care')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('body care')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    BODY CARE
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
                                        checked && checked.includes('makeup')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('makeup')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    MAKEUP
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
                                        checked.includes('home fragrance')
                                    }
                                    color="black"
                                    onChange={() =>
                                        toggleCheck('home fragrance')
                                    }
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    HOME FRAGRANCE
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
                                        checked && checked.includes('content')
                                    }
                                    color="black"
                                    onChange={() => toggleCheck('content')}
                                />
                            }
                            label={
                                <Typography variant="button" color="black">
                                    CONTENT
                                </Typography>
                            }
                        />
                    </Stack>
                </Stack>

                {checked.includes('other') && (
                    <Box>
                        <InputLabel>Type here</InputLabel>
                        <TheTextarea
                            value={values.product_categories_other}
                            onChange={(e) =>
                                handleChange(e, 'product_categories_other')
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

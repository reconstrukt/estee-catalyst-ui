import React, { useEffect, useState } from 'react';
import StepWrapper from './StepWrapper';
import {
    Typography,
    Stack,
    Box,
    InputLabel,
    TextField,
    RadioGroup,
    Radio,
    FormControlLabel,
    NativeSelect,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';

export default function AppStep3() {
    const { application, updateApplication, values, setValues } =
        useApplicationPortal();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setValues({
            in_market: application.in_market ? application.in_market : 0,
            company_launch_date: application.company_launch_date
                ? application.company_launch_date
                : '',
            company_country: application.company_country
                ? application.company_country
                : '',
            num_of_employees: application.num_of_employees
                ? application.num_of_employees
                : '1-10',
            company_category: application.company_category
                ? application.company_category
                : '',
        });
    }, []);

    const validate = () => {
        let result = { ...errors };

        if (!!values['in_market']) {
            if (!values['company_launch_date']) {
                result['company_launch_date'] = 'This field is required.';
            }
            if (!values['company_country']) {
                result['company_country'] = 'This field is required.';
            }
            if (!values['num_of_employees']) {
                result['num_of_employees'] = 'This field is required.';
            }
        }

        if (!values['company_category']) {
            result['company_category'] = 'This field is required.';
        }

        if (Object.keys(result).length > 0) {
            setErrors(result);
            return false;
        }

        return true;
    };

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

    const handleNext = async () => {
        if (!validate()) return;

        setLoading(true);
        const res = await updateApplication();

        if (!res.success) {
            // TODO handle errs
        }

        setLoading(false);
    };

    const handleRadioChange = (e) => {
        let newValue = e.target.value; // === 'yes' ? 1 : 0;

        setValues((val) => ({
            ...val,
            in_market: newValue === 'yes' ? 1 : 0,
        }));

        if (newValue != 'yes') {
            setErrors((val) => {
                const newVal = { ...val };
                delete newVal['company_launch_date'];
                delete newVal['company_country'];
                delete newVal['num_of_employees'];
                return newVal;
            });
        }
    };

    return (
        <StepWrapper>
            <Stack spacing={5}>
                <Stack spacing={1}>
                    <Stack alignItems="center" spacing={2.5}>
                        <Typography>
                            Q1 :Is your company currently in market (e.g.,
                            trading in retailers or film currently being
                            screened, etc.)?
                        </Typography>
                        <RadioGroup
                            row
                            value={values.in_market === 1 ? 'yes' : 'no'}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel
                                value={'yes'}
                                control={<Radio color="black" />}
                                label={
                                    <Typography variant="button">
                                        YES
                                    </Typography>
                                }
                            />
                            <FormControlLabel
                                value={'no'}
                                control={<Radio color="black" />}
                                label={
                                    <Typography variant="button">NO</Typography>
                                }
                            />
                        </RadioGroup>
                    </Stack>

                    {values.in_market ? (
                        <>
                            <Box>
                                <InputLabel>Date of Company Launch</InputLabel>
                                <TextField
                                    error={!!errors['company_launch_date']}
                                    helperText={errors['company_launch_date']}
                                    type="date"
                                    fullWidth
                                    value={values.company_launch_date}
                                    onChange={(e) =>
                                        handleChange(e, 'company_launch_date')
                                    }
                                />
                            </Box>

                            <Box>
                                <InputLabel>Country of Company HQ</InputLabel>
                                <TextField
                                    error={!!errors['company_country']}
                                    helperText={errors['company_country']}
                                    fullWidth
                                    value={values.company_country}
                                    onChange={(e) =>
                                        handleChange(e, 'company_country')
                                    }
                                />
                            </Box>

                            <Box>
                                <InputLabel>Number of Employees </InputLabel>
                                <NativeSelect
                                    variant="outlined"
                                    fullWidth
                                    value={values.num_of_employees}
                                    onChange={(e) =>
                                        handleChange(e, 'num_of_employees')
                                    }
                                    error={!!errors['num_of_employees']}
                                    helperText={errors['num_of_employees']}
                                >
                                    <option value="1-10">1-10</option>
                                    <option value="10-50">10-50</option>
                                    <option value="50-100">50-100</option>
                                    <option value="100+">100+</option>
                                </NativeSelect>
                            </Box>
                        </>
                    ) : (
                        ''
                    )}

                    <Stack spacing={2.5} pt={5}>
                        <Typography>
                            What category is your company in?
                        </Typography>
                        <Box>
                            <InputLabel>Choose from below</InputLabel>
                            {/* <TextField
                                fullWidth
                                value={values.company_category}
                                onChange={(e) =>
                                    handleChange(e, 'company_category')
                                }
                            /> */}
                            <NativeSelect
                                variant="outlined"
                                fullWidth
                                value={values.company_category}
                                onChange={(e) =>
                                    handleChange(e, 'company_category')
                                }
                            >
                                <option value="Makeup">Makeup</option>
                                <option value="Skin care">Skin care</option>
                                <option value="Body care">Body care</option>
                                <option value="Hair care">Hair care</option>
                                <option value="Fragrance">Fragrance</option>
                                <option value="Home fragrance">
                                    Home fragrance
                                </option>
                                <option value="Creative storytelling">
                                    Creative storytelling
                                </option>
                                <option value="Retail or experiental concept">
                                    Retail or experiental concept
                                </option>
                            </NativeSelect>
                        </Box>
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

import React, { useState } from 'react';
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
    const { application, updateApplication } = useApplicationPortal();
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        in_market: application.in_market ? application.in_market : 0,
        company_launch_date: application.company_launch_date
            ? application.company_launch_date
            : '',
        company_country: application.company_country
            ? application.company_country
            : '',
        num_of_employees: application.num_of_employees
            ? application.num_of_employees
            : '',
        company_category: application.company_category
            ? application.company_category
            : '',
        step: application.step ? application.step : 3,
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

    const handleRadioChange = (e) => {
        let newValue = e.target.value; // === 'yes' ? 1 : 0;

        setValues((val) => ({
            ...val,
            in_market: newValue === 'yes' ? 1 : 0,
        }));
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

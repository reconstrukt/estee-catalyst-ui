import React, { useEffect, useState } from 'react';
import StepWrapper from './StepWrapper';
import { Stack, Box, InputLabel, TextField, Select } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';
import CountrySelect from '../elements/CountrySelect';
import StateSelect from '../elements/StateSelect';

export default function AppStep1() {
    const { updateApplication, application, values, setValues } =
        useApplicationPortal();
    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setValues({
            firstname: application.firstname ? application.firstname : '',
            lastname: application.lastname ? application.lastname : '',
            company: application.company ? application.company : '',
            title: application.title ? application.title : '',
            address1: application.address1 ? application.address1 : '',
            address2: application.address2 ? application.address2 : '',
            city: application.city ? application.city : '',
            state: application.state ? application.state : '',
            zip: application.zip ? application.zip : '',
            country: application.country ? application.country : '',
        });
    }, []);

    const handleChange = (e, field) => {
        if (field === 'country') {
            setValues((val) => ({
                ...val,
                [field]: e.target.value,
                state: '',
            }));
            setErrors((val) => {
                const newVal = { ...val };
                delete newVal['state'];
                return newVal;
            });
        } else {
            setValues((val) => ({
                ...val,
                [field]: e.target.value,
            }));
        }

        setErrors((val) => {
            const newVal = { ...val };
            delete newVal[field];
            return newVal;
        });
    };

    const validate = () => {
        let result = { ...errors };

        for (let key in values) {
            if (!values[key]) {
                if (key != 'company' && key != 'address2' && key != 'state') {
                    result[key] = 'This field is required.';
                }
            }
        }

        if (values.country === 'United States' && !values.state) {
            result['state'] = 'This field is required.';
        }

        if (Object.keys(result).length > 0) {
            setErrors(result);
            return false;
        }

        return true;
    };

    const handleNext = async () => {
        console.log('FIELDS: ', values);
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
                <Stack
                    direction="row"
                    sx={{
                        flexWrap: 'wrap',
                        gap: '10px',
                    }}
                >
                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>First Name</InputLabel>
                        <TextField
                            error={!!errors['firstname']}
                            helperText={errors['firstname']}
                            fullWidth
                            value={values.firstname}
                            onChange={(e) => handleChange(e, 'firstname')}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Last Name</InputLabel>
                        <TextField
                            error={!!errors['lastname']}
                            helperText={errors['lastname']}
                            fullWidth
                            value={values.lastname}
                            onChange={(e) => handleChange(e, 'lastname')}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Title/Designation</InputLabel>
                        <TextField
                            error={!!errors['title']}
                            helperText={errors['title']}
                            fullWidth
                            value={values.title}
                            onChange={(e) => handleChange(e, 'title')}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Company Name (if applicable)</InputLabel>
                        <TextField
                            error={!!errors['company']}
                            helperText={errors['company']}
                            fullWidth
                            value={values.company}
                            onChange={(e) => handleChange(e, 'company')}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Country</InputLabel>
                        <CountrySelect
                            error={!!errors['country']}
                            helperText={errors['country']}
                            value={values.country}
                            onChange={(e) => handleChange(e, 'country')}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Address Line 1</InputLabel>
                        <TextField
                            error={!!errors['address1']}
                            helperText={errors['address1']}
                            fullWidth
                            value={values.address1}
                            onChange={(e) => handleChange(e, 'address1')}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Address Line 2</InputLabel>
                        <TextField
                            error={!!errors['address2']}
                            helperText={errors['address2']}
                            fullWidth
                            value={values.address2}
                            onChange={(e) => handleChange(e, 'address2')}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Town/City</InputLabel>
                        <TextField
                            error={!!errors['city']}
                            helperText={errors['city']}
                            fullWidth
                            value={values.city}
                            onChange={(e) => handleChange(e, 'city')}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>Zip/Post Code</InputLabel>
                        <TextField
                            error={!!errors['zip']}
                            helperText={errors['zip']}
                            fullWidth
                            value={values.zip}
                            onChange={(e) => handleChange(e, 'zip')}
                        />
                    </Box>

                    <Box
                        sx={{
                            flex: {
                                xs: '1 0 100%',
                                md: '1 0 40%',
                            },
                        }}
                    >
                        <InputLabel>State</InputLabel>
                        {values && values.country === 'United States' ? (
                            <StateSelect
                                error={!!errors['state']}
                                helperText={errors['state']}
                                fullWidth
                                value={values.state}
                                onChange={(e) => handleChange(e, 'state')}
                            />
                        ) : (
                            <TextField
                                error={!!errors['state']}
                                helperText={errors['state']}
                                fullWidth
                                value={values.state}
                                onChange={(e) => handleChange(e, 'state')}
                            />
                        )}
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
                        loading={loading}
                    >
                        NEXT STEP
                    </LoadingButton>
                </Box>
            </Stack>
        </StepWrapper>
    );
}

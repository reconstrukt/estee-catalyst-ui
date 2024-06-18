import React, { useEffect, useState } from 'react';
import StepWrapper from './StepWrapper';
import { Stack, Box, InputLabel, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';
import CountrySelect from '../elements/CountrySelect';

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

        for (let key in values) {
            if (!values[key]) {
                if (key != 'company' && key != 'address2') {
                    result[key] = 'This field is required.';
                }
            }
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
                <Stack spacing={1}>
                    <Box>
                        <InputLabel>First Name</InputLabel>
                        <TextField
                            error={!!errors['firstname']}
                            helperText={errors['firstname']}
                            fullWidth
                            value={values.firstname}
                            onChange={(e) => handleChange(e, 'firstname')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Last Name</InputLabel>
                        <TextField
                            error={!!errors['lastname']}
                            helperText={errors['lastname']}
                            fullWidth
                            value={values.lastname}
                            onChange={(e) => handleChange(e, 'lastname')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Title/Designation</InputLabel>
                        <TextField
                            error={!!errors['title']}
                            helperText={errors['title']}
                            fullWidth
                            value={values.title}
                            onChange={(e) => handleChange(e, 'title')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Company Name (if applicable)</InputLabel>
                        <TextField
                            error={!!errors['company']}
                            helperText={errors['company']}
                            fullWidth
                            value={values.company}
                            onChange={(e) => handleChange(e, 'company')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Country</InputLabel>
                        <CountrySelect
                            error={!!errors['country']}
                            helperText={errors['country']}
                            value={values.country}
                            onChange={(e) => handleChange(e, 'country')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Address Line 1</InputLabel>
                        <TextField
                            error={!!errors['address1']}
                            helperText={errors['address1']}
                            fullWidth
                            value={values.address1}
                            onChange={(e) => handleChange(e, 'address1')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Address Line 2</InputLabel>
                        <TextField
                            error={!!errors['address2']}
                            helperText={errors['address2']}
                            fullWidth
                            value={values.address2}
                            onChange={(e) => handleChange(e, 'address2')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Town/City</InputLabel>
                        <TextField
                            error={!!errors['city']}
                            helperText={errors['city']}
                            fullWidth
                            value={values.city}
                            onChange={(e) => handleChange(e, 'city')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Zip/Post Code</InputLabel>
                        <TextField
                            error={!!errors['zip']}
                            helperText={errors['zip']}
                            fullWidth
                            value={values.zip}
                            onChange={(e) => handleChange(e, 'zip')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>State</InputLabel>
                        <TextField
                            error={!!errors['state']}
                            helperText={errors['state']}
                            fullWidth
                            value={values.state}
                            onChange={(e) => handleChange(e, 'state')}
                        />
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

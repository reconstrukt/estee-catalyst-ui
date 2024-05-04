import React, { useState } from 'react';
import StepWrapper from './StepWrapper';
import { Typography, Stack, Box, InputLabel, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';

export default function AppStep1() {
    const { setStep, updateApplication, application } = useApplicationPortal();
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
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
        step: application.step ? application.step : 2, // always send currentStep + 1 to api
    });

    console.log('step 1, application: ', application);

    const handleChange = (e, field) => {
        setValues((val) => ({
            ...val,
            [field]: e.target.value,
        }));
    };

    const handleNext = async () => {
        // TODO: make API call
        setLoading(true);
        const res = await updateApplication(values);

        if (res.success) {
            setStep(2);
        } else {
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
                            fullWidth
                            value={values.firstname}
                            onChange={(e) => handleChange(e, 'firstname')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Last Name</InputLabel>
                        <TextField
                            fullWidth
                            value={values.lastname}
                            onChange={(e) => handleChange(e, 'lastname')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Title/Designation</InputLabel>
                        <TextField
                            fullWidth
                            value={values.title}
                            onChange={(e) => handleChange(e, 'title')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Company Name (if applicable)</InputLabel>
                        <TextField
                            fullWidth
                            value={values.company}
                            onChange={(e) => handleChange(e, 'company')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Country</InputLabel>
                        <TextField
                            fullWidth
                            value={values.country}
                            onChange={(e) => handleChange(e, 'country')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Address Line 1</InputLabel>
                        <TextField
                            fullWidth
                            value={values.address1}
                            onChange={(e) => handleChange(e, 'address1')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Address Line 2</InputLabel>
                        <TextField
                            fullWidth
                            value={values.address2}
                            onChange={(e) => handleChange(e, 'address2')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Town/City</InputLabel>
                        <TextField
                            fullWidth
                            value={values.city}
                            onChange={(e) => handleChange(e, 'city')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>Zip/Post Code</InputLabel>
                        <TextField
                            fullWidth
                            value={values.zip}
                            onChange={(e) => handleChange(e, 'zip')}
                        />
                    </Box>

                    <Box>
                        <InputLabel>State</InputLabel>
                        <TextField
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
                    >
                        NEXT STEP
                    </LoadingButton>
                </Box>
            </Stack>
        </StepWrapper>
    );
}

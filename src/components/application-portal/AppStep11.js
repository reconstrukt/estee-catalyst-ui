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

export default function AppStep11() {
    const { application, updateApplication, values, setValues } =
        useApplicationPortal();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setValues({
            anything_else: application.anything_else
                ? application.anything_else
                : '',
            terms: 0,
            privacy: 0,
            submitted: 1,
        });
    }, []);

    const handleChange = (e, field) => {
        setValues((val) => ({
            ...val,
            [field]: e.target.value,
        }));
    };

    const handleNext = async () => {
        setLoading(true);
        const res = await updateApplication();

        if (!res.success) {
            // TODO handle errs
        } else {
        }

        setLoading(false);
    };

    const handleCheck = (e, field) => {
        const checked = values[field] === 1;

        setValues((val) => ({
            ...val,
            [field]: checked ? 0 : 1,
        }));
    };

    return (
        <StepWrapper>
            <Stack spacing={5}>
                <Stack spacing={5}>
                    <Typography>
                        Anything else you&apos;d like us to know (100 words or
                        less)?
                    </Typography>
                    <Box>
                        <InputLabel>Type here</InputLabel>
                        <TheTextarea
                            value={values.anything_else}
                            onChange={(e) => handleChange(e, 'anything_else')}
                            sx={{ mb: 2 }}
                        />

                        <Box>
                            <FormControlLabel
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    mb: 1,
                                }}
                                control={
                                    <Checkbox
                                        color="black"
                                        sx={{
                                            marginTop: -1.2,
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 14,
                                            },
                                        }}
                                        checked={values.terms === 1}
                                        onChange={(e) =>
                                            handleCheck(e, 'terms')
                                        }
                                    />
                                }
                                label={
                                    <Typography
                                        variant="button"
                                        color="black"
                                        sx={{
                                            fontSize: 10,
                                            lineHeight: 1.2,
                                            textAlign: 'left',
                                            textTransform: 'none',
                                        }}
                                    >
                                        I have read and agree to the Privacy
                                        Policy, Program Rules, and Terms and
                                        Conditions and confirm that all
                                        information provided by me in this
                                        application form is true and correct,
                                        that I have all necessary right and
                                        authority to submit this application and
                                        that by doing so I am not violating any
                                        intellectual property rights or any
                                        other rights of any third parties,
                                        including without limitation, any trade
                                        secret, copyright, authorship rights,
                                        trademark and/or personality rights
                                        (such as image rights or privacy
                                        rights). By submitting this application,
                                        I consent, on my behalf and, if
                                        applicable, on behalf of the entity I
                                        represent, to Estée Lauder
                                        International, Inc. (ELI), its
                                        affiliates and any party authorized by
                                        ELI to use, publicize, evaluate and
                                        distribute the information contained in
                                        this application, including all
                                        pictures, content, data and videos for
                                        any purpose ELI may deem fit and
                                        appropriate, and in all forms of media
                                        now known or hereafter invented.
                                    </Typography>
                                }
                            />

                            <FormControlLabel
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                }}
                                control={
                                    <Checkbox
                                        color="black"
                                        sx={{
                                            marginTop: -1.2,
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 14,
                                            },
                                        }}
                                        checked={values.privacy === 1}
                                        onChange={(e) =>
                                            handleCheck(e, 'privacy')
                                        }
                                    />
                                }
                                label={
                                    <Typography
                                        variant="button"
                                        color="black"
                                        sx={{
                                            fontSize: 10,
                                            lineHeight: 1.2,
                                            textAlign: 'left',
                                            textTransform: 'none',
                                        }}
                                    >
                                        I confirm that I accept the Privacy
                                        Policy, Program Rules and Terms and
                                        Conditions.Y.
                                    </Typography>
                                }
                            />
                        </Box>
                    </Box>
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
                        disabled={!values.terms || !values.privacy}
                    >
                        SUBMIT
                    </LoadingButton>
                </Box>
            </Stack>
        </StepWrapper>
    );
}

import React, { useState } from 'react';
import StepWrapper from './StepWrapper';
import { Typography, Stack, Box, InputLabel, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useApplicationPortal from './ApplicationContext';

export default function AppStep4() {
    const { application, updateApplication } = useApplicationPortal();
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        video_link: application.video_link ? application.video_link : '',
        step: application.step ? application.step : 4,
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

    return (
        <StepWrapper>
            <Stack spacing={5}>
                <Stack>
                    <Typography>
                        Please upload a link to a TikTok that is a minimum of 1
                        minute in length, addressing the question of what beauty
                        means to you (TBD on exact wording) and
                        #Jointhecatalysts. We want to hear your story and see
                        your ideas. Be as creative as you wish! Don't forget to
                        tag and follow @niv_elc on TikTok!
                    </Typography>
                    <br />
                    <Typography>
                        If TikTok is not available to you, we will also consider
                        a video link via another platform (e.g., Youtube, Vimeo,
                        etc.). If you have any questions on what to submit,
                        please consult the Program Rules.
                    </Typography>
                </Stack>

                <Stack spacing={1}>
                    <Box>
                        <InputLabel>Paste link here</InputLabel>
                        <TextField
                            fullWidth
                            value={values.video_link}
                            onChange={(e) => handleChange(e, 'video_link')}
                        />
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
                    >
                        NEXT STEP
                    </LoadingButton>
                </Box>
            </Stack>
        </StepWrapper>
    );
}

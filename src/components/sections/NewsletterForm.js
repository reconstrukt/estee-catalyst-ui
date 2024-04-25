import {
    Box,
    TextField,
    Button,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Stack,
    Typography,
} from '@mui/material';
import React from 'react';

export default function NewsletterForm() {
    return (
        <Stack spacing={2}>
            <Box>
                <FormGroup
                    row
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                    }}
                >
                    <TextField
                        variant="outlined"
                        color="black"
                        placeholder="EMAIL"
                        sx={{
                            marginRight: '-1px',
                            flex: 1,
                        }}
                    />
                    <Button variant="outlined" color="black" disableElevation>
                        SUBMIT
                    </Button>
                </FormGroup>
            </Box>

            <Box>
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
                            }}
                        />
                    }
                    label={
                        <Typography variant="button" color="black">
                            BY CHECKING THIS BOX AND CLICKING SIGN UP, I AGREE
                            TO THE TERMS AND CONDITIONS AND PRIVACY POLICY.
                        </Typography>
                    }
                ></FormControlLabel>
            </Box>
        </Stack>
    );
}

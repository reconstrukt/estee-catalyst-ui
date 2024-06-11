import { Box, Typography, Button, Stack } from '@mui/material';
import PageLayout from '@/components/layouts/PageLayout';
import Section from '@/components/sections/Section';

export default function ThePrizes() {
    return (
        <PageLayout transparentHeader={false}>
            <Section
                sx={{
                    maxWidth: 1172,
                    margin: '0 auto',
                }}
            >
                <Stack
                    spacing={10}
                    sx={{
                        textAlign: 'left',
                        '& p': {
                            my: '10px',
                            lineHeight: '20px',
                        },

                        '& li': {
                            my: '10px',
                            lineHeight: '20px',
                        },

                        ul: {
                            margin: 0,
                            pl: 3,
                        },
                    }}
                >
                    <Typography variant="h2" sx={{ textAlign: 'center' }}>
                        TERMS AND CONDITIONS
                    </Typography>

                    <Box>
                        <Typography variant="h4">TO BE ADDED</Typography>
                        <p>
                            Let's add this once we have the final version as
                            it's very time consuming to do it twice.
                        </p>
                    </Box>
                </Stack>
            </Section>
        </PageLayout>
    );
}

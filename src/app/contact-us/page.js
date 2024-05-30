import { Box, Typography, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';

import contactmob from '../../../assets/images/contactmob.jpg';
import contact from '../../../assets/images/contact.jpg';
import Section from '@/components/sections/Section';
import sharedStyles from '@/theme/sharedStyles';

export default function ContactUs() {
    return (
        <PageLayout>
            <Hero
                sx={{
                    backgroundImage: {
                        xs: `url(${contactmob.src})`,
                        md: `url(${contact.src})`,
                    },
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        color: 'white.main',
                        maxWidth: 1164,
                    }}
                >
                    <Typography variant="h1" mb={1}>
                        GET IN TOUCH
                    </Typography>
                </Box>
            </Hero>

            <Section
                sx={{
                    backgroundImage: sharedStyles.linearGradient.pinkRed,
                }}
            >
                <Stack
                    spacing={6}
                    sx={{
                        maxWidth: 1172,
                        margin: '0 auto',
                    }}
                >
                    <Stack alignItems="center" spacing={3}>
                        <Typography variant="h2">
                            IF YOU ARE A COMPANY INTERESTED IN SUPPORTING THE
                            CATALYSTS, PLEASE REACH OUT TO:
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: 600,
                            }}
                        >
                            <a href="mailto:hello@beautyandyouawards.com">
                                hello@beautyandyouawards.com
                            </a>
                        </Typography>
                    </Stack>

                    <Typography variant="h2">
                        FOR ANYTHING ELSE, PLEASE SEE OUR FAQ PAGE, OR CONTACT
                        US
                    </Typography>
                </Stack>
            </Section>
        </PageLayout>
    );
}

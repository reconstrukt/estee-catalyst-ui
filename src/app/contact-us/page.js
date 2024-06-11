import { Box, Typography, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';

import contactmob from '../../../assets/images/contactmob.jpg';
import contact from '../../../assets/images/contact.jpg';
import Section from '@/components/sections/Section';
import sharedStyles from '@/theme/sharedStyles';

import Link from 'next/link';

export default function ContactUs() {
    return (
        <PageLayout>
            <Hero
                backgroundImage={{
                    xs: contactmob.src,
                    md: contact.src,
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
                            <a href="mailto:hello@thecatalystsworld.com">
                                hello@thecatalystsworld.com
                            </a>
                        </Typography>
                    </Stack>

                    <Typography variant="h2">
                        FOR ANYTHING ELSE, PLEASE SEE OUR{' '}
                        <Link href="/faq">FAQ</Link> PAGE, OR{' '}
                        <a href="mailto:hello@thecatalystsworld.com">
                            CONTACT US
                        </a>
                    </Typography>
                </Stack>
            </Section>
        </PageLayout>
    );
}

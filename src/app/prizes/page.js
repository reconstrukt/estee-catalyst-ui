import { Box, Typography, Button, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';
import prizesmob from '../../../assets/images/prizesmob.jpg';
import prizes from '../../../assets/images/prizes.jpg';
import Section from '@/components/sections/Section';

export default function ThePrizes() {
    return (
        <PageLayout>
            <Hero
                backgroundImage={{
                    xs: prizesmob.src,
                    md: prizes.src,
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
                        THE PRIZES
                    </Typography>
                    <Typography variant="subtitle1">
                        Two winners of The Catalysts will receive funding for
                        their ideas based on their applications.
                    </Typography>
                </Box>
            </Hero>

            <Section
                sx={{
                    textAlign: 'center',
                }}
            >
                <Box mb={8}>
                    <Typography variant="subtitle1">
                        By participating in the program, all winners will have
                        access to the following:
                    </Typography>
                </Box>

                <Stack
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            md: 'row',
                        },
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            px: {
                                xs: 0,
                                md: 4,
                            },
                            py: {
                                xs: 4,
                                md: 4,
                            },
                        }}
                    >
                        <Typography variant="h2" sx={{ mb: 1 }}>
                            FINANCIAL AND MARKETING SUPPORT:
                        </Typography>
                        <Typography variant="body1">
                            A total prize pool of up to $500k to directly fund
                            the most innovative and inspiring creative concepts
                            plus up to $150k in ad credits from TikTok.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            px: {
                                xs: 0,
                                md: 4,
                            },
                            py: {
                                xs: 4,
                                md: 4,
                            },
                        }}
                    >
                        <Typography variant="h2" sx={{ mb: 1 }}>
                            AWARENESS:
                        </Typography>
                        <Typography variant="body1">
                            International press for the winners, along with
                            amplification on The Estée Lauder Companies
                            platforms.
                        </Typography>
                    </Box>
                </Stack>

                <Stack
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            md: 'row',
                        },
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            px: {
                                xs: 0,
                                md: 4,
                            },
                            py: {
                                xs: 4,
                                md: 4,
                            },
                        }}
                    >
                        <Typography variant="h2" sx={{ mb: 1 }}>
                            MENTORSHIP:
                        </Typography>
                        <Typography variant="body1">
                            Access to experts from across the beauty landscape:
                            including product and content development, brand
                            building, finance, operations and supply chain.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            px: {
                                xs: 0,
                                md: 4,
                            },
                            py: {
                                xs: 4,
                                md: 4,
                            },
                        }}
                    >
                        <Typography variant="h2" sx={{ mb: 1 }}>
                            DISTRIBUTION SUPPORT:
                        </Typography>
                        <Typography variant="body1">
                            Valuable guidance on how to scale and reach
                            consumers at both local and global levels.
                        </Typography>
                    </Box>
                </Stack>
            </Section>
        </PageLayout>
    );
}

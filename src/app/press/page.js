import { Box, Typography, Stack } from '@mui/material';
import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';

import press from '@/cms/press';
import Link from 'next/link';
import Grid from '@/components/sections/Grid';
import GridItem from '@/components/sections/GridItem';

import pressmob from '../../../assets/images/pressmob.jpg';
import pressimg from '../../../assets/images/press.jpg';

export default function ContactUs() {
    return (
        <PageLayout>
            <Hero
                backgroundImage={{
                    xs: pressmob.src,
                    md: pressimg.src,
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
                        PRESS
                    </Typography>
                    <Typography variant="subtitle1">
                        Read what others say about us
                    </Typography>
                </Box>
            </Hero>

            <Grid>
                {press.map((item, index) => (
                    <GridItem key={index}>
                        <Stack
                            spacing={2}
                            sx={{
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    width: {
                                        xs: 170,
                                        md: 222,
                                    },
                                    height: {
                                        xs: 129,
                                        md: 165,
                                    },
                                    border: '1px solid',
                                    borderColor: 'black.main',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.logo}
                            </Box>

                            <Box>
                                <Typography variant="h4" sx={{ mb: 0.5 }}>
                                    {item.date}
                                </Typography>
                                <Typography variant="body1">
                                    {item.title}
                                </Typography>
                            </Box>

                            <Box>
                                <Link href={item.link} target="_blank">
                                    READ MORE
                                </Link>
                            </Box>
                        </Stack>
                    </GridItem>
                ))}
            </Grid>
        </PageLayout>
    );
}

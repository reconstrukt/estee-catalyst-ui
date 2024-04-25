import { Box, Typography, Stack, ButtonBase } from '@mui/material';
import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';

import PressImage from '../../../assets/images/press.jpg';
import judges from '@/cms/judges';
import Grid from '@/components/sections/Grid';
import GridItem from '@/components/sections/GridItem';

export default function ContactUs() {
    return (
        <PageLayout>
            <Hero backgroundImage={PressImage.src}>
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
                {judges.map((item, index) => (
                    <GridItem key={index}>
                        <ButtonBase
                            sx={{
                                cursor: 'pointer',
                            }}
                        >
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
                                            xs: 217,
                                            md: 277,
                                        },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                        backgroundImage: `url(${item.image.src})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                    }}
                                ></Box>

                                <Box>
                                    <Typography variant="h4" sx={{ mb: 0.5 }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body1">
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Stack>
                        </ButtonBase>
                    </GridItem>
                ))}
            </Grid>
        </PageLayout>
    );
}

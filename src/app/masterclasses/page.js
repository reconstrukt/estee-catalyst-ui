'use client';

import React, { useState } from 'react';

import masterclassesmob from '../../../assets/images/masterclassesmob.jpg';
import masterclassesimg from '../../../assets/images/masterclasses.jpg';

import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';
import { Box, ButtonBase, Typography, Stack } from '@mui/material';
import Section from '@/components/sections/Section';
import Grid from '@/components/sections/Grid';
import masterclasses from '@/cms/masterclasses';
import GridItem from '@/components/sections/GridItem';

export default function Masterclasses() {
    const [selected, setSelected] = useState(null);

    return (
        <PageLayout>
            <Hero
                sx={{
                    backgroundImage: {
                        xs: `url(${masterclassesmob.src})`,
                        md: `url(${masterclassesimg.src})`,
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
                        THE MASTERCLASSES
                    </Typography>
                    <Typography variant="subtitle1">
                        Join us for a series of masterclasses on the
                        fundamentals of building a beauty business. Learn from
                        creative disruptors, storytellers and founders.
                    </Typography>
                </Box>
            </Hero>

            <Section>
                <Typography variant="subtitle1">
                    There has never been a more exciting time to join the beauty
                    industry. But how do you get started? Whether you dream of
                    revolutionising skincare, cosmetics, or fragrance, The
                    Catalysts Masterclass series taps a group of
                    industry-leading founders, storytellers, and creatives to
                    share the insights you need to build a next generation
                    beauty brand.
                </Typography>
            </Section>

            <Box>
                <Grid
                    innerSx={{
                        maxWidth: 1172,
                    }}
                >
                    {masterclasses.map((lesson, index) => (
                        <GridItem
                            key={index}
                            sx={{
                                flex: {
                                    xs: '1 0 40%',
                                    md: '1 0 21%',
                                },
                            }}
                        >
                            <ButtonBase onClick={() => setSelected(lesson)}>
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
                                                xs: 174,
                                                md: 222,
                                            },
                                            height: {
                                                xs: 310,
                                                md: 396,
                                            },
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '10px',
                                            overflow: 'hidden',

                                            backgroundImage: `url(${lesson.thumb.src})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                        }}
                                    ></Box>

                                    <Box>
                                        <Typography
                                            variant="h4"
                                            sx={{ mb: 0.5 }}
                                        >
                                            {lesson.lesson}
                                        </Typography>
                                        <Typography variant="body1">
                                            {lesson.title}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </ButtonBase>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </PageLayout>
    );
}

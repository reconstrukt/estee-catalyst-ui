import React from 'react';

import masterclassesmob from '../../../assets/images/masterclassesmob.jpg';
import masterclassesimg from '../../../assets/images/masterclasses.jpg';

import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';
import { Box, Typography } from '@mui/material';
import Section from '@/components/sections/Section';

export default function Masterclasses() {
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
        </PageLayout>
    );
}

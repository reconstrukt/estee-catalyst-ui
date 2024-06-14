'use client';

import { Box, Typography, Stack, ButtonBase } from '@mui/material';
import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';

import judges from '@/cms/judges';
import Grid from '@/components/sections/Grid';
import GridItem from '@/components/sections/GridItem';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import jurymob from '../../../assets/images/jurymob.jpg';
import jury from '../../../assets/images/jury.jpg';
import TheDialog from '@/components/sections/TheDialog';
import PersonModal from '@/components/sections/PersonModal';
import PersonGridItem from '@/components/sections/PersonGridItem';

export default function ContactUs() {
    const [selected, setSelected] = useState(null);

    return (
        <PageLayout>
            <Hero
                backgroundImage={{
                    xs: jurymob.src,
                    md: jury.src,
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
                        A JURY OF CREATIVE LEADERS
                    </Typography>
                </Box>
            </Hero>

            <Grid>
                {judges.map((item, index) => (
                    <GridItem key={index}>
                        <PersonGridItem
                            item={item}
                            onClick={() => setSelected(item)}
                        />
                    </GridItem>
                ))}
            </Grid>

            <TheDialog
                open={!!selected}
                title={selected ? selected.name : ''}
                onClose={() => setSelected(null)}
            >
                {selected && (
                    <PersonModal
                        selected={selected}
                        all={judges}
                        setSelected={setSelected}
                    />
                )}
            </TheDialog>
        </PageLayout>
    );
}

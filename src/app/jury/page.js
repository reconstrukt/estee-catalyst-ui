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
                        <ButtonBase
                            sx={{
                                cursor: 'pointer',
                            }}
                            onClick={() => setSelected(item)}
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
                                            xs: 300,
                                            md: 394,
                                        },
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.image && (
                                        <Image
                                            src={item.image.src}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                                filter: 'grayscale(1)',
                                            }}
                                        />
                                    )}
                                </Box>

                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{ mb: 0.5, whiteSpace: 'nowrap' }}
                                    >
                                        {item.name}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: '20px !important',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Stack>
                        </ButtonBase>
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

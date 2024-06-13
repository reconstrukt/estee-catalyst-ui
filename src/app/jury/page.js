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
                                display: 'block',
                                width: '100%',
                            }}
                            onClick={() => setSelected(item)}
                        >
                            <Stack alignItems="center" spacing={2}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: {
                                            xs: '100%',
                                            md: 222,
                                        },
                                        height: {
                                            xs: 'auto',
                                            md: 394,
                                        },
                                    }}
                                >
                                    {item.image && (
                                        <Image
                                            src={item.image.src}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{
                                                top: 0,
                                                left: 0,
                                                display: 'block',
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

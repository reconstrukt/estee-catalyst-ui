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

export default function ContactUs() {
    const [selected, setSelected] = useState(null);
    const [nextJudge, setNextJudge] = useState(null);

    useEffect(() => {
        if (!selected) {
            setNextJudge(null);
        } else {
            let index = judges.findIndex((el) => el.name === selected.name);
            if (!!judges[index + 1]) {
                setNextJudge(judges[index + 1]);
            } else {
                setNextJudge(judges[0]);
            }
        }
    }, [selected]);

    const onNextJudgeClick = () => {
        setSelected(nextJudge);
    };

    return (
        <PageLayout>
            <Hero
                sx={{
                    backgroundImage: {
                        xs: `url(${jurymob.src})`,
                        md: `url(${jury.src})`,
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
                                            xs: 217,
                                            md: 277,
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

            <TheDialog
                open={!!selected}
                title={selected ? selected.name : ''}
                onClose={() => setSelected(null)}
            >
                {selected && (
                    <>
                        <Box>
                            <Stack
                                direction="row"
                                spacing={0.5}
                                alignItems="center"
                                justifyContent="center"
                            >
                                {judges.map((judge, i) => (
                                    <ButtonBase
                                        key={i}
                                        onClick={() => setSelected(judge)}
                                    >
                                        <Box
                                            sx={{
                                                width: 48,
                                                height: 60,
                                            }}
                                        >
                                            <Image
                                                src={judge.image.src}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    filter: 'grayscale(1)',
                                                }}
                                            />
                                        </Box>
                                    </ButtonBase>
                                ))}
                            </Stack>
                        </Box>

                        <Box px={2}>
                            <Box
                                sx={{
                                    width: {
                                        xs: 234,
                                        md: 341,
                                    },
                                    height: {
                                        xs: 292,
                                        md: 425,
                                    },
                                    margin: 'auto',
                                    mt: 8,
                                }}
                            >
                                <Image
                                    src={selected.image.src}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        filter: 'grayscale(1)',
                                    }}
                                />
                            </Box>

                            <Box
                                mt={8}
                                mb={10}
                                sx={{
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h2" sx={{ mb: 1 }}>
                                    {selected.name}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {selected.copy}
                                </Typography>
                            </Box>

                            {nextJudge && (
                                <Box
                                    sx={{
                                        maxWidth: 222,
                                        margin: 'auto',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="h4" sx={{ mb: 8 }}>
                                        NEXT JUDGE
                                    </Typography>

                                    <Box>
                                        <ButtonBase
                                            sx={{
                                                cursor: 'pointer',
                                            }}
                                            onClick={onNextJudgeClick}
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
                                                        justifyContent:
                                                            'center',

                                                        backgroundImage: `url(${nextJudge.image.src})`,
                                                        backgroundPosition:
                                                            'center',
                                                        backgroundSize: 'cover',
                                                    }}
                                                >
                                                    <Image
                                                        src={
                                                            nextJudge.image.src
                                                        }
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            objectFit: 'cover',
                                                            objectPosition:
                                                                'center',
                                                            filter: 'grayscale(1)',
                                                        }}
                                                    />
                                                </Box>

                                                <Box>
                                                    <Typography
                                                        variant="h4"
                                                        sx={{ mb: 0.5 }}
                                                    >
                                                        {nextJudge.name}
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        {nextJudge.title}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </ButtonBase>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </>
                )}
            </TheDialog>
        </PageLayout>
    );
}

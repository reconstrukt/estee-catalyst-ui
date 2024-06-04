'use client';

import React, { useState, useRef, useEffect } from 'react';

import masterclassesmob from '../../../assets/images/masterclassesmob.jpg';
import masterclassesimg from '../../../assets/images/masterclasses.jpg';
import CloseIcon from '../../../assets/svg/CloseIcon.svg';

import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';
import {
    Box,
    ButtonBase,
    Typography,
    Stack,
    Dialog,
    IconButton,
} from '@mui/material';
import Section from '@/components/sections/Section';
import Grid from '@/components/sections/Grid';
import masterclasses from '@/cms/masterclasses';
import GridItem from '@/components/sections/GridItem';
import Image from 'next/image';

export default function Masterclasses() {
    const [selected, setSelected] = useState(null);

    const [nextLesson, setNextLesson] = useState(null);

    const dialogTitleRef = useRef(null);

    useEffect(() => {
        if (!selected) {
            setNextLesson(null);
        } else {
            let index = masterclasses.findIndex(
                (el) => el.lesson === selected.lesson,
            );
            if (!!masterclasses[index + 1]) {
                setNextLesson(masterclasses[index + 1]);
            } else {
                setNextLesson(masterclasses[0]);
            }
        }
    }, [selected]);

    const onNextLessonClick = () => {
        setSelected(nextLesson);

        if (dialogTitleRef.current) {
            dialogTitleRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

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

            <Dialog
                open={!!selected}
                fullScreen
                sx={{
                    zIndex: 10000,
                }}
            >
                {selected && (
                    <Box ref={dialogTitleRef}>
                        <Stack
                            direction="row"
                            px={2}
                            py={1}
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Box>
                                <Typography variant="h4">
                                    {selected.lesson.toUpperCase()}
                                </Typography>
                            </Box>

                            <Box>
                                <IconButton
                                    variant="text"
                                    color="black"
                                    onClick={() => setSelected(null)}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                        </Stack>

                        <Box>
                            <Stack
                                direction="row"
                                spacing={0.5}
                                alignItems="center"
                                justifyContent="center"
                            >
                                {masterclasses.map((lesson, i) => (
                                    <ButtonBase
                                        key={i}
                                        onClick={() => setSelected(lesson)}
                                    >
                                        <Box
                                            sx={{
                                                width: 48,
                                                height: 60,
                                            }}
                                        >
                                            <Image
                                                src={lesson.thumb.src}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
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
                                        xs: 222,
                                        md: 333,
                                    },
                                    height: {
                                        xs: 396,
                                        md: 594,
                                    },
                                    margin: 'auto',
                                    mt: 8,

                                    video: {
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '10px',
                                        overflow: 'hidden',
                                    },
                                }}
                            >
                                <video controls>
                                    <source src={selected.video} />
                                </video>
                            </Box>

                            <Box
                                mt={8}
                                mb={10}
                                sx={{
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h2" sx={{ mb: 1 }}>
                                    {selected.title.toUpperCase()}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {selected.copy}
                                </Typography>
                            </Box>

                            {nextLesson && (
                                <Box
                                    sx={{
                                        maxWidth: 222,
                                        margin: '0 auto 50px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="h4" sx={{ mb: 8 }}>
                                        NEXT LESSON
                                    </Typography>

                                    <Box>
                                        <ButtonBase
                                            sx={{
                                                cursor: 'pointer',
                                            }}
                                            onClick={onNextLessonClick}
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
                                                            xs: 174,
                                                            // md: 222,
                                                        },
                                                        height: {
                                                            xs: 310,
                                                            // md: 277,
                                                        },
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent:
                                                            'center',

                                                        backgroundImage: `url(${nextLesson.thumb.src})`,
                                                        backgroundPosition:
                                                            'center',
                                                        backgroundSize: 'cover',
                                                        borderRadius: '10px',
                                                        overflow: 'hidden',
                                                    }}
                                                ></Box>

                                                <Box>
                                                    <Typography
                                                        variant="h4"
                                                        sx={{ mb: 0.5 }}
                                                    >
                                                        {nextLesson.lesson}
                                                    </Typography>
                                                    <Typography variant="body1">
                                                        {nextLesson.title}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </ButtonBase>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Box>
                )}
            </Dialog>
        </PageLayout>
    );
}
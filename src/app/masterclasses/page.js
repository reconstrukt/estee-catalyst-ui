'use client';

import React, { useState, useRef, useEffect } from 'react';

import masterclassesmob from '../../../assets/images/masterclassesmob.jpg';
import masterclassesimg from '../../../assets/images/masterclasses.jpg';

import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';
import { Box, ButtonBase, Typography, Stack } from '@mui/material';
import Section from '@/components/sections/Section';
import Grid from '@/components/sections/Grid';
import GridItem from '@/components/sections/GridItem';
import Image from 'next/image';

import masterclasses from '@/cms/masterclasses';
import experts from '@/cms/masterclassParticipants';
import TheDialog from '@/components/sections/TheDialog';
import PersonModal from '@/components/sections/PersonModal';

import Link from 'next/link';
import PersonGridItem from '@/components/sections/PersonGridItem';

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

        console.log('selected: ', selected);
    }, [selected]);

    const onNextLessonClick = () => {
        setSelected(nextLesson);

        if (dialogTitleRef.current) {
            dialogTitleRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const [selectedJudge, setSelectedJudge] = useState(null);

    return (
        <PageLayout>
            <Hero
                backgroundImage={{
                    xs: masterclassesmob.src,
                    md: masterclassesimg.src,
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

                <Typography sx={{ mt: 4 }}>
                    New masterclasses will be added weekly. Check back for the
                    latest or follow on{' '}
                    <Link
                        target="_blank"
                        href="https://www.tiktok.com/@thecatalystsworld"
                    >
                        @thecatalystsworld
                    </Link>{' '}
                    for newest classes.
                </Typography>
            </Section>

            <Box>
                <Grid
                    innerSx={{
                        maxWidth: 1172,
                    }}
                >
                    {masterclasses.map((lesson, index) => (
                        <GridItem key={index} sx={{}}>
                            <ButtonBase
                                onClick={() => setSelected(lesson)}
                                sx={{
                                    display: 'block',
                                    width: '100%',
                                }}
                            >
                                <Stack
                                    spacing={2}
                                    sx={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            maxWidth: '100%',
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
                                        }}
                                    >
                                        <Image
                                            src={lesson.thumb.src}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="h4"
                                            sx={{ mb: 0.5 }}
                                        >
                                            {lesson.lesson}
                                        </Typography>
                                        {/* <Typography variant="body1">
                                            {lesson.title}
                                        </Typography> */}
                                    </Box>
                                </Stack>
                            </ButtonBase>
                        </GridItem>
                    ))}
                </Grid>
            </Box>

            <TheDialog
                open={!!selected}
                onClose={() => setSelected(null)}
                title={selected ? selected.lesson.toUpperCase() : ''}
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
                                {masterclasses.map((lesson, i) => (
                                    <ButtonBase
                                        key={i}
                                        onClick={() => {
                                            setSelected(null);
                                            setSelected(lesson);
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 48,
                                                height: 60,

                                                ...(lesson.lesson ===
                                                selected.lesson
                                                    ? {
                                                          '&::after': {
                                                              content: '""',
                                                              position:
                                                                  'absolute',
                                                              bottom: -4,
                                                              left: 0,
                                                              width: '100%',
                                                              height: 2,
                                                              background:
                                                                  '#FF5A00',
                                                          },
                                                      }
                                                    : {}),
                                            }}
                                        >
                                            <Image
                                                src={lesson.thumb.src}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    objectPosition: 'center',
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
                                {selected && selected.video && (
                                    <video controls>
                                        <source
                                            src={`${selected.video}#t=0.001`}
                                        />
                                    </video>
                                )}
                            </Box>

                            <Box
                                mt={8}
                                mb={10}
                                sx={{
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h2" sx={{ mb: 1 }}>
                                    {/* {selected.title.toUpperCase()} */}
                                    {selected.lesson}
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
                                        NEXT EPISODE
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
                                                        borderRadius: '10px',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <Image
                                                        src={
                                                            nextLesson.thumb.src
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
                                                        }}
                                                    />
                                                </Box>

                                                <Box>
                                                    <Typography
                                                        variant="h4"
                                                        sx={{ mb: 0.5 }}
                                                    >
                                                        {nextLesson.lesson}
                                                    </Typography>
                                                    {/* <Typography variant="body1">
                                                        {nextLesson.title}
                                                    </Typography> */}
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

            <Section>
                <Typography variant="h2">OUR EXPERTS</Typography>

                <Grid
                    innerSx={{
                        maxWidth: 1420,
                        gridTemplateColumns: {
                            xs: '50% 50%',
                            md: '25% 25% 25% 25%',
                            lg: '16.6% 16.6% 16.6% 16.6% 16.6% 16.6% ',
                        },
                    }}
                >
                    {experts.map((item, index) => (
                        <GridItem key={index}>
                            <PersonGridItem
                                item={item}
                                onClick={() => setSelectedJudge(item)}
                                nameSx={{
                                    whiteSpace: 'normal',
                                }}
                            />
                        </GridItem>
                    ))}
                </Grid>
            </Section>

            <TheDialog
                open={!!selectedJudge}
                title={selectedJudge ? selectedJudge.name : ''}
                onClose={() => setSelectedJudge(null)}
            >
                {selectedJudge && (
                    <PersonModal
                        selected={selectedJudge}
                        all={experts}
                        setSelected={setSelectedJudge}
                        nextPersonText="NEXT EXPERT"
                    />
                )}
            </TheDialog>
        </PageLayout>
    );
}

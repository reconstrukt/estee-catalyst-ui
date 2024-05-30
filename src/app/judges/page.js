'use client';

import {
    Button,
    Box,
    Typography,
    Stack,
    ButtonBase,
    Dialog,
    IconButton,
} from '@mui/material';
import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';
import CloseIcon from '../../../assets/svg/CloseIcon.svg';

import PressImage from '../../../assets/images/press.jpg';
import judges from '@/cms/judges';
import Grid from '@/components/sections/Grid';
import GridItem from '@/components/sections/GridItem';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import jurymob from '../../../assets/images/jurymob.jpg';
import jury from '../../../assets/images/jury.jpg';

export default function ContactUs() {
    const [selected, setSelected] = useState(null);
    const [nextJudge, setNextJudge] = useState(null);

    const dialogTitleRef = useRef(null);

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
                                    {selected.name}
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
                                    style={{ width: '100%', height: 'auto' }}
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
                                                ></Box>

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
                    </Box>
                )}
            </Dialog>
        </PageLayout>
    );
}

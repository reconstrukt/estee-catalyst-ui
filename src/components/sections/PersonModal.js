import React, { useState, useEffect } from 'react';
import { Box, Stack, ButtonBase, Typography } from '@mui/material';
import Image from 'next/image';

export default function PersonModal({
    selected,
    setSelected,
    all,
    nextPersonText = 'NEXT JURY MEMBER',
}) {
    const [nextJudge, setNextJudge] = useState(null);

    useEffect(() => {
        if (!selected) {
            setNextJudge(null);
        } else {
            let index = all.findIndex((el) => el.name === selected.name);
            if (!!all[index + 1]) {
                setNextJudge(all[index + 1]);
            } else {
                setNextJudge(all[0]);
            }
        }
    }, [selected]);

    const onNextJudgeClick = () => {
        setSelected(nextJudge);
    };

    return (
        <>
            <Box>
                <Stack
                    direction="row"
                    spacing={0.5}
                    alignItems="center"
                    justifyContent="center"
                >
                    {all.map((judge, i) => (
                        <ButtonBase key={i} onClick={() => setSelected(judge)}>
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
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
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
                    <Typography variant="subtitle1">{selected.copy}</Typography>
                </Box>

                {nextJudge && (
                    <Box
                        pt={20}
                        pb={20}
                        sx={{
                            maxWidth: 222,
                            margin: 'auto',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h4" sx={{ mb: 8 }}>
                            {nextPersonText}
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
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Image
                                            src={nextJudge.image.src}
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

                                    <Box pb={4}>
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
    );
}

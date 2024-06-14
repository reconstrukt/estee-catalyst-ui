import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function PersonGridItem({
    item,
    displayName = true,
    displayTitle = true,
    onClick = undefined,
    nameSx,
}) {
    return (
        <Box
            onClick={onClick}
            sx={{
                cursor: onClick ? 'pointer' : 'normal',
                textAlign: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 222,
                    margin: '0 auto',
                    aspectRatio: '222 / 277',
                    mb: 1,
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
                            objectPosition: 'top center',
                        }}
                    />
                )}
            </Box>

            <Box>
                {displayName && (
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 0.5,
                            whiteSpace: {
                                xs: 'normal',
                                lg: 'nowrap',
                            },
                            ...nameSx,
                        }}
                    >
                        {item.name}
                    </Typography>
                )}

                {displayTitle && (
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '20px !important',
                            whiteSpace: {
                                xs: 'normal',
                                lg: 'nowrap',
                            },
                        }}
                    >
                        {item.title}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}

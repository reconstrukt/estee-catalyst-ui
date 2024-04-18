import { Box } from '@mui/material';
// import resolveFileFromContentfulField from '../../lib/functions/resolveFileFromContentfulField.js';
import Image from 'next/image';
import { forwardRef, useMemo } from 'react';
// import { mixins } from '../../lib/theme/theme.js';

/*// set media ratio to width/height given in design
<MediaBox
    src=""
    ratioWidth
    width={500}
    height={300}/>;

// set media ratio to default
<MediaBox
    src=""
    ratioWidth/>;

// set media to inital size, width/height can also be set
<MediaBox
    src=""
    initialSize/>;*/

const MediaBox = forwardRef(
    (
        {
            src,
            alt = '',
            sx,
            className,
            mediaSx,
            mediaProps,
            imageProps,
            videoProps,
            width, // explicitly set width/height
            height,
            children,
            objectFit = 'contain',
            objectPosition = 'center',
            ratioWidth = false,
            ratioHeight = false,
            fill = false,
            initialSize = false,
            onLoad = null,
            setMediaType = 'auto', // image || video
            ...props
        },
        ref,
    ) => {
        const detectMediaType = useMemo(() => {
            if (setMediaType !== 'auto') return setMediaType;
            if (typeof src === 'string') {
                return 'image';
            }
            if (
                resolveFileFromContentfulField(src, 'contentType')?.startsWith(
                    'video',
                )
            )
                return 'video';
            return 'image';
        }, [src, setMediaType]);

        const resolveSrc = useMemo(() => {
            if (!src) return src;
            if (typeof src === 'string') return src;
            return resolveFileFromContentfulField(src);
        }, [src]);

        const mediaDimensions = useMemo(() => {
            const dimensions = {
                width: width || 160,
                height: height || 90,
            };
            if (typeof src === 'string' || (width && height)) {
                return dimensions;
            }
            const details = resolveFileFromContentfulField(src, 'details');
            if (!!details?.image?.width) {
                dimensions.width = details.image.width;
                dimensions.height = details.image.height;
            }
            return dimensions;
        }, [src, width, height]);

        const renderMedia = useMemo(() => {
            const defaultMediaProps = {
                ...mediaProps,
                src: resolveSrc,
            };

            const compiledImageMediaProps = {
                alt,
                fill: fill || ratioHeight || ratioWidth,
                onLoadingComplete: onLoad,
                ...defaultMediaProps,
            };

            const compiledVideoMediaProps = {
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                onCanPlay: onLoad,
                ...defaultMediaProps,

                ...(fill || ratioHeight || ratioWidth
                    ? {
                          // ...mixins.absoluteFill
                      }
                    : {}),
            };

            if (detectMediaType === 'image') {
                return <Image {...compiledImageMediaProps} />;
            } else {
                return <Box component="video" {...compiledVideoMediaProps} />;
            }
        }, [
            detectMediaType,
            resolveSrc,
            alt,
            fill,
            mediaProps,
            onLoad,
            ratioWidth,
            ratioHeight,
        ]);

        if (!ratioHeight && !ratioWidth && !width && !fill && !initialSize) {
            return 'Image missing required attributes: ratioWidth, ratioHeight, width, fill or initialSize.';
        }

        return (
            <Box
                sx={{
                    ...(ratioWidth || ratioHeight
                        ? {
                              position: 'relative',

                              ...(ratioWidth
                                  ? {
                                        width: ratioWidth,
                                    }
                                  : {}),

                              ...(ratioHeight
                                  ? {
                                        width:
                                            ratioHeight *
                                            (mediaDimensions.width /
                                                mediaDimensions.height),
                                    }
                                  : {}),

                              '&::after': {
                                  content: '""',
                                  display: 'block',
                                  width: 1,
                                  pb: `${(mediaDimensions.height / mediaDimensions.width) * 100}%`,
                              },
                          }
                        : {}),

                    '& > img, & > video': {
                        objectFit: ratioWidth
                            ? 'cover'
                            : objectFit ?? 'contain',
                        objectPosition: objectPosition ?? 'center',

                        ...(initialSize
                            ? {
                                  width: mediaDimensions.width,
                                  height: mediaDimensions.height,
                              }
                            : {}),

                        ...mediaSx,
                    },

                    ...(fill
                        ? {
                              //   ...mixins.absoluteFill,
                          }
                        : {}),

                    ...sx,
                }}
                className={className}
                ref={ref}
            >
                {children}
                {!!src && renderMedia}
            </Box>
        );
    },
);

MediaBox.displayName = 'MediaBox';

export default MediaBox;

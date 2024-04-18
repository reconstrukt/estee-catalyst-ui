import { Box, Typography, Button } from '@mui/material';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import Image from 'next/image';

import CatalistsImage from '../../../assets/images/catalysts.jpg';

export default function Catalysts() {
    return (
        <PageLayout transparentHeader={false}>
            <Hero
                sx={{
                    minHeight: '85vh',
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h1" mb={1}>
                        ABOUT THE CATALYSTS
                    </Typography>
                    <Typography variant="subtitle1">
                        Created by The Estée Lauder Companies&apos; New
                        Incubation Ventures THE CATALYSTS is a first-of-its-kind
                        program to find and support the next generation of
                        beauty entrepreneurs.
                    </Typography>
                </Box>
            </Hero>

            <Box
                sx={{
                    textAlign: 'center',
                    p: 2,
                    mb: 2,
                }}
            >
                <Typography variant="subtitle1">
                    With one of the world&apos;s most vibrant economies and a
                    cutting-edge startup community, India represents an exciting
                    opportunity for the beauty industry. The Estée Lauder
                    Companies created THE CATALYSTS as a platform to support
                    aspiring entrepreneurs with capital, mentorship, resources
                    and key partners.
                </Typography>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                }}
            >
                <Image
                    src={CatalistsImage.src}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </Box>
        </PageLayout>
    );
}

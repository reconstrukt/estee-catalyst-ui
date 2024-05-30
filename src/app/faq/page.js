import {
    Box,
    Typography,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import Hero from '@/components/sections/Hero';
import PageLayout from '@/components/layouts/PageLayout';

import faqmob from '../../../assets/images/faqmob.jpg';
import faq from '../../../assets/images/faq.jpg';

export default function FaqPage() {
    return (
        <PageLayout>
            <Hero
                sx={{
                    backgroundImage: {
                        xs: `url(${faqmob.src})`,
                        md: `url(${faq.src})`,
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
                        FAQ
                    </Typography>
                </Box>
            </Hero>

            <Box>
                <Accordion>
                    <AccordionSummary>
                        How do you define a premium beauty brand?
                    </AccordionSummary>
                    <AccordionDetails>
                        “Premium” is more than just the price of products and
                        manifests itself differently across geographies and as
                        consumers and channels evolve. We look for beauty brands
                        that elevate the story, the packaging, the products and
                        the entire brand experience, which combine to create a
                        compelling brand proposition for consumers.
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        How do you define a premium beauty brand?
                    </AccordionSummary>
                    <AccordionDetails>
                        “Premium” is more than just the price of products and
                        manifests itself differently across geographies and as
                        consumers and channels evolve. We look for beauty brands
                        that elevate the story, the packaging, the products and
                        the entire brand experience, which combine to create a
                        compelling brand proposition for consumers.
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        How do you define a premium beauty brand?
                    </AccordionSummary>
                    <AccordionDetails>
                        “Premium” is more than just the price of products and
                        manifests itself differently across geographies and as
                        consumers and channels evolve. We look for beauty brands
                        that elevate the story, the packaging, the products and
                        the entire brand experience, which combine to create a
                        compelling brand proposition for consumers.
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary>
                        How do you define a premium beauty brand?
                    </AccordionSummary>
                    <AccordionDetails>
                        “Premium” is more than just the price of products and
                        manifests itself differently across geographies and as
                        consumers and channels evolve. We look for beauty brands
                        that elevate the story, the packaging, the products and
                        the entire brand experience, which combine to create a
                        compelling brand proposition for consumers.
                    </AccordionDetails>
                </Accordion>
            </Box>
        </PageLayout>
    );
}

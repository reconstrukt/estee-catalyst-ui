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
import Link from 'next/link';

import PlusIcon from '../../../assets/svg/PlusIcon.svg';
import faqmob from '../../../assets/images/faqmob.jpg';
import faq from '../../../assets/images/faq.jpg';

export default function FaqPage() {
    return (
        <PageLayout>
            <Hero
                backgroundImage={{
                    xs: faqmob.src,
                    md: faq.src,
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

            <Box
                sx={{
                    textAlign: 'left',
                    borderTop: '1px solid black',

                    a: {
                        textDecoration: 'underline',
                    },

                    '.MuiButtonBase-root': {
                        '.MuiAccordionSummary-content': {
                            flexGrow: 0,
                            marginRight: '16px !important',
                        },

                        '.MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                            transform: 'rotate(225deg)',
                        },
                    },
                }}
            >
                <Accordion>
                    <AccordionSummary expandIcon={<PlusIcon />}>
                        Who is eligible to apply?
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            sx={{
                                ul: {
                                    paddingLeft: '20px',
                                    textAlign: 'left',
                                },
                            }}
                        >
                            Applicants can be from any category (e.g.,
                            designers, content creators, creative directors,
                            musicians, artists, set designers, filmmakers,
                            photographers, etc.) with an idea that falls under
                            any one or more of the below subcategories:
                            <ul>
                                <li>Makeup</li>
                                <li>Skin care</li>
                                <li>Body care</li>
                                <li>Hair care</li>
                                <li>Fragrance</li>
                                <li>Home fragrance</li>
                                <li>
                                    Creative storytelling – a visual concept,
                                    for example an exhibition, book, or film
                                </li>
                            </ul>
                            <br />
                            <br />
                            Participation is open only to creators who are legal
                            residents of their country of residence, are at
                            least 21 years of age and have attained the age of
                            majority in their state, country or province of
                            residence. Residents of any country currently
                            embargoed or sanctioned by the United States are not
                            eligible to participate in the contest and the
                            contest is void in these jurisdictions and where
                            prohibited (collectively, “ineligible countries”).
                            For the full eligibility requirements, please review
                            the{' '}
                            <Link
                                href="/terms-and-conditions.pdf"
                                target="_blank"
                            >
                                Terms & Conditions
                            </Link>
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<PlusIcon />}>
                        Who decides the winners?
                    </AccordionSummary>
                    <AccordionDetails>
                        The Catalysts is being judged by an esteemed jury of
                        creative figures, including accomplished entrepreneurs,
                        investors, content creators, experts, and
                        representatives from The Estée Lauder Companies and
                        TIkTok. To see the full jury, please{' '}
                        <Link href="/jury">click here</Link>.
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<PlusIcon />}>
                        What can I do with the award money?
                    </AccordionSummary>
                    <AccordionDetails>
                        Award money must be used to further the development of
                        the idea.
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<PlusIcon />}>
                        I have an idea for a brand/product/etc but I haven’t
                        launched it yet, am I eligible?
                    </AccordionSummary>
                    <AccordionDetails>
                        Yes! We welcome applications about brands, products, or
                        services that you need support in getting to market.
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<PlusIcon />}>
                        What’s the deadline for applications?
                    </AccordionSummary>
                    <AccordionDetails>
                        11:59:59 PM ET on August 4, 2024
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<PlusIcon />}>
                        I have more questions! Who can I contact?
                    </AccordionSummary>
                    <AccordionDetails>
                        Please reach out to us at{' '}
                        <a href="mailto:hello@thecatalystsworld.com">
                            hello@thecatalystsworld.com
                        </a>
                        .
                    </AccordionDetails>
                </Accordion>
            </Box>
        </PageLayout>
    );
}

'use client';
import { Box, Typography, Button } from '@mui/material';
import Hero from '@/components/sections/Hero';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import { useEffect } from 'react';
import { validateApplication } from '@/app/lib/api';
import useApplicationPortal from '@/components/application-portal/ApplicationContext';
import { useRouter } from 'next/navigation';

export default function Validate({ params }) {
    const { setStep, setApplication } = useApplicationPortal();
    const router = useRouter();

    useEffect(() => {
        const validate = async () => {
            if (!params.uuid || !params.token) return;

            const res = await validateApplication(params.uuid, params.token);

            if (res.success) {
                console.log(res);
                setApplication(res.data);
                setStep(res.data.step);

                router.push('/?appmodal=1');
            }
        };

        validate();
    }, [params]);

    return (
        <PageLayout hasFooter={false} transparentHeader={false}>
            <Hero>
                <Box
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="subtitle1">
                        We're loading your application...
                        <br />
                        {params.uuid}
                        <br />
                        {params.token}
                    </Typography>
                </Box>
            </Hero>
        </PageLayout>
    );
}

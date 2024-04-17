import Image from 'next/image';
import { Button } from '@mui/material';
import Hero from '@/components/sections/Hero';

export default function Home() {
    return (
        <main>
            <Button>Test</Button>

            <Hero
                backgroundImage={''}
                headline={'THE ESTÉE LAUDER COMPAGNIES'}
                subhead={
                    'New incubation ventures signature program for beauty start-ups in the world.'
                }
                ctaText={'LEARN MORE'}
                ctaOnClick={() => {}}
            />
        </main>
    );
}

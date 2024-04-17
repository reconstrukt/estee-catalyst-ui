'use client';
import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';

const defaultTheme = createTheme();

const GaramondFont = localFont({
    src: [
        {
            path: './fonts/AppleGaramond.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
});

const HelveticaNeueFont = localFont({
    src: [
        {
            path: './fonts/HelveticaNeueBold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
});

const HelveticaNowFont = localFont({
    src: [
        {
            path: './fonts/HelveticaNowDisplay-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
});

const theme = createTheme({
    typography: {
        fontFamily: GaramondFont.style.fontFamily,

        h1: {
            fontFamily: HelveticaNeueFont.style.fontFamily,
        },
        h2: {
            fontFamily: HelveticaNeueFont.style.fontFamily,
        },
        h3: {
            fontFamily: HelveticaNeueFont.style.fontFamily,
        },
        h4: {
            fontFamily: HelveticaNeueFont.style.fontFamily,
        },
        h5: {
            fontFamily: HelveticaNeueFont.style.fontFamily,
        },
        h6: {
            fontFamily: HelveticaNeueFont.style.fontFamily,
        },

        button: {
            fontFamily: HelveticaNowFont.style.fontFamily,
        },
    },
});

export default theme;

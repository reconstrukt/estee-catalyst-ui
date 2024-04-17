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
            path: './fonts/HelveticaNeueCondensedBold.woff2',
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

const palette = {
    white: {
        main: '#fff',
    },
};

const theme = createTheme({
    palette,
    typography: {
        fontFamily: GaramondFont.style.fontFamily,

        h1: {
            fontFamily: HelveticaNeueFont.style.fontFamily,

            fontSize: 110,
            fontWeight: 700,
            lineHeight: '88px',
            letterSpacing: '-0.015em',
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

        subtitle1: {
            fontSize: 48,
            lineHeight: '45.6px',
            letterSpacing: '-0.02em',
        },

        button: {
            fontFamily: HelveticaNowFont.style.fontFamily,
            fontSize: 16,
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                },

                outlinedWhite: {
                    borderColor: palette.white.main,
                },
            },
        },
    },
});

export default theme;

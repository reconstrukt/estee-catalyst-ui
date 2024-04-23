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

    pink: {
        main: '#FF64B4',
    },

    red: {
        main: '#C80000',
    },
};

const typography = {
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

        fontSize: 42,
        fontWeight: 700,
        lineHeight: '37.8px',
        letterSpacing: '-0.015em',
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

    body1: {
        fontSize: 24,
    },

    body2: {
        fontFamily: HelveticaNowFont.style.fontFamily,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '20.8px',
        textAlign: 'center',
    },
};

const theme = createTheme({
    palette,
    typography,

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

        MuiAccordion: {
            defaultProps: {
                elevation: 0,
            },

            styleOverrides: {
                root: {
                    borderBottom: '1px solid black',
                    borderBottomLeftRadius: '0 !important',
                    borderBottomRightRadius: '0 !important',
                    borderTopLeftRadius: '0 !important',
                    borderTopRightRadius: '0 !important',

                    '&.Mui-expanded': {
                        margin: '0 !important', // overwritte default styles
                    },
                },
            },
        },

        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    ...typography.body1,
                },

                content: {
                    justifyContent: 'center',
                    textAlign: 'center',

                    '&.Mui-expanded': {
                        margin: '12px 0 !important', // overwritte default styles
                    },
                },
            },
        },

        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    ...typography.body2,
                    maxWidth: 698,
                    margin: '0 auto',
                },

                content: {
                    justifyContent: 'center',
                    textAlign: 'center',
                },
            },
        },
    },
});

export default theme;

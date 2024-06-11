import { GlobalStyles } from '@mui/material';
import { GaramondFont } from './theme';

const themeGlobalCss = (
    <GlobalStyles
        styles={{
            body: {
                color: 'black',
                fontFamily: GaramondFont.style.fontFamily,
                fontSize: 20,
            },

            a: {
                textDecoration: 'none',
                color: 'inherit',

                '&:hover': {
                    textDecoration: 'underline',
                    textDecorationThickness: 'from-font',
                },
            },

            '.slick-dots': {
                bottom: '25px',
                dispaly: 'flex',

                li: {
                    width: 80,
                },

                'li button': {
                    width: 80,
                    height: 10,
                    padding: 0,
                    display: 'block',

                    position: 'relative',

                    '&::before': {
                        content: '""',
                        display: 'block',
                        width: '100%',
                        height: 2,
                        position: 'absolute',
                        top: 4,
                        left: 0,
                        opacity: 1,
                        background: '#ffffff66',
                    },

                    '&::after': {
                        content: '""',
                        display: 'block',
                        width: '100%',
                        height: 2,
                        position: 'absolute',
                        top: 4,
                        left: 0,
                        background: '#fff',
                        transformOrigin: 'left center',
                        transition: 'transform 5s linear',
                        transform: 'scaleX(0)',
                        opacity: 0,
                    },
                },

                'li.slick-active': {
                    'button::after': {
                        transform: 'scaleX(100%)',
                        opacity: 1,
                    },
                },
            },
        }}
    />
);

export default themeGlobalCss;

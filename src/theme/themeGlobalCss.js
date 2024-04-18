import { GlobalStyles } from '@mui/material';

const themeGlobalCss = (
    <GlobalStyles
        styles={{
            body: {
                color: 'black',
            },

            a: {
                textDecoration: 'none',
                color: 'inherit',

                '&:hover': {
                    textDecoration: 'underline',
                    textDecorationThickness: 'from-font',
                },
            },
        }}
    />
);

export default themeGlobalCss;

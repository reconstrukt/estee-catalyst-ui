import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Providers from '@/components/providers/Providers';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata = {
    title: 'The Catalysts',
    description:
        'All it takes is an idea. Whether you’re a brand founder, fashion designer, perfumer, photographer, skincare scientist, or makeup artist, The Catalysts is an open call for new ideas set to transform the future of beauty – and an opportunity to receive vital funding to make your plans into reality.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Box
                    sx={{
                        position: 'relative',
                        overflowX: 'hidden',
                    }}
                >
                    <AppRouterCacheProvider>
                        <Providers>{children}</Providers>
                    </AppRouterCacheProvider>
                </Box>
            </body>
        </html>
    );
}

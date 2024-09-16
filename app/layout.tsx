// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'
import {ColorSchemeScript, MantineProvider} from '@mantine/core';
import "./globals.css";
import {TopNav} from "@/components/partials/TopNav";
import {AppFooter} from "@/components/partials/AppFooter";

export const metadata = {
    title: 'Galeries Live',
    description: '',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <ColorSchemeScript/>
        </head>
        <body>
        <MantineProvider>
            <>
                <TopNav/>
                {children}
                <AppFooter/>
            </>
        </MantineProvider>
        </body>
        </html>
    );
}
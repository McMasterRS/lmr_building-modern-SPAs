import {Metadata} from 'next'
import {Provider} from "@/components/Provider/Provider";

export const metadata: Metadata = {
    title: 'Modern SPA Demo',
    description: 'Generated by create next app',
    viewport: 'width=device-width, initial-scale=1',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
   // Layouts must accept a children prop.
   // This will be populated with nested layouts or pages
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Provider>
            {children}
        </Provider>
        </body>
        </html>
    )
}

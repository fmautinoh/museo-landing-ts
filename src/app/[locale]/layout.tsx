import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Prata } from '@next/font/google';

const prata = Prata({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-prata',
    weight: "400"
  });
  
  export const metadata: Metadata = {
    title: "MUSAM",
    description: 'Landing Page del Museo Universitario "Santiago Antúnez de Mayolo"',
  };

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={prata.className}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Anuphan, Raleway } from 'next/font/google';
import type { Metadata } from 'next';

const anuphan = Anuphan({
  variable: '--font-anuphan',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOCS_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Sure Documentation',
    template: '%s | Sure Documentation',
  },
  description: 'Documentation hub for Sure Store, prepared for guides, setup notes, and future product references.',
  applicationName: 'Sure Documentation',
  creator: 'Sure',
  publisher: 'Sure',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`dark ${anuphan.variable} ${raleway.variable}`}
      suppressHydrationWarning
    >
      <body className="page-shell">
        <RootProvider theme={{ forcedTheme: 'dark', enableSystem: false }}>
          <div className="sure-shell">{children}</div>
        </RootProvider>
      </body>
    </html>
  );
}

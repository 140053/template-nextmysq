import Providers from "@/components/Providers";
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | {siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/next.svg",
      href: "/next.svg"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full bg-slate-100">
          <main className="pt-20 ">
            <Providers>
              <Navbar />
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
              <Footer />
            </Providers>
          </main>
        </div>
      </body>
    </html>
  )
}

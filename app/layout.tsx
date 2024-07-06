import type { Metadata } from 'next'
import { Inter, Trade_Winds } from 'next/font/google'
import './globals.css'
import 'tailwind-normalize/normalize.css'
import { Header } from '@/components/Header'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const trade = Trade_Winds({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-trade-winds',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'My Next.js App',
    description: 'Created with Next.js app directory',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${trade.variable}`}>
            <body className={inter.className}>
                <Header />
                <main className="bg-[#FAFAFA]">{children}</main>
            </body>
        </html>
    )
}

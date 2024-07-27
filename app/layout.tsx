import type { Metadata } from 'next'
import { Inter, Trade_Winds } from 'next/font/google'
import './globals.css'

import 'tailwind-normalize/normalize.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import Cloud from '../images/cloudlanding.svg'

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
            <body className={`${inter.className} relative flex flex-col min-h-screen`}>
            <Image
                    src={Cloud}
                    alt="Background"
                    layout="fill"
                    className="z-0"
                    padding-right="160px"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
                <Header />

                <main className="flex-grow relative">{children}</main>
                <Footer />
            </body>
        </html>
    )
}

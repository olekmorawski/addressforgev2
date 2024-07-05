import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'tailwind-normalize/normalize.css'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

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
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}

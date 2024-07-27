'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import GithubLogo from '../images/git.svg'
import Moon from '../images/moon.svg'
import Podkreslenie from '../images/podkreslenie.svg'

const AnimatedLink = ({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            className="group relative flex flex-col items-center border-l border-gray-300 pl-4 text-base first:border-0 first:pl-0"
        >
            <span
                className={`mb-1 ${isActive ? 'font-bold text-black' : 'text-gray-600 group-hover:text-black'}`}
            >
                {children}
            </span>
            {!isActive && (
                <motion.div
                    className="absolute bottom-[-4px] left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    animate={{ opacity: 0 }}
                >
                    <Image src={Podkreslenie} alt={'active'} />
                </motion.div>
            )}
        </Link>
    )
}

export const Header = () => {
    return (
        <header className="relative top-0 z-10 h-[110px] w-full">
            <div className="mx-auto max-w-[1440px]">
                <div className="flex items-center justify-between py-4">
                    <Link
                        href="/"
                        className="ml-8 flex items-center font-trade text-5xl font-normal text-black"
                    >
                        <span>AddressForge</span>
                    </Link>
                    <nav className="mr-8 flex items-center space-x-4">
                        <AnimatedLink href="/">Home</AnimatedLink>
                        <AnimatedLink href="/about">About</AnimatedLink>
                        <AnimatedLink href="/terms">Terms of use</AnimatedLink>
                        <Link
                            href="https://github.com/olekmorawski/addressforgev2"
                            className="border-x border-gray-300 px-4"
                        >
                            <Image src={GithubLogo} alt={'Github Link'} />
                        </Link>
                        <button className="p-2">
                            <Image src={Moon} alt={'Moon Icon'} />
                        </button>
                        <Link href="/tool">
                            <button className="box-border flex h-[60px] w-[210px] items-center justify-center rounded-[10.2934px] border border-[#06B6D4] bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]">
                                <span className="text-[26px] font-bold leading-[150%] text-[#F6F6F6]">
                                    Launch app
                                </span>
                            </button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

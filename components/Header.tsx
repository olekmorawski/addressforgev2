import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubLogo from '../images/git.svg'
import { Moon } from '@phosphor-icons/react/dist/ssr'

export const Header = () => {
    return (
        <header className="h-[124px] w-full bg-[#FAFAFA] shadow-sm">
            <div className="mx-auto max-w-[1440px]">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="ml-[78px] mt-8 font-trade text-5xl font-normal text-black"
                    >
                        AdressForge
                    </Link>
                    <nav className="flex items-center space-x-4">
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-gray-800"
                        >
                            About
                        </Link>
                        <Link href="https://github.com/olekmorawski/addressforgev2">
                            <Image src={GithubLogo} alt={'Github Link'} />
                        </Link>
                        <button className="rounded-full bg-gray-200 p-2 text-gray-600 hover:bg-gray-300">
                            <Moon size={24} />
                        </button>
                        <button className="rounded-md bg-purple-500 px-4 py-2 text-white transition-colors hover:bg-purple-600">
                            Launch app
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

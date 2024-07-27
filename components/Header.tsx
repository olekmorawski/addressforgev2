'use client'
import Link from 'next/link'
import Image from 'next/image'
import GithubLogo from '../images/git.svg'
import { Moon } from '@phosphor-icons/react/dist/ssr'

export const Header = () => {
    return (
        <header className="top-0 h-[110px] w-full bg-main">
            <div className="mx-auto max-w-[1440px]">
                <div className="flex items-center justify-between py-4">
                    <Link
                        href="/"
                        className="ml-8 flex items-center font-trade text-5xl font-normal text-black"
                    >
                        <span>AddressForge</span>
                    </Link>
                    <nav className="mr-8 flex items-center space-x-4">
                        <Link
                            href="/about"
                            className="border-l border-gray-300 pl-4 text-base text-gray-600 first:border-0 first:pl-0 hover:text-gray-800"
                        >
                            About
                        </Link>
                        <Link
                            href="/terms"
                            className="border-l border-gray-300 pl-4 text-base text-gray-600 hover:text-gray-800"
                        >
                            Terms of use
                        </Link>
                        <Link
                            href="https://github.com/olekmorawski/addressforgev2"
                            className="border-x border-gray-300 px-4"
                        >
                            <Image src={GithubLogo} alt={'Github Link'} />
                        </Link>
                        <button className="rounded-full bg-gray-200 p-2 text-gray-600 hover:bg-gray-300">
                            <Moon size={24} />
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

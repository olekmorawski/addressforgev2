'use client'
import Link from 'next/link'
import Image from 'next/image'
import GithubLogo from '../images/git.svg'
import { Moon } from '@phosphor-icons/react/dist/ssr'

export const Header = () => {
    return (
        <header className="bg-main top-0 h-[110px] w-full">
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
                            <div className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500">
                                <span className="relative rounded-md bg-[#FAFAFA] px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                                    Launch App
                                </span>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

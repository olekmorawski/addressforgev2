import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubLogo from '../images/git.svg'
import { Moon } from '@phosphor-icons/react/dist/ssr'
import Logo from '../images/AddressForgeLogo.jpg'

export const Header = () => {
    return (
        <header className="h-full w-full bg-[#FAFAFA]">
            <div className="mx-auto max-w-[1440px]">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="my-8 ml-[78px] flex items-center font-trade text-5xl font-normal text-black"
                    >
                        <Image
                            src={Logo}
                            className="mr-2 h-16 w-16"
                            alt="AddressForge Logo Icon"
                        />
                        <span>AdressForge</span>
                    </Link>
                    <nav className="flex items-center space-x-4">
                        <Link
                            href="/about"
                            className="text-base text-gray-600 hover:text-gray-800"
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

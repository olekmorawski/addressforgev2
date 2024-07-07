'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubLogo from '../images/git.svg'
import { Moon } from '@phosphor-icons/react/dist/ssr'
import Logo from '../images/AddressForgeLogo.jpg'

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 w-full bg-[#FAFAFA] transition-shadow duration-300 ${
                isScrolled ? 'shadow-md' : ''
            }`}
        >
            <div className="mx-auto max-w-[1440px]">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="my-8 ml-8 flex items-center font-trade text-5xl font-normal text-black"
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
                        <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500">
                            <span className="relative rounded-md bg-[#FAFAFA] px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                                Launch App
                            </span>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

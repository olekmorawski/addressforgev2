import Image from 'next/image'
import { Infocards } from '@/components/Infocards'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="mx-auto max-w-[1440px] overflow-hidden px-4 py-4">
            <div className="flex flex-col items-start justify-between md:flex-row">
                <div className="mb-8 md:mb-0 md:w-1/2">
                    <h1 className="mb-4 text-4xl font-bold">
                        Ethereum salt generator
                    </h1>
                    <p className="mb-6 text-gray-600">
                        Efficiently create and manage Ethereum salt addresses
                        while optimizing gas costs
                    </p>
                    <Link href="/tool">
                        <span className="group relative mb-2 me-2 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500">
                            <span className="relative rounded-md bg-[#FAFAFA] px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                                Launch App
                            </span>
                        </span>
                    </Link>
                    <div className="mt-4 flex items-center">
                        <span className="mr-2 text-sm text-gray-500">
                            Powered by
                        </span>
                        <Image src={''} alt="Golem" width={60} height={20} />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Infocards />
                </div>
            </div>
        </div>
    )
}

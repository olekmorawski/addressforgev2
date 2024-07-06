import Image from 'next/image'
import GolemLogo from '../images/golem.svg'
import { Infocards } from '@/components/Infocards'

export default function Home() {
    return (
        <div className="mx-auto h-screen max-w-[1440px] px-4 py-8">
            <div className="flex flex-col items-start justify-between md:flex-row">
                <div className="mb-8 md:mb-0 md:w-1/2">
                    <h1 className="mb-4 text-4xl font-bold">
                        Ethereum salt generator
                    </h1>
                    <p className="mb-6 text-gray-600">
                        Efficiently create and manage Ethereum salt addresses
                        while optimizing gas costs
                    </p>
                    <button className="rounded-md bg-purple-500 px-6 py-3 text-white transition-colors hover:bg-purple-600">
                        Launch app
                    </button>
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

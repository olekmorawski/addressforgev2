import Image from 'next/image'
import { Infocards } from '@/components/Infocards'
import Golem from '../images/golem.svg'
import Cloud from '../images/cloudlanding.svg'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex-grow bg-main">
            <main className="mx-auto h-full max-w-[1440px] px-8 py-12">
                <div className="flex flex-col items-start justify-between md:flex-row">
                    <div className="mb-8 md:mb-0 md:w-1/2">
                        <h1 className="mb-4 text-[82px] font-bold leading-[99px]">
                            Ethereum salt generator
                        </h1>
                        <p className="mb-6 text-[31px] leading-[47px] text-gray-600">
                            Efficiently create and manage Ethereum salt
                            addresses while optimizing gas costs
                        </p>
                        <Link href="/tool">
                            <button className="relative order-2 mt-[27px] box-border h-[60px] w-[210px] flex-none flex-grow-0 rounded-[10.2934px] border border-[#06B6D4] bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]">
                                <span className="absolute left-[calc(50%-148px/2+2px)] top-[11px] flex h-[39px] w-[148px] items-center text-[26px] font-bold leading-[150%] text-[#F6F6F6]">
                                    Launch app
                                </span>
                            </button>
                        </Link>
                        <div className="mt-[64px] flex items-center">
                            <span className="font-jost mr-2 text-[20px] leading-[29px] text-black">
                                Powered by
                            </span>
                            <Image
                                src={Golem}
                                alt="Golem"
                                width={92}
                                height={42}
                            />
                        </div>
                    </div>
                    {/* <Image src={Cloud} alt={''} className="absolute"></Image> */}
                    <div className="w-full md:w-1/2">
                        <Infocards />
                    </div>
                </div>
            </main>
        </div>
    )
}

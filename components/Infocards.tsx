import React from 'react'
import {
    Voicemail,
    Fingerprint,
    CurrencyEth,
} from '@phosphor-icons/react/dist/ssr'

export const Infocards = () => {
    const icons = [
        <Voicemail size={36} className="text-blue-500" />,
        <Fingerprint size={36} className="text-blue-500" />,
        <CurrencyEth size={36} className="text-blue-500" />,
    ]

    return (
        <div className="flex flex-col items-end space-y-8">
            {[
                'Create unique Ethereum addresses.',
                'Reduce gas costs through customizing smart contract address.',
                'Build a memorable address identity.',
            ].map((text, index) => (
                <div
                    key={index}
                    className="h-[200px] w-full max-w-[392px] rounded-lg border-2 border-black border-opacity-5 bg-black bg-opacity-5 p-4 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-opacity-10 hover:bg-opacity-10 hover:shadow-md"
                >
                    <div className="flex h-full flex-col items-center justify-between">
                        <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                            {icons[index]}
                        </div>
                        <p className="text-center text-[20px] font-medium leading-[29px] mb-[5%]">
                            {text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

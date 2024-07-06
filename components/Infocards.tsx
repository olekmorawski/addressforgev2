import React from 'react'

export const Infocards = () => (
    <div className="relative">
        {[
            'Create unique Ethereum addresses.',
            'Reduce gas costs through customizing smart contract address.',
            'Build a memorable address identity.',
        ].map((text, index) => (
            <div
                key={index}
                className="relative mb-4 h-[214px] w-[392px] rounded-lg border-2 border-black border-opacity-5 bg-black bg-opacity-5 p-4 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-opacity-10 hover:bg-opacity-10 hover:shadow-md"
            >
                <p className="text-sm">{text}</p>
            </div>
        ))}
    </div>
)

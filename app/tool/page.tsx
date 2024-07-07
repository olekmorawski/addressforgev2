'use client'
import React, { useState } from 'react'
import { Card, CardContent } from '@/components/Card'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Copy } from '@phosphor-icons/react/dist/ssr'

export default function Generator() {
    const [developerAddress, setDeveloperAddress] = useState('')
    const [desiredPattern, setDesiredPattern] = useState('aabc1')
    const [generatedAddress, setGeneratedAddress] = useState(
        '0x3213F8e9432c50BA2c0b41738F941fa8c5B76043'
    )
    const [salt, setSalt] = useState('21234')
    const [remainingGenerations, setRemainingGenerations] = useState(5)

    const handleGenerateSalt = () => {
        setSalt(Math.floor(Math.random() * 100000).toString())
        setRemainingGenerations((prev) => prev - 1)
    }

    return (
        <div className="mx-auto max-w-md space-y-4">
            <Card>
                <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                        <Button variant="outline">Pattern generation</Button>
                        <Button variant="outline">Gas reduction</Button>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Developer address
                        </label>
                        <Input
                            placeholder="Placeholder"
                            value={developerAddress}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setDeveloperAddress(e.target.value)}
                        />
                    </div>

                    <div className="flex space-x-2">
                        <Button variant="outline">Prefix</Button>
                        <Button variant="outline">Suffix</Button>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Desired pattern
                        </label>
                        <Input
                            value={desiredPattern}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setDesiredPattern(e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Address:
                        </label>
                        <div className="text-sm">{generatedAddress}</div>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Difficulty:
                        </label>
                        <Button className="w-full" onClick={handleGenerateSalt}>
                            Generate salt
                        </Button>
                        <div className="mt-1 text-right text-xs">
                            {remainingGenerations}/5 free generations left
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="flex items-center justify-between">
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Salt:
                        </label>
                        <div className="text-lg font-bold">{salt}</div>
                    </div>
                    <Button size="icon" variant="ghost">
                        <Copy />
                    </Button>
                </CardContent>
            </Card>

            <Card className="bg-gray-100">
                <CardContent className="text-sm">
                    Connect your wallet containing at least 10 GLM to unlock
                    FREE and unlimited access to Golem's AI Image Generator.
                </CardContent>
            </Card>
        </div>
    )
}

'use client'
import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/Card'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Copy } from '@phosphor-icons/react/dist/ssr'

export default function Generator() {
    const [developerAddress, setDeveloperAddress] = useState('')
    const [inputAddress, setInputAddress] = useState('aabc1')
    const [editablePartPatern, setEditablePartPatern] = useState('prefix')
    const [elseValueAddress, setElseValueAddress] = useState('A321111')
    const [difficulty, setDifficulty] = useState('')
    const [generatedAddress, setGeneratedAddress] = useState(
        '0x3213F8e9432c50BA2c0b41738F941fa8c5B76043'
    )
    const [salt, setSalt] = useState('21234')
    const [remainingGenerations, setRemainingGenerations] = useState(5)

    const handleGenerateSalt = () => {
        setSalt(Math.floor(Math.random() * 100000).toString())
        setRemainingGenerations((prev) => prev - 1)
    }
    let calculatedDifficulty = "0";

    useEffect(() => {

        const addressLength = inputAddress.length;
        calculatedDifficulty = addressLength > 0 ? Math.pow(16, addressLength).toLocaleString('fullwide', {useGrouping:false}) : "0";
        setDifficulty(calculatedDifficulty);
        if(editablePartPatern === 'prefix') {
            setGeneratedAddress(`0x${inputAddress}${elseValueAddress}`);
        } else {
            setGeneratedAddress(`0x${elseValueAddress}${inputAddress}`);
        }
      }, [inputAddress, elseValueAddress, editablePartPatern]);

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
                            placeholder="0xec84315444eF43a4Ee594168bfD1adCCE4C6816d"
                            value={developerAddress}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setDeveloperAddress(e.target.value)}
                        />
                    </div>

                    <div className="flex space-x-2">
                        <Button 
                            typeControl="toogle"
                            isActive={editablePartPatern === 'prefix'}
                            onClick={() => setEditablePartPatern('prefix')}
                            > Prefix
                        </Button>
                        <Button 
                            typeControl="toogle"
                            isActive={editablePartPatern === 'sufix'} 
                            onClick={() => setEditablePartPatern('sufix')}
                        > Sufix
                        </Button>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Desired pattern
                        </label>

                        <div className="flex space-x-2">
                            <Input 
                                value="0x"
                                style={{
                                    width:'44px',
                                    backgroundColor: '#f5f5f5'
                                }}
                                readOnly
                            />
                        {editablePartPatern === 'prefix' ? (
                            <>
                                <Input
                                    value={elseValueAddress}
                                    style={{
                                        backgroundColor: '#f5f5f5'
                                    }}
                                    readOnly
                                />
                                <Input
                                    value={inputAddress}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setInputAddress(e.target.value)}
                                />
                            </>
                        ) : (
                            <>
                                <Input
                                    value={inputAddress}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setInputAddress(e.target.value)}
                                />
                                <Input
                                    value={elseValueAddress}
                                    style={{
                                        backgroundColor: '#f5f5f5'
                                    }}
                                />
                            </>
                        )}
                        </div>
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
                        <div className="text-sm">{difficulty}</div>
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

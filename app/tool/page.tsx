'use client'
import RootLayout from '../layout'
import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/Card'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Copy } from '@phosphor-icons/react/dist/ssr'
import {
    Tabs,
    TabsHeader,
    Tab,
  } from "@material-tailwind/react";


export default function Generator() {
    const [developerAddress, setDeveloperAddress] = useState('')
    const [inputAddress, setInputAddress] = useState('')
    const [typeGeneration, setTypeGeneration] = useState('pattern')
    const [gasLevelReduction, setGasLevelReduction] = useState(0)
    const [editablePartPatern, setEditablePartPatern] = useState('prefix')
    const [elseValueAddress, setElseValueAddress] = useState('3213F8e9432c50BA2c0b41738F941fa8c5B76043')
    const [difficulty, setDifficulty] = useState('')
    const [generatedAddress, setGeneratedAddress] = useState(
        '0x3213F8e9432c50BA2c0b41738F941fa8c5B76043'
    )
    const [isValidAddress, setIsValidAddress] = useState(true);
    const [salt, setSalt] = useState('21234')
    const [remainingGenerations, setRemainingGenerations] = useState(5)
    let cutAddress='';

    const dataTypeGeneration = [
        {
          label: "Pattern generation",
          value: "pattern",
        },
        {
          label: "Gas reduction",
          value: "gas",
        },
      ];

      const dataEditablePartPatern = [
        {
          label: "Prefix",
          value: "prefix",
        },
        {
          label: "Sufix",
          value: "sufix",
        },
      ];

    const handleGenerateSalt = () => {
        setSalt(Math.floor(Math.random() * 100000).toString())
        setRemainingGenerations((prev) => prev - 1)
    }
    let calculatedDifficulty = "0";
    const ethereumAddressRegex = /^0x[a-fA-F0-9]+$/;

    useEffect(() => {


        const addressLength = inputAddress.length;
        const totalLength = 42;
        let prefix = '0x';
        if(typeGeneration === 'pattern') {
            setGasLevelReduction(0);
            setDifficulty('0')
            calculatedDifficulty = addressLength > 0 ? Math.pow(16, addressLength).toLocaleString('fullwide', {useGrouping:false}) : "0";
        } else {
            setInputAddress('')
            setDifficulty('0')
            calculatedDifficulty =gasLevelReduction > 0 ?   Math.pow(16, gasLevelReduction).toLocaleString('fullwide', {useGrouping:false}): "0";
            }
        setDifficulty(calculatedDifficulty);

        if(editablePartPatern === 'prefix') {
            if(typeGeneration === 'pattern') {
                cutAddress = elseValueAddress.slice(0, 42 - 2 - inputAddress.length);
                setGeneratedAddress(`0x${inputAddress}${cutAddress}`);
            }else {
                prefix = '0x' + '0'.repeat(gasLevelReduction); 
                cutAddress = elseValueAddress.slice(0, 42 - 2 - gasLevelReduction);
                const paddedAddress = cutAddress.padStart(totalLength - prefix.length, '0');
                setGeneratedAddress(prefix+ paddedAddress);
            }
        } else {
            if(typeGeneration === 'pattern') {
            cutAddress = elseValueAddress.slice(0, 42 - 2 - inputAddress.length);
            setGeneratedAddress(`0x${cutAddress}${inputAddress}`);
            } else {
                const suffix = '0'.repeat(gasLevelReduction); 
                cutAddress = elseValueAddress.slice(0, 42 - 2 - gasLevelReduction); 
                const paddedAddress = cutAddress.padEnd(40 - gasLevelReduction, '0'); 
                setGeneratedAddress("0x"+paddedAddress+suffix);
            }
        }
        
      }, [inputAddress, elseValueAddress, editablePartPatern, gasLevelReduction, typeGeneration]);

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const fullAddress = `0x${value}`;
        const isValid = ethereumAddressRegex.test(fullAddress);
        setIsValidAddress(isValid);
        if(value ===''){
          setIsValidAddress(true);
        }
        setInputAddress(value);
      };

      const updateGasLevelReduction = (changeType: 'increase' | 'decrease')  => {
        setGasLevelReduction(prev => {
          if (changeType === 'decrease') {
            return prev > 0 ? prev - 1 : 0;
          } else if (changeType === 'increase') {
            return prev < 20 ? prev + 1 : 20;
          } else {
            return prev; // Nie zmieniaj wartości, jeśli changeType jest nieznany
          }
        });
      };



    return (
        <div className="mx-auto max-w-md space-y-4">

            <Card>
                <CardContent className="mt-10">
                    <div className = "text-sm">
                        <ul>
                            <li>1. Please note that the string adress always starts with 0x.</li>
                            <li>2. You can edit maximum 5 characters in adress. </li>
                            <li>3. String have to be written in hex: 0-9, A-F, a-f. </li>
                            <li>4. Letters can be written in uppercase or lowercase.</li>
                            <li>5. Gas reduction is the amount of the zeros in the prefix.</li>
                            <li>6. The more changes in the adress, the more computational power will be required, therefore increasing gas price. </li>
                        </ul>
                        <div className="text-blue-500  text-justify 24px pt-6 font-bold pl-2 pr-2  text-base">
                            Connect your wallet containing at least 10 GLM to unlock free and unlimited access to AddressForge Salt Generator.
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="space-y-2">
                <label className="mb-1 block text-sm font-medium">
                        Choose adress generation pattern
                        </label>
                        
                        <Tabs value="pattern">
                            <TabsHeader
                            placeholder="Select a tab"
                            >
                            {dataTypeGeneration.map(({ label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    placeholder="Select a tab"
                                    onClick={() => setTypeGeneration(value)}   
                                    >
                                {label}
                                </Tab>
                            ))}
                            </TabsHeader>
                        </Tabs>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Developer address
                        </label>
                        <Input
                            placeholder="Paste your addres ed. 0x3213F8e9432c50BA2c..."
                            value={developerAddress}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setDeveloperAddress(e.target.value)}
                        />
                    </div>

                    <Tabs value="prefix">
                            <TabsHeader
                            placeholder="Select a tab"
                            >
                            {dataEditablePartPatern.map(({ label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    placeholder="Select a tab"
                                    onClick={() => setEditablePartPatern(value)}   
                                    >
                                {label}
                                </Tab>
                            ))}
                            </TabsHeader>
                        </Tabs>

                    {typeGeneration === 'pattern' ? (
                        <>
                        <div>
                            <label className="mb-1 block text-sm font-medium">
                                Desired pattern
                            </label>

                            <div className="flex space-x-2">
                                <Input 
                                    value="0x"
                                    className="w-[48px]  bg-[#f5f5f5]"
                                    readOnly
                                />
                            {editablePartPatern === 'prefix' ? (
                                <>
                                    <Input
                                        value={elseValueAddress}
                                        className="bg-[#f5f5f5] flex-grow"
                                        readOnly
                                    />
                                    <Input
                                        value={inputAddress}
                                        onChange={handleInputChange}
                                        maxLength={20} 
                                        className="flex-grow"
                                    />
                            </>
                        ) : (
                            <>
                                    <Input
                                        value={inputAddress}
                                        onChange={handleInputChange}
                                        maxLength={20} 
                                        className="flex-grow"
                                    />
                                    <Input
                                        value={elseValueAddress}
                                        className="bg-[#f5f5f5] flex-grow"
                                        readOnly
                                    />
                                </>
                        )}
                            </div>
                        </div>
                            </>
                        ) : (
                            <>
                            <label className="mb-1 block text-sm font-medium">
                                Gas reduction level
                            </label>
                            <div className="flex items-center justify-center">
                                <Button 
                                    className="w-1/8 mr-4 bg-[#3B82F6] text-xl"
                                    onClick={() => updateGasLevelReduction('decrease')}
                                > -
                                </Button>
                                <Input
                                    className="w-[40px] text-center"
                                    value={gasLevelReduction}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newValue = parseInt(e.target.value, 10);
                                        if (!isNaN(newValue) && newValue >= 0 && newValue <= 20) {
                                            setGasLevelReduction(newValue);
                                        }
                                    }}
                                />
                                <Button 
                                    className="w-1/8 text-center ml-4 bg-[#3B82F6] text-xl"
                                    onClick={() => updateGasLevelReduction('increase')}
                                > +
                                </Button>
                            </div>
                            </>
                        )}

                </CardContent>
            </Card>

            <Card>
                <CardContent className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium ">
                            Address:
                        </label>
                        <div className="text-sm" >{generatedAddress}</div>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Difficulty:
                        </label>
                        <div className="text-sm">{difficulty}</div>
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500" onClick={handleGenerateSalt}>
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

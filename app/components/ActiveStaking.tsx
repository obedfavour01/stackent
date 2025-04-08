import { Button } from '@/components/ui/button'
import { ArrowRight, Clock } from 'iconsax-react'
import { Copy, ExternalLink, LineChart, RefreshCw, Sliders } from 'lucide-react'
import React from 'react'
import CollapseCard from './CollapseCard'
import { Slider } from '@/components/ui/slider'
import { DotPattern } from '@/components/magicui/dot-pattern'
import { cn } from '@/lib/utils'

const ActiveStaking = () => {
    return (
        <div className="m-6 ">
            <div className="h-[40vh] border border-gray-700  rounded-xl w-full p-2 bg-[#0B0C15]">
                <div className="flex items-start justify-between ">
                    <h2 className="text-white font-light">Your active stakings</h2>
                    <div className="flex items-center  text-gray-400 " >
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <LineChart size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Clock size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <RefreshCw size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Sliders size={16} />
                        </Button>
                    </div>



                </div>

                <div className="bg-[#10111A] rounded-2xl p-4 relative">

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-col gap-3">
                            <h4 className='text-[#cdc5f8] space-x-3 text-xs font-semibold flex items-center gap-4'>
                                Last Update - 45 mins Ago
                                <Clock color="#cdc5f8" variant="Bold" size={14} />
                            </h4>



                            <div className='flex gap-2 items-center'>

                                <h3 className="text-4xl">Stake Avalance (AVAX)</h3>
                                <div className="w-8 h-8 
                                rounded-full 
                                bg-red-500 
                                flex items-center 
                                justify-center 
                                text-white 
                                text-sm"
                                >
                                    A
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                                    <Copy size={14} />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                                    <ExternalLink size={14} />
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 text-gray-300 border-gray-700">
                                    View Profile <ArrowRight size={14} className="ml-1" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[1fr_320px] gap-8">
                        <div>
                            <div className="text-xs text-gray-500 mb-1">Current Reward Balance, AVAX</div>
                            <div className="text-6xl text-white mb-6">31.39686</div>

                            <div className="flex gap-4 mb-6">
                                <Button className="bg-[#6c5dd3] hover:bg-[#5a4dbd] text-white rounded-md">Upgrade</Button>
                                <Button variant="outline" className="text-white border-gray-700">
                                    Unstake
                                </Button>
                            </div>

                            <div className="grid grid-cols-3 gap-4 z-10">
                                <CollapseCard title="Momentum" subtitle="Growth dynamics" expanded>
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-gray-400">Staked Tokens Trend</div>
                                        <div className="bg-[#1a1d25] text-xs px-2 py-0.5 rounded text-gray-300">24H</div>
                                    </div>
                                    <div className="text-2xl font-bold text-white mt-2">-0.82%</div>
                                </CollapseCard>

                                <CollapseCard title="General" subtitle="Overview">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-gray-400">Price</div>
                                        <div className="bg-[#1a1d25] text-xs px-2 py-0.5 rounded text-gray-300">24H</div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="text-2xl font-bold text-white">$41.99</div>
                                        <div className="text-xs text-red-500">-1.09%</div>
                                    </div>
                                </CollapseCard>

                                <CollapseCard title="Risk" subtitle="Risk assessment">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-gray-400">Staking Ratio</div>
                                        <div className="bg-[#1a1d25] text-xs px-2 py-0.5 rounded text-gray-300">24H</div>
                                    </div>
                                    <div className="text-2xl font-bold text-white mt-2">60.6%</div>
                                </CollapseCard>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4">
                                <h3 className="text-lg font-bold text-white mb-1">Investment Period</h3>
                                <div className="text-xs text-gray-400">Contribution Period (Month)</div>
                            </div>

                            <div className="relative mb-8">
                                <div className="absolute right-0 top-0 text-xs text-gray-400">6 Month</div>
                                <div className="absolute left-0 top-8 text-xs text-gray-400">4 Month</div>
                                <Slider defaultValue={[4]} max={6} min={1} step={1} className="mt-6" />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="text-sm text-gray-400">Reward Rate</div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-full bg-gray-700 h-1 rounded-full relative">
                                            <div
                                                className="absolute w-3 h-3 rounded-full bg-white"
                                                style={{ left: "80%", top: "-4px" }}
                                            ></div>
                                            <div className="absolute w-full h-full bg-gradient-to-r from-gray-700 to-purple-500 rounded-full opacity-50"></div>
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            2.23% <span className="text-[10px]">APR Ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-full bg-gray-700 h-1 rounded-full relative">
                                            <div
                                                className="absolute w-3 h-3 rounded-full bg-white"
                                                style={{ left: "40%", top: "-4px" }}
                                            ></div>
                                            <div className="absolute w-full h-full bg-gradient-to-r from-gray-700 to-purple-500 rounded-full opacity-50"></div>
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            1.46% <span className="text-[10px]">APR Ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DotPattern
                        className={cn(
                            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-20 ",
                        )}
                    />
                </div>
            </div>

            {/* Avalanche staking card */}
        </div>
    )
}

export default ActiveStaking
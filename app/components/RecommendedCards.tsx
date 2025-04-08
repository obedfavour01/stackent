import { ShineBorder } from '@/components/magicui/shine-border'
import { CoinDataProps } from '@/hooks/useCoinData'
import { checkPositive } from '@/lib/utils'
import { ArrowDownLeftIcon, ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CoinCharts from './CoinCharts'



const RecommendedCards: React.FC<{ coin: CoinDataProps }> = ({ coin }) => {
    return (
        <div className=" flex 
            flex-col 
            p-4
            relative
            overflow-hidden
            bg-[#0A0B14] 
            w-[240px] 
            h-[260px]
            rounded-3xl">
            <ShineBorder
                shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            />
            <div className="flex mb-4 items-center">

                <Image
                    width={800}
                    height={800}
                    src={coin.image}
                    alt="logo"
                    className="object-contain size-6"
                />

                <div className='ml-3 '>
                    <small className='text-gray-500 '>Proof of Stake</small>
                    <h4 className='text-white'>{coin.name}</h4>
                </div>

                <div className='size-8 
                    flex 
                    justify-center 
                    items-center 
                    ml-auto 
                    rounded-full
                    hover:bg-gray-300'
                >
                    <ArrowUpRightIcon className='text-white hover:text-black' />
                </div>

            </div>
            <div>
                <small>Reward Rate</small>
                <h1 className='text-4xl font-light'>{`$${coin.current_price.toLocaleString()}`}</h1>
                <div className='text-xs gap-4 flex mt-3 items-center'>

                    <div className={`
                    ${checkPositive(coin.price_change_percentage_24h) ? "bg-green-900/70  " : "bg-red-900/70  "}
                        
                        size-6 flex 
                        items-center 
                        justify-center rounded-sm`}>
                        <div className={`
                                size-4 flex 
                                justify-center 
                                items-center 
                                 rounded-full 
                                 ${checkPositive(coin.price_change_percentage_24h) ? "bg-green-500" : "bg-red-500"}`}
                        >
                            {
                                checkPositive(coin.price_change_percentage_24h) ?
                                    <ArrowUpRightIcon color='#000' size={9} /> :
                                    <ArrowDownLeftIcon color='#000' size={9} />
                            }

                        </div>
                    </div>
                    {`${coin.price_change_percentage_24h}%`}
                </div>

            </div>
            <div><CoinCharts coin={coin}/>
                    
            </div>
        </div>
    )
}

export default RecommendedCards
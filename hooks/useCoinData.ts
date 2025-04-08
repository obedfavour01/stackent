"use client"
import { fetchCryptoData } from '@/services/coinData'
import { useQuery } from '@tanstack/react-query'
// import { fetchCoinData } from '@/services/coinData'

export interface CoinDataProps {
    id: string
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    market_cap: number,
    market_cap_rank: number,
    price_change_percentage_24h: number
    sparkline_in_7d: { price: number[] }

}
const useCoinData = () => {

    const { data, isLoading, isFetched } = useQuery<CoinDataProps[]>({
        queryKey: ['coins'],
        queryFn: fetchCryptoData,
        refetchInterval: 10000
    })


    return {
        data,
        isLoading,
        isFetched
    }
}

export default useCoinData
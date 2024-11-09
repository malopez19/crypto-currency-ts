import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Cryptocurrency, CryptoPrice, Pair } from './types'
import { getCryptos, FetchCurrentCryptoPrice } from './services/CryptoServices'

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCrytoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: {} as CryptoPrice,
    fetchCryptos: async () => {
        // fetch data from API
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        // fetch data from API
        const result = await FetchCurrentCryptoPrice(pair)
        set(() => ({
            result
        }))
    }
})))
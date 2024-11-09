import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Cryptocurrency, Pair } from './types'
import { getCryptos, FetchCurrentCryptoPrice } from './services/CryptoServices'

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCrytoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        // fetch data from API
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        // fetch data from API
        const cryptoPrice = await FetchCurrentCryptoPrice(pair)
        console.log(cryptoPrice)
    }
})))
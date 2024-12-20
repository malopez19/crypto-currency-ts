import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Cryptocurrency, CryptoPrice, Pair } from './types'
import { getCryptos, FetchCurrentCryptoPrice } from './services/CryptoServices'

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    loading: boolean
    result: CryptoPrice
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCrytoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: {
        IMAGEURL: "",
        PRICE: "",
        HIGHDAY: "",
        LOWDAY: "",
        CHANGEPCT24HOUR: "",
        LASTUPDATE: ""
    },
    loading: false,
    fetchCryptos: async () => {
        // fetch data from API
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await FetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))
    }
})))
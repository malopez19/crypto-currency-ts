import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Cryptocurrency } from './types'
import { getCryptos } from './services/CryptoServices'

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void>
}

export const useCrytoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        // fetch data from API
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    }
})))
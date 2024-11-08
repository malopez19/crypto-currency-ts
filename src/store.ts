import { create }from 'zustand'
import axios from 'axios'
import { devtools } from 'zustand/middleware'
import { CryptoCurrenciesResponseSchema } from './schema/crypto-schema'
import { Cryptocurrency } from './types'

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void>
}
async function getCryptos() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
    const { data: {Data} } = await axios.get(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)

    if(result.success){
        return result.data
    }
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
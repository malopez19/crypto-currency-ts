import { create }from 'zustand'
import axios from 'axios'
import { CryptoCurrenciesResponseSchema } from './schema/crypto-schema'

async function getCrypto() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
    const { data: {Data} } = await axios.get(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    console.log(result)
}

export const useCrytoStore = create(() => ({
    fetchCryptos: () => {
        // fetch data from API
        getCrypto()
    }
}))
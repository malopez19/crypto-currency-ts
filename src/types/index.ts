import { z } from 'zod'
import { currencySchema, CryptoCurrencyResponseSchema, PairSchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof currencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>


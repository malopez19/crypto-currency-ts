import { z } from 'zod'
import { currencySchema, CryptoCurrencyResponseSchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof currencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>

import { z } from 'zod'
import { currencySchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof currencySchema>

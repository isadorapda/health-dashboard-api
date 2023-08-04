import 'dotenv/config'
import { z } from 'zod'

export const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z
    .enum(['production', 'development', 'test'])
    .default('development'),
})

const _env = envSchema.safeParse(process.env)
if (!_env.success) {
  console.error(
    'Invalid Environment Variable',
    console.error(_env.error.format())
  )
  throw new Error('Invalid Environment Variable')
}

export const env = _env.data

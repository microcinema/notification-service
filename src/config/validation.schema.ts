import { z } from 'zod'

export enum Environment {
	DEVELOPMENT = 'development',
	STAGING = 'staging',
	PRODUCTION = 'production'
}

export default z.object({
	NODE_ENV: z.enum(Environment).default(Environment.DEVELOPMENT),
	RMQ_URL: z.string().nonempty(),
	RMQ_QUEUE: z.string().nonempty()
})

import { Global, Module } from '@nestjs/common'

import { RmqService } from './rmq.service.js'

@Global()
@Module({
	providers: [RmqService],
	exports: [RmqService]
})
export class RmqModule {}

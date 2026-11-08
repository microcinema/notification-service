import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { RmqModule } from './infrastructure/rmq/rmq.module.js'

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), RmqModule]
})
export class AppModule {}

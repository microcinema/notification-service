import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { RmqModule } from './infrastructure/rmq/rmq.module.js'
import { NotificationsModule } from './modules/notifications/notifications.module.js';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), RmqModule, NotificationsModule]
})
export class AppModule {}

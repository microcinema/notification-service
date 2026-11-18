import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import configuration from './config/configuration.js'
import { RmqModule } from './infrastructure/rmq/rmq.module.js'
import { NotificationsModule } from './modules/notifications/notifications.module.js'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
			expandVariables: true
		}),
		RmqModule,
		NotificationsModule
	]
})
export class AppModule {}

import { Controller } from '@nestjs/common'
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices'

import { RmqService } from '../../infrastructure/rmq/rmq.service.js'

import { NotificationsService } from './notifications.service.js'

@Controller()
export class NotificationsController {
	public constructor(
		private readonly notificationsService: NotificationsService,
		private readonly rmqService: RmqService
	) {}

	@EventPattern('auth.otp.requested')
	public async otpRequested(@Payload() data: any, @Ctx() ctx: unknown) {
		const rmqCtx = ctx as RmqContext

		try {
			console.log('OTP event received: ', data)

			this.rmqService.ack(rmqCtx)
		} catch (error) {
			const message = error instanceof Error ? error.message : error
			console.log('OTP processing error: ', message)

			this.rmqService.nack(rmqCtx)
		}
	}
}

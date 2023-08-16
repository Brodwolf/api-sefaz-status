import { ApiTags } from '@nestjs/swagger'
import { LogHandler } from '../logger/LogHandler'
import { Injectable, OnModuleInit } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import { SefazInstance } from 'src/modules/sefaz/sefaz.instance'

@Injectable()
@ApiTags('Cron Jobs')
export class CronjobsService implements OnModuleInit {
  constructor(
    private readonly sefazInstance: SefazInstance,
    private readonly logger: LogHandler,
  ) {}

  onModuleInit() {
    this.updateSefazTask()
  }
  
  @Cron(CronExpression.EVERY_5_MINUTES, { name: 'updateSefazTask' })
  async updateSefazTask() {
    try {
      await this.sefazInstance.updateStatus()
    } catch (error) {
      this.logger.error(error)
    }
  }
}

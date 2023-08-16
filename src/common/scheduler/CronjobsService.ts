import { ApiTags } from '@nestjs/swagger'
import { LogHandler } from '../logger/LogHandler'
import { Cron, CronExpression } from '@nestjs/schedule'
import { Injectable, OnModuleInit } from '@nestjs/common'
import { SefazInstance } from 'src/modules/sefaz/sefaz.instance'

@Injectable()
@ApiTags('Cron Jobs')
export class CronjobsService implements OnModuleInit {
  constructor(private readonly sefazInstance: SefazInstance, private readonly logger: LogHandler) {}

  onModuleInit() {
    this.updateSefazTask()
  }

  @Cron(CronExpression.EVERY_30_SECONDS, { name: 'updateSefazTask' })
  async verifyStatusList() {
    this.sefazInstance.getStatusList()
  }

  @Cron(CronExpression.EVERY_5_MINUTES, { name: 'updateSefazTask' })
  async updateSefazTask() {
    try {
      this.sefazInstance.updateStatus()
    } catch (error) {
      this.logger.error(error)
    }
  }
}

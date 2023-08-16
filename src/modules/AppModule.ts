import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { SefazModule } from './sefaz/sefaz.module'
import { SefazInstance } from './sefaz/sefaz.instance'
import { LogHandler } from 'src/common/logger/LogHandler'
import { CronjobsService } from '../common/scheduler/CronjobsService'

@Module({
  providers: [SefazInstance, CronjobsService, LogHandler],
  imports: [SefazModule, ScheduleModule.forRoot()],
})
export class AppModule {}

import { Module } from '@nestjs/common'
import { SefazController } from './sefaz.controller'
import { SefazInstance } from './sefaz.instance'
import { LogHandler } from 'src/common/logger/LogHandler'

@Module({
  imports: [],
  controllers: [SefazController],
  providers: [SefazInstance, LogHandler],
})
export class SefazModule {}

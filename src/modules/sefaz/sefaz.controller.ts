import { Response } from 'express'
import { ApiOperation } from '@nestjs/swagger'
import { SefazInstance } from './sefaz.instance'
import { LogHandler } from 'src/common/logger/LogHandler'
import { Controller, Get, HttpStatus, Res } from '@nestjs/common'

@Controller('sefaz')
export class SefazController {
  constructor(
    private readonly sefazInstance: SefazInstance,
    private readonly logger: LogHandler
  ) {}

  @Get('/status')
  @ApiOperation({ summary: 'Get GatewayConfigDto by SellerId' })
  // @ApiResponse({ type: GatewayConfigDto, status: HttpStatus.OK, description: 'Returns multiple GatewayConfigs' })
  async getAll(@Res() response: Response): Promise<void> {
    const statusList = await this.sefazInstance.getStatusList()
    // response.status(HttpStatus.OK).json(new ListResponseDto(items, count));
    response.status(HttpStatus.OK).json(statusList)
  }
}

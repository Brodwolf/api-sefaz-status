import { Response } from 'express'
import { SefazInstance } from './sefaz.instance'
import { stateList } from 'src/common/definition'
import { SefazStatusDto } from './dto/SefazStatusDto'
import { LogHandler } from 'src/common/logger/LogHandler'
import { ListResponseDto } from 'src/common/dto/ListResponseDto'
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger'
import { Controller, Get, HttpStatus, NotFoundException, Param, Res } from '@nestjs/common'
import { StateEntity } from 'src/common/interfaces/StateEntity'
import { EnumException } from './enum/EnumException'
import { SefazStatusByStateDto } from './dto/SefazStatusByStateDto'
@Controller('sefaz')
export class SefazController {
  constructor(private readonly sefazInstance: SefazInstance, private readonly logger: LogHandler) {}

  @Get('/status')
  @ApiOperation({ summary: 'Get all Sefaz status' })
  @ApiResponse({ type: ListResponseDto<SefazStatusByStateDto>, status: HttpStatus.OK, description: 'Returns a List of All Status Response' })
  async getAllSefazStatus(@Res() response: Response): Promise<void> {
    const statusList = await this.sefazInstance.getStatusList()
    this.validateSuccessfulScrapping(statusList)
    response.status(HttpStatus.OK).json(new ListResponseDto(statusList, statusList.length))
  }

  @Get(':stateAcronym/status')
  @ApiResponse({ type: SefazStatusByStateDto, status: HttpStatus.OK, description: 'Returns a SefazStatus by state' })
  @ApiOperation({ summary: 'Get SefazStatus by state' })
  @ApiParam({ name: 'stateAcronym', type: 'string', description: 'Acronym of the State' })
  async getSefazStatusByState(@Res() response: Response, @Param('stateAcronym') stateAcronym: string): Promise<void> {
    const statusList = await this.sefazInstance.getStatusList()

    this.validateStateAcronym(stateAcronym)
    this.validateSuccessfulScrapping(statusList)

    const stateAuthorizer = stateList.find(state => state.acronym === stateAcronym.toUpperCase())
    const stateStatus = statusList.find(status => status.authorizer === stateAuthorizer.authorizer)

    response.status(HttpStatus.OK).json(new SefazStatusByStateDto(stateStatus))
  }

  private validateStateAcronym(stateAcronym: string): void {
    if (!stateList.find(state => state.acronym === stateAcronym.toUpperCase())) {
      throw new NotFoundException('State parameter is not valid')
    }
  }

  private validateSuccessfulScrapping(statusList: SefazStatusDto[]) {
    if (!statusList || statusList.length === 0) {
      this.logger.error(EnumException.NOT_FOUND)
      throw new NotFoundException(EnumException.NOT_FOUND)
    }
  }
}

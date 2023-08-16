import { Injectable } from '@nestjs/common'
import { TableScraper } from './table.scrapper'
import { stateList } from 'src/common/definition'
import { StateDto } from 'src/common/dto/StateDto'
import { EnumException } from './enum/EnumException'
import { SefazStatusDto } from './dto/SefazStatusDto'
import { LogHandler } from 'src/common/logger/LogHandler'
import { parseSefazStatus } from './utils/parseSefazStatus'
import { RawSefazStatus } from './interfaces/RawSefazStatus'
import { EnumSefazApiStatus } from './enum/EnumSefazApiStatus'
import { SefazStatusByStateDto } from './dto/SefazStatusByStateDto'
import { StateAuthorizerEntity } from 'src/common/interfaces/StateAuthorizerEntity'
import { SefazInstanceConfig, colorMapping } from './interfaces/SefazInstanceConfig'
import { EnumSefazStatusScrappingReference } from './enum/EnumSefazStatusScrappingReference'

@Injectable()
export class SefazInstance {
  private readonly config: SefazInstanceConfig
  private statusList: SefazStatusDto[]

  public constructor(private readonly logger: LogHandler) {
    this.config = {
      url: process.env.SEFAZ_WEBSITE_URL,
      colorMapping: {
        [EnumSefazStatusScrappingReference.BOLA_VERDE]: EnumSefazApiStatus.OPERATIONAL,
        [EnumSefazStatusScrappingReference.BOLA_AMARELA]: EnumSefazApiStatus.DEGRADED,
        [EnumSefazStatusScrappingReference.BOLA_VERMELHA]: EnumSefazApiStatus.OUTAGE,
      },
    }
  }

  public getConfig(key: keyof SefazInstanceConfig): string | colorMapping {
    return this.config[key]
  }

  public async getStatusList(): Promise<SefazStatusDto[]> {
    await this.updateStatusIfRequired()
    return this.statusList
  }

  public async updateStatus(): Promise<void> {
    try {
      const tableScraper = new TableScraper(this.config)
      const fetchedData = await tableScraper.fetchData()

      if (fetchedData.length > 0) {
        this.setStatusList(this.mapStatusByState(fetchedData))
      } else {
        this.logger.error(EnumException.NOT_FOUND)
      }
    } catch (error) {
      this.logger.error(error)
    }
  }

  private async updateStatusIfRequired(): Promise<void> {
    if (!this.statusList || this.statusList.length === 0) {
      await this.updateStatus()
    }
  }

  private setStatusList(data: SefazStatusDto[]): void {
    this.statusList = data
  }

  private mapStatusByState(statusList: RawSefazStatus[]): SefazStatusByStateDto[] {
    const parsedStatusList = parseSefazStatus(statusList)
    return stateList.map((state: StateAuthorizerEntity) => ({
      state: new StateDto({ ...state }),
      ...parsedStatusList.find(status => status.authorizer === state.authorizer),
    }))
  }
}

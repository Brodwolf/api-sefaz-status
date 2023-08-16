import { Injectable } from '@nestjs/common'
import { TableScraper } from './table.scrapper'
import { LogHandler } from 'src/common/logger/LogHandler'

@Injectable()
export class SefazInstance {
  private readonly config: Record<string, any>
  private statusList: any

  public constructor(private readonly logger: LogHandler) {
    this.config = {
      url: 'https://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx',
      colorMapping: {
        'imagens/bola_verde_P.png': 'operational',
        'imagens/bola_amarela_P.png': 'degraded',
        'imagens/bola_vermelho_P.png': 'outage',
      },
    }
  }

  public getConfig(key: string): any {
    return this.config[key]
  }

  private setStatusList(data: any): void {
    this.statusList = data
  }

  public async getStatusList(): Promise<any> {
    if (!this.statusList) {
      await this.updateStatus()
    }
    return this.statusList
  }

  public async updateStatus(): Promise<void> {
    const tableScraper = new TableScraper(
      this.getConfig('url'),
      this.getConfig('colorMapping')
    )
    try {
      this.setStatusList(await tableScraper.fetchData())
    } catch (error) {
      this.logger.error(error)
    }
  }
}

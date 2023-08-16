import cheerio from 'cheerio'
import { Builder } from 'selenium-webdriver'
import { Options } from 'selenium-webdriver/chrome'
import { SefazInstanceConfig } from './interfaces/SefazInstanceConfig'
import { RawSefazStatus } from './interfaces/RawSefazStatus'

interface TableDataRow {
  Autorizador: string;
  [key: string]: string;
}

export class TableScraper {
  constructor(private config: SefazInstanceConfig) {}

  private async setupDriver(): Promise<any> {
    const options = new Options().headless()
    return new Builder().forBrowser('chrome').setChromeOptions(options).build()
  }

  private async extractData($: any): Promise<TableDataRow[]> {
    const tableData: TableDataRow[] = []
    const table = $('table.tabelaListagemDados')

    const headers = table
      .find('th')
      .map((_index: number, th: any) => $(th).text().trim())
      .get()

    table.find('tr').each((_index: number, row: any) => {
      const rowData: string[] = []
      const tableDataRow: TableDataRow = { Autorizador: '' }

      $(row)
        .find('td')
        .each((_index: number, td: any) => {
          const img = $(td).find('img')
          if (img.length) {
            const imgSrc = img.attr('src') || ''
            const colorName = this.config.colorMapping[imgSrc] || ''
            rowData.push(colorName)
          } else {
            rowData.push($(td).text().trim())
          }
        })

      headers.forEach((header: string | number, i: string | number) => {
        tableDataRow[header] = rowData[i]
      })

      tableData.push(tableDataRow)
    })

    return tableData
  }

  async fetchData(): Promise<RawSefazStatus[]> {
    const driver = await this.setupDriver()

    try {
      await driver.get(this.config.url)
      const pageSource = await driver.getPageSource()
      const $ = cheerio.load(pageSource)
      const tableData = await this.extractData($)
      const jsonData = JSON.stringify(tableData, null, 2)

      return JSON.parse(jsonData)
    } finally {
      await driver.quit()
    }
  }
}

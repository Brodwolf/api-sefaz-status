import cheerio from 'cheerio'
import { Builder } from 'selenium-webdriver'
import { Options } from 'selenium-webdriver/chrome'

interface ColorMapping {
  [key: string]: string;
}

interface TableDataRow {
  Autorizador: string;
  [key: string]: string;
}

export class TableScraper {
  private url: string
  private colorMapping: ColorMapping

  constructor(url: string, colorMapping: ColorMapping) {
    this.url = url
    this.colorMapping = colorMapping
  }

  private async setupDriver(): Promise<any> {
    const options = new Options().headless()
    return new Builder().forBrowser('chrome').setChromeOptions(options).build()

    // const chromeDriverPath = '/usr/bin/chromedriver' 

    // // Set up Chrome options
    // const chromeOptions = new chrome.Options()
    // chromeOptions.setChromeBinaryPath('/usr/bin/chromium-browser')

    // return new Builder()
    //   .forBrowser('chrome')
    //   .setChromeOptions(chromeOptions)
    //   .setChromeService(new chrome.ServiceBuilder(chromeDriverPath))
    //   .build()

  }

  private async extractData($: any): Promise<TableDataRow[]> {
    const tableData: TableDataRow[] = []
    const table = $('table.tabelaListagemDados')

    const headers = table.find('th').map((index: any, th: any) => $(th).text().trim()).get()

    table.find('tr').each((index: any, row: any) => {
      const rowData: string[] = []
      const tableDataRow: TableDataRow = { Autorizador: '' }

      $(row).find('td').each((index: any, td: any) => {
        const img = $(td).find('img')
        if (img.length) {
          const imgSrc = img.attr('src') || ''
          const colorName = this.colorMapping[imgSrc] || ''
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

  async fetchData(): Promise<any> {
    const driver = await this.setupDriver()

    try {
      await driver.get(this.url)
      const jsonData = await this.extractData(cheerio.load(await driver.getPageSource()))
      return JSON.parse(JSON.stringify(jsonData, null, 2)) // Parse and format JSON
    } finally {
      await driver.quit()
    }
  }
}

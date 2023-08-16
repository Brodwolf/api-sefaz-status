import { Injectable } from '@nestjs/common'
import * as winston from 'winston'

import { addslashes } from '../common.functions'
import { LogContext } from './LogHandler.types'

@Injectable()
export class LogHandler {
  private logger: winston.Logger
  private context?: LogContext[]

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.metadata(),
        winston.format.printf(({ level, message, ...opts }) => {
          const metadata = (
            (opts.metadata?.context as Record<string, any>) || []
          ).reduce(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (acc, { key, val }) => `${acc} ${key}="${val}"`,
            '',
          )
          return `datetime="${
            opts.metadata.timestamp
          }" level="${level.toUpperCase()}" ${metadata} message="${message}"`
        }),
      ),
    })
    this.logger.add(new winston.transports.Console())
  }

  /**
   * Adiciona entrada contexto para ser utilizada como auxiliar de log
   *
   * @param key
   * @param val
   */
  public addContext(key: string, val: string): void {
    if (!this.context?.length) {
      this.context = []
    }
    const index = this.context.findIndex((value) => value.key === key)
    if (index !== -1) {
      this.context[index].val = val
    } else {
      this.context.push({ key, val })
    }
  }

  /**
   * Escreve mensagem de LOG em contexto de INFO
   *
   * @param message
   */
  public info(message: string): void {
    this.logger.info(addslashes(message), { context: this.context })
  }

  /**
   * Escreve mensagem de LOG em contexto de ERRO
   *
   * @param message
   */
  public error(message: string): void {
    this.logger.error(addslashes(message), { context: this.context })
  }

  /**
   * @param {Error} error
   */
  public static exception(error: Error): void {
    const logger = new LogHandler()
    const stack = (<Error>error).stack.split('\n').map((s) => s.trim())
    if (stack) {
      logger.addContext('stack', addslashes(JSON.stringify(stack)))
    }
    logger.error(error.message)
  }
}

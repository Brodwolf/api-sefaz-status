import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { Response } from 'express'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    if (exception?.getStatus?.() !== HttpStatus.NOT_FOUND) {
      // eslint-disable-next-line no-console
      console.log(exception)
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let message = exception?.getResponse?.()?.message || [exception.message]
    if (Array.isArray(message)) {
      message = message.map(str => str.charAt(0).toUpperCase() + str.slice(1)).join('. ')
    }

    host
      .switchToHttp()
      .getResponse<Response>()
      .status(exception?.getStatus?.() || HttpStatus.INTERNAL_SERVER_ERROR)
      .json({
        code: exception?.getStatus?.() || HttpStatus.INTERNAL_SERVER_ERROR,
        status: 'error',
        message,
      })
  }
}

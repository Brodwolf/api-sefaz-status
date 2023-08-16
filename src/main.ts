import { NestFactory } from '@nestjs/core'
import { Swagger } from './common/Swagger'
import { AppModule } from './modules/AppModule'
import { LogHandler } from './common/logger/LogHandler'
import { HttpExceptionFilter } from './common/HttpExceptionFilter'
import { HttpStatus, ValidationPipe } from '@nestjs/common'

const IS_DEV = true

async function bootstrap() {
  const logger = new LogHandler()
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  IS_DEV && Swagger.forApp(app)
  await app.listen(3000, () => logger.info(`App is Up and running: ${3000}`))
}
bootstrap()

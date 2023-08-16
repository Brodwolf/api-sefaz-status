// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
import { Swagger } from './common/Swagger'
import { NestFactory } from '@nestjs/core'
import { APP_PORT, IS_DEV } from './settings'
import { AppModule } from './modules/AppModule'
import { HttpStatus, ValidationPipe } from '@nestjs/common'
import { HttpExceptionFilter } from './common/HttpExceptionFilter'

async function bootstrap() {
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
  await app.listen(APP_PORT, () => console.log(`App is up and running on port ${APP_PORT}`))
}
bootstrap()

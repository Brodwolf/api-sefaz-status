import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/AppModule';
import { Swagger } from './common/Swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Swagger.forApp(app)
  await app.listen(3000);
}
bootstrap();
